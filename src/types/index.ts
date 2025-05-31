export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Persona {
  id: string;
  name: string;
  description: string;
  avatar: string;
  systemPrompt: string;
  examples: PersonaExample[];
}

export interface PersonaExample {
  user: string;
  assistant: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface ChatResponse {
  message: string;
  error?: string;
}
