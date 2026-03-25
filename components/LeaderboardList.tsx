import React from 'react';
import { Player } from '../types';

interface LeaderboardListProps {
  players: Player[];
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({ players }) => {
  return (
    <div className="w-full space-y-1">
      {players.map((player) => (
        <div 
          key={player.rank} 
          className={`
            flex items-center justify-between p-4 rounded-2xl group transition-all duration-300
            ${player.isUser 
              ? 'bg-gradient-to-r from-fuchsia-600/20 to-cyan-600/20 border border-white/10' 
              : 'hover:bg-white/5'}
          `}
        >
          <div className="flex items-center gap-5">
            <div className={`
              w-10 h-10 rounded-xl flex items-center justify-center font-black italic text-lg
              ${player.rank === 1 ? 'bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]' : 
                player.rank === 2 ? 'bg-zinc-300 text-black' :
                player.rank === 3 ? 'bg-orange-500 text-black' :
                'bg-zinc-800 text-zinc-500 group-hover:text-zinc-300'}
            `}>
              {player.rank}
            </div>
            
            <div className="flex flex-col">
              <span className={`text-base tracking-tight ${player.isUser ? 'font-black text-fuchsia-400' : 'font-bold text-zinc-100'}`}>
                {player.username}
              </span>
              {player.isUser && (
                <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">
                  Sua Posição
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <span className={`text-sm font-black tabular-nums ${player.rank <= 3 ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
              {player.wealth}
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mt-1 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
      
      {players.length === 0 && (
         <div className="py-20 text-center">
           <div className="text-4xl mb-4">🛸</div>
           <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
             Vazio no Espaço
           </div>
         </div>
      )}
    </div>
  );
};

export default LeaderboardList;