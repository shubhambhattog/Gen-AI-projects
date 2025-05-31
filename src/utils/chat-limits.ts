// Chat limit constants and utilities
export const CHAT_LIMITS = {
  FREE_MESSAGES: 2, // Number of free messages per session
  WARNING_THRESHOLD: 1, // Show warning after this many messages
} as const;

export interface ChatSession {
  messageCount: number;
  userApiKey?: string;
  sessionId: string;
  createdAt: number;
}

export class ChatLimitManager {
  private static SESSION_KEY = 'gen-ai-chat-session';
  
  static getSession(): ChatSession {
    if (typeof window === 'undefined') {
      return this.createNewSession();
    }
    
    const stored = localStorage.getItem(this.SESSION_KEY);
    if (!stored) {
      return this.createNewSession();
    }
    
    try {
      const session = JSON.parse(stored) as ChatSession;
      return session;
    } catch {
      return this.createNewSession();
    }
  }
  
  static createNewSession(): ChatSession {
    const session: ChatSession = {
      messageCount: 0,
      sessionId: Date.now().toString(),
      createdAt: Date.now(),
    };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }
    
    return session;
  }
  
  static updateSession(updates: Partial<ChatSession>): ChatSession {
    const current = this.getSession();
    const updated = { ...current, ...updates };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(updated));
    }
    
    return updated;
  }
  
  static incrementMessageCount(): ChatSession {
    const session = this.getSession();
    return this.updateSession({
      messageCount: session.messageCount + 1
    });
  }
  
  static setUserApiKey(apiKey: string): ChatSession {
    return this.updateSession({ userApiKey: apiKey });
  }
  
  static hasReachedLimit(): boolean {
    const session = this.getSession();
    return session.messageCount >= CHAT_LIMITS.FREE_MESSAGES && !session.userApiKey;
  }
  
  static shouldShowWarning(): boolean {
    const session = this.getSession();
    return session.messageCount >= CHAT_LIMITS.WARNING_THRESHOLD && 
           session.messageCount < CHAT_LIMITS.FREE_MESSAGES && 
           !session.userApiKey;
  }
  
  static getRemainingMessages(): number {
    const session = this.getSession();
    if (session.userApiKey) return Infinity;
    return Math.max(0, CHAT_LIMITS.FREE_MESSAGES - session.messageCount);
  }
  
  static clearSession(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.SESSION_KEY);
    }
  }
}
