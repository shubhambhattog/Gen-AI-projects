import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { hiteshPersona } from '@/data/projects';
import { CHAT_LIMITS } from '@/utils/chat-limits';

export async function POST(request: NextRequest) {
  try {
    const { messages, userApiKey, sessionData } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Check rate limits
    const messageCount = sessionData?.messageCount || 0;
    const hasUserApiKey = !!userApiKey;
    
    if (!hasUserApiKey && messageCount >= CHAT_LIMITS.FREE_MESSAGES) {
      return NextResponse.json(
        { error: 'Free message limit reached. Please provide your OpenAI API key to continue.', limitReached: true },
        { status: 429 }
      );
    }

    // Get the persona (for now we only have Hitesh, but this is extensible)
    const persona = hiteshPersona;
    
    if (!persona) {
      return NextResponse.json(
        { error: 'Persona not found' },
        { status: 404 }
      );
    }

    // Use user's API key if provided, otherwise use system key
    const apiKey = userApiKey || process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'No API key available' },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: apiKey,
    });

    // Prepare messages with system prompt
    const chatMessages = [
      { role: 'system' as const, content: persona.systemPrompt },
      ...messages
    ];

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = response.choices[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: 'No response generated' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: assistantMessage,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
