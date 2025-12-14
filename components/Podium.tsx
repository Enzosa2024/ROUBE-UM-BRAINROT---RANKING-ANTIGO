import React from 'react';
import { Player } from '../types';
import { Crown, TrendingUp, ShieldCheck } from 'lucide-react';

interface PodiumProps {
  players: Player[];
}

const Podium: React.FC<PodiumProps> = ({ players }) => {
  const [first, second, third] = players;

  const PlayerInfo = ({ player, textColor, isFirst = false }: { player: Player; textColor: string; isFirst?: boolean }) => (
    <div className="mb-2 text-center flex flex-col items-center">
      <p className={`font-bold flex items-center gap-2 ${isFirst ? 'text-2xl' : 'text-lg'} ${textColor} ${isFirst ? 'drop-shadow-md' : ''}`}>
        {player.username}
      </p>
      <p className={`${isFirst ? 'text-yellow-200 text-lg' : 'text-slate-400 text-sm'} font-mono font-bold`}>
        {player.wealth}
      </p>
    </div>
  );

  return (
    <div className="w-full flex justify-center items-end gap-2 md:gap-8 mb-12 pt-8 px-4">
      {/* 2nd Place */}
      <div className="flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-100">
        <div className="mb-2 text-slate-300 font-bold flex items-center gap-1">
          <span className="text-xl">#2</span>
          <ShieldCheck size={16} />
        </div>
        
        <PlayerInfo player={second} textColor="text-slate-200" />
        
        <div className="h-24 w-20 md:w-32 bg-gradient-to-t from-slate-800 to-slate-700/50 mt-2 rounded-t-lg border-t border-slate-600 shadow-[0_0_15px_rgba(203,213,225,0.1)]"></div>
      </div>

      {/* 1st Place */}
      <div className="flex flex-col items-center z-10 -mb-4 animate-in slide-in-from-bottom duration-700">
        <Crown className="text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] animate-bounce" size={40} fill="currentColor" />
        
        <PlayerInfo player={first} textColor="text-yellow-400" isFirst />

        <div className="h-32 w-24 md:w-40 bg-gradient-to-t from-yellow-900/40 to-yellow-600/20 mt-2 rounded-t-lg border-t-2 border-yellow-500/50 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(250,204,21,0.2)]">
             <div className="absolute inset-0 bg-yellow-400/10 animate-pulse"></div>
        </div>
      </div>

      {/* 3rd Place */}
      <div className="flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-200">
        <div className="mb-2 text-orange-400 font-bold flex items-center gap-1">
          <span className="text-xl">#3</span>
          <TrendingUp size={16} />
        </div>
        
        <PlayerInfo player={third} textColor={third.isUser ? 'text-blue-400' : 'text-orange-200'} />

        <div className="h-20 w-20 md:w-32 bg-gradient-to-t from-orange-900/30 to-orange-800/20 mt-2 rounded-t-lg border-t border-orange-600/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]"></div>
      </div>
    </div>
  );
};

export default Podium;