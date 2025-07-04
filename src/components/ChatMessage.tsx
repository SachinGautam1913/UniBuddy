import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex items-start gap-4 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      
      <div className={`max-w-5xl rounded-2xl px-8 py-6 ${
        isBot 
          ? 'bg-white text-gray-800 shadow-sm border border-gray-200' 
          : 'bg-blue-500 text-white'
      }`}>
        <div className="whitespace-pre-wrap text-base leading-relaxed">
          {message.content}
        </div>
        <div className={`text-sm mt-4 ${
          isBot ? 'text-gray-500' : 'text-blue-100'
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;