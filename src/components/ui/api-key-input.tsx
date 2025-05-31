'use client';

import { useState } from 'react';
import { ChatLimitManager } from '@/utils/chat-limits';
import { API_LINKS } from '@/constants/links';

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  onCancel?: () => void;
}

export default function ApiKeyInput({ onApiKeySet, onCancel }: ApiKeyInputProps) {
  const [apiKey, setApiKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');

  const validateAndSetApiKey = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your OpenAI API key');
      return;
    }

    if (!apiKey.startsWith('sk-')) {
      setError('Invalid API key format. OpenAI API keys start with "sk-"');
      return;
    }

    setIsValidating(true);
    setError('');

    try {
      // Test the API key with a simple request
      const response = await fetch('/api/chat/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid API key');
      }

      // Save the API key and notify parent
      ChatLimitManager.setUserApiKey(apiKey);
      onApiKeySet(apiKey);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to validate API key');
    } finally {
      setIsValidating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      validateAndSetApiKey();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
            🔑
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            API Key Required
          </h3>
          <p className="text-gray-400 text-sm">
            You've reached the free message limit. Please enter your OpenAI API key to continue chatting.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-2">
              OpenAI API Key
            </label>
            <input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="sk-..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isValidating}
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </div>

          <div className="bg-blue-950/30 border border-blue-800/50 rounded-md p-3">
            <div className="flex items-start">
              <div className="text-blue-400 mr-2">ℹ️</div>
              <div className="text-sm text-blue-300">
                <p className="font-medium mb-1">How to get your API key:</p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Visit <a href={API_LINKS.openai.apiKeys} target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300">platform.openai.com/api-keys</a></li>
                  <li>Sign in to your OpenAI account</li>
                  <li>Click "Create new secret key"</li>
                  <li>Copy and paste the key here</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            {onCancel && (
              <button
                onClick={onCancel}
                className="flex-1 px-4 py-2 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-800 transition-colors"
                disabled={isValidating}
              >
                Cancel
              </button>
            )}
            <button
              onClick={validateAndSetApiKey}
              disabled={isValidating || !apiKey.trim()}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isValidating ? 'Validating...' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
