export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  category?: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  query: string;
}

export interface ChatCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}