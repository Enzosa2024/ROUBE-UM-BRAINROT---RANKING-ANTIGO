import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Bot } from 'lucide-react';
import { generateBrainrotAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

interface OracleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OracleModal: React.FC<OracleModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Eu sou o Oráculo Brainrot. Pergunte sobre o top global ou como ficar rico! (Skibidi rizz)' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await generateBrainrotAdvice(input);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-purple-500/50 shadow-2xl overflow-hidden flex flex-col h-[500px]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 flex justify-between items-center border-b border-purple-500/30">
          <div className="flex items-center gap-2 text-white font-bold">
            <Sparkles className="text-yellow-400" size={20} />
            <span>Oráculo Brainrot</span>
          </div>
          <button onClick={onClose} className="text-purple-200 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-2 items-center text-slate-400 text-xs">
                <Bot size={14} className="animate-bounce" />
                <span>Consultando os deuses do Roblox...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte ao Oráculo..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-full px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-full disabled:opacity-50 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleModal;
