import React from 'react';
import { Player } from '../types';
import { Crown } from 'lucide-react';

interface PodiumProps {
  players: Player[];
}

const Podium: React.FC<PodiumProps> = ({ players }) => {
  const [first, second, third] = players;

  const PodiumItem = ({ player, height, color, rank }: { player: Player; height: string; color: string; rank: number }) => (
    <div className="flex flex-col items-center justify-end w-1/3">
      <div className="mb-3 text-center">
         {rank === 1 && <Crown className="text-yellow-500 mx-auto mb-1" size={24} fill="currentColor" />}
        <p className={`font-bold text-sm md:text-base truncate max-w-[100px] md:max-w-full ${rank === 1 ? 'text-white' : 'text-zinc-300'}`}>
          {player.username}
        </p>
        <p className="text-xs font-mono text-zinc-500 mt-1">
          {player.wealth}
        </p>
      </div>
      
      {/* Simple Bar */}
      <div 
        className={`w-full md:w-24 rounded-t-sm ${color}`} 
        style={{ height: height }}
      >
        <div className="text-center mt-2 font-bold text-black/50 text-xl">{rank}</div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-end gap-2 md:gap-4 border-b border-zinc-800 pb-8 mb-8">
      {/* 2nd Place */}
      <PodiumItem player={second} rank={2} height="100px" color="bg-zinc-600" />

      {/* 1st Place */}
      <PodiumItem player={first} rank={1} height="140px" color="bg-yellow-500" />

      {/* 3rd Place */}
      <PodiumItem player={third} rank={3} height="80px" color="bg-orange-700" />
    </div>
  );
};

export default Podium;