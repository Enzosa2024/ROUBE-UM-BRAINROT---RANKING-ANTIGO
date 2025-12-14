import React from 'react';
import { Player } from '../types';

interface LeaderboardListProps {
  players: Player[];
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({ players }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-700 bg-slate-800/50 text-slate-400 text-sm font-bold uppercase tracking-wider sticky top-0 z-20 backdrop-blur-md">
        <div className="col-span-2 md:col-span-1 text-center">#</div>
        <div className="col-span-6 md:col-span-8">Player</div>
        <div className="col-span-4 md:col-span-3 text-right">Patrimônio</div>
      </div>
      
      <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {players.map((player) => (
          <div 
            key={player.rank} 
            className={`
              grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-800/50 
              hover:bg-slate-800 transition-colors duration-200 group
              ${player.isUser ? 'bg-blue-900/20 border-l-4 border-l-blue-500' : ''}
            `}
          >
            {/* Rank */}
            <div className="col-span-2 md:col-span-1 text-center font-mono font-bold text-slate-500 group-hover:text-white transition-colors">
              {player.rank}
            </div>

            {/* Name */}
            <div className="col-span-6 md:col-span-8 flex items-center gap-3">
              <span className={`font-semibold truncate ${player.isUser ? 'text-blue-400' : 'text-slate-200'}`}>
                {player.username}
                {player.isUser && <span className="ml-2 text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded uppercase tracking-wide">Você</span>}
              </span>
            </div>

            {/* Wealth */}
            <div className="col-span-4 md:col-span-3 text-right font-mono text-slate-300 font-medium group-hover:text-green-400 transition-colors">
              {player.wealth}
            </div>
          </div>
        ))}
        
        {players.length === 0 && (
           <div className="p-8 text-center text-slate-500">
             Nenhum player encontrado. O brainrot consumiu tudo.
           </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardList;