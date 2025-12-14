import React, { useState } from 'react';
import { LEADERBOARD_DATA } from './constants';
import Podium from './components/Podium';
import LeaderboardList from './components/LeaderboardList';
import { Search, Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = LEADERBOARD_DATA.filter(player => 
    player.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const top3 = LEADERBOARD_DATA.slice(0, 3);
  const listPlayers = searchTerm 
    ? filteredPlayers 
    : LEADERBOARD_DATA.slice(3);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-10">
      
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Simple Header */}
        <header className="flex flex-col items-center py-10 gap-4 text-center">
          <div className="flex items-center gap-3">
            <Trophy className="text-yellow-500" size={32} />
            <h1 className="text-3xl font-bold tracking-tight">
              Roube um Brainrot <span className="text-zinc-500 text-xl block md:inline md:text-3xl">- Ranking Antigo</span>
            </h1>
          </div>

          <div className="relative w-full max-w-md mt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Buscar player..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors text-white placeholder-zinc-600"
            />
          </div>
        </header>

        {/* Podium */}
        {!searchTerm && (
           <Podium players={top3} />
        )}

        {/* Main List */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-zinc-400 mb-4 px-2 uppercase tracking-wider text-xs">
            {searchTerm ? 'Resultados' : 'Top 50 Global'}
          </h2>
          <LeaderboardList players={listPlayers} />
        </div>

        {/* Footer */}
        <footer className="text-center text-zinc-600 text-xs py-10">
            <p>Roube um Brainrot &copy; 2024. Valores fictícios.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;