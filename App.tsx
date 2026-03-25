import React, { useState } from 'react';
import { LEADERBOARD_DATA } from './constants';
import LeaderboardList from './components/LeaderboardList';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = LEADERBOARD_DATA.filter(player => 
    player.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-2xl mx-auto px-6 py-16 relative z-10">
        
        {/* Vibrant Header */}
        <header className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 p-[1px] rounded-full">
              <div className="bg-black px-4 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Legacy Ranking
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Roube um Brainrot
          </h1>
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Ranking Antigo
          </p>
          
          <div className="relative max-w-sm mx-auto mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-fuchsia-500/50" size={18} />
            <input
              type="text"
              placeholder="Procurar lenda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-fuchsia-500/50 focus:ring-4 focus:ring-fuchsia-500/10 transition-all text-white placeholder-zinc-600"
            />
          </div>
        </header>

        {/* Main List */}
        <main className="bg-zinc-900/30 backdrop-blur-sm rounded-3xl p-2 border border-white/5">
          <LeaderboardList players={filteredPlayers} />
        </main>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; 2024 Roube um Brainrot &bull; Estética Vibrante
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;