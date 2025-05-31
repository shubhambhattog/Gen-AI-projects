import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { apiKey } = await request.json();

    if (!apiKey || typeof apiKey !== 'string') {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 }
      );
    }

    if (!apiKey.startsWith('sk-')) {
      return NextResponse.json(
        { error: 'Invalid API key format' },
        { status: 400 }
      );
    }

    // Test the API key with a minimal request
    const client = new OpenAI({
      apiKey: apiKey,
    });

    try {
      // Make a simple request to validate the key
      await client.models.list();
      
      return NextResponse.json({
        valid: true,
        message: 'API key is valid'
      });    } catch (error: unknown) {
      console.error('API key validation error:', error);
      
      const apiError = error as { status?: number };
      
      if (apiError.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key. Please check your key and try again.' },
          { status: 401 }
        );
      }
      
      if (apiError.status === 429) {
        return NextResponse.json(
          { error: 'API key quota exceeded. Please check your OpenAI billing.' },
          { status: 429 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to validate API key. Please try again.' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Validation endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
