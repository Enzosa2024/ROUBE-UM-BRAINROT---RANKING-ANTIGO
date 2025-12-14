export interface Player {
  rank: number;
  username: string;
  wealth: string; // Formatted string (e.g., "18,2 Bilhões")
  rawValue: number; // Numeric value for calculations
  change?: 'up' | 'down' | 'equal';
  isUser?: boolean; // To highlight "enzosa2023"
  avatarUrl?: string; // Optional custom avatar URL
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
