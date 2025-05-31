'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/types';
import { ChatLimitManager } from '@/utils/chat-limits';
import ApiKeyInput from './api-key-input';

interface ChatInterfaceProps {
  personaName: string;
  personaDescription: string;
  personaId: string;
}

export default function ChatInterface({ personaName, personaDescription, personaId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(() => ChatLimitManager.getSession());
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Check if limit reached
    if (ChatLimitManager.hasReachedLimit()) {
      setShowApiKeyInput(true);
      return;
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
          personaId,
          userApiKey: session.userApiKey,
          sessionData: session
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.limitReached) {
          setShowApiKeyInput(true);
          return;
        }
        throw new Error(data.error || 'Failed to send message');
      }

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Update session message count
      const updatedSession = ChatLimitManager.incrementMessageCount();
      setSession(updatedSession);
      
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const handleApiKeySet = (apiKey: string) => {
    const updatedSession = ChatLimitManager.setUserApiKey(apiKey);
    setSession(updatedSession);
    setShowApiKeyInput(false);
  };

  const getRemainingMessages = () => ChatLimitManager.getRemainingMessages();
  const shouldShowWarning = () => ChatLimitManager.shouldShowWarning();

  return (
    <>
      {showApiKeyInput && (
        <ApiKeyInput 
          onApiKeySet={handleApiKeySet}
          onCancel={() => setShowApiKeyInput(false)}
        />
      )}
      
      <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <div>
            <h3 className="text-lg font-semibold">{personaName}</h3>
            <p className="text-sm opacity-90">{personaDescription}</p>
          </div>
          <div className="flex items-center space-x-3">
            {!session.userApiKey && (
              <div className="text-right">
                <div className="text-xs opacity-75">Messages left</div>
                <div className="text-sm font-semibold">{getRemainingMessages()}</div>
              </div>
            )}
            <button
              onClick={clearChat}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md text-sm transition-colors"
            >
              Clear Chat
            </button>
          </div>
        </div>

        {/* Warning Banner */}
        {shouldShowWarning() && (
          <div className="bg-amber-50 border-b border-amber-200 p-3">
            <div className="flex items-center text-amber-800">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">
                You have {getRemainingMessages()} free messages remaining. 
                <button 
                  onClick={() => setShowApiKeyInput(true)}
                  className="ml-1 underline hover:no-underline font-medium"
                >
                  Add your API key
                </button> for unlimited access.
              </span>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              <p className="text-lg mb-2">👋 Start a conversation!</p>
              <p className="text-sm">Ask me anything about coding, tech, or life in general...</p>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.timestamp && (
                  <p className={`text-xs mt-1 opacity-70`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                ChatLimitManager.hasReachedLimit() 
                  ? "Add your API key to continue chatting..." 
                  : "Type your message..."
              }
              disabled={isLoading || ChatLimitManager.hasReachedLimit()}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button
              onClick={ChatLimitManager.hasReachedLimit() ? () => setShowApiKeyInput(true) : sendMessage}
              disabled={isLoading || (!input.trim() && !ChatLimitManager.hasReachedLimit())}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : ChatLimitManager.hasReachedLimit() ? (
                '🔑'
              ) : (
                'Send'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
