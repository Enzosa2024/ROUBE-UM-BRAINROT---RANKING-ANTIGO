import React from 'react';
import { Player } from '../types';

interface LeaderboardListProps {
  players: Player[];
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({ players }) => {
  return (
    <div className="w-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
      <div className="grid grid-cols-12 gap-2 p-3 bg-zinc-800 text-zinc-400 text-xs font-bold uppercase">
        <div className="col-span-2 md:col-span-1 text-center">#</div>
        <div className="col-span-6 md:col-span-8">Player</div>
        <div className="col-span-4 md:col-span-3 text-right">Patrimônio</div>
      </div>
      
      <div>
        {players.map((player) => (
          <div 
            key={player.rank} 
            className={`
              grid grid-cols-12 gap-2 p-3 items-center border-b border-zinc-800 last:border-0
              ${player.isUser ? 'bg-blue-900/10' : 'hover:bg-zinc-800/50'}
            `}
          >
            {/* Rank */}
            <div className="col-span-2 md:col-span-1 text-center font-mono text-zinc-500 font-bold">
              {player.rank}
            </div>

            {/* Name */}
            <div className="col-span-6 md:col-span-8">
              <span className={`font-medium ${player.isUser ? 'text-blue-400' : 'text-zinc-200'}`}>
                {player.username}
                {player.isUser && <span className="ml-2 text-[10px] bg-blue-900 text-blue-200 px-1 rounded border border-blue-800">VOCÊ</span>}
              </span>
            </div>

            {/* Wealth */}
            <div className="col-span-4 md:col-span-3 text-right font-mono text-zinc-400 text-sm">
              {player.wealth}
            </div>
          </div>
        ))}
        
        {players.length === 0 && (
           <div className="p-8 text-center text-zinc-500 text-sm">
             Nenhum player encontrado.
           </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardList;