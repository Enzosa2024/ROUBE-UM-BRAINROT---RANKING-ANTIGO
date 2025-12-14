import React, { useState } from 'react';
import { LEADERBOARD_DATA } from './constants';
import Podium from './components/Podium';
import LeaderboardList from './components/LeaderboardList';
import OracleModal from './components/OracleModal';
import { Search, Trophy, Bot } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOracleOpen, setIsOracleOpen] = useState(false);

  const filteredPlayers = LEADERBOARD_DATA.filter(player => 
    player.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const top3 = LEADERBOARD_DATA.slice(0, 3);
  const listPlayers = searchTerm 
    ? filteredPlayers 
    : LEADERBOARD_DATA.slice(3); // If searching, show all matches. If not, show from rank 4 down.

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Navbar / Header */}
        <header className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
              <Trophy className="text-black" size={28} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight italic">
                ROUBE UM BRAINROT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">- RANKING ANTIGO</span>
              </h1>
              <p className="text-slate-400 text-xs font-mono tracking-widest uppercase">Global Leaderboard</p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
             <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Buscar player..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-slate-600"
              />
            </div>
            
            <button 
              onClick={() => setIsOracleOpen(true)}
              className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-purple-900/50"
            >
              <Bot size={18} />
              <span className="hidden md:inline">Oráculo Brainrot</span>
            </button>
          </div>
        </header>

        {/* Podium (Only show if not searching or if search yields top players) */}
        {!searchTerm && (
           <Podium players={top3} />
        )}

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">Total Money (Top 50)</p>
                <p className="text-xl font-mono font-bold text-green-400">R$ 137.4 Bilhões</p>
            </div>
             <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">Players Ativos</p>
                <p className="text-xl font-mono font-bold text-blue-400">2.4M</p>
            </div>
             <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">Sua Posição</p>
                <p className="text-xl font-mono font-bold text-yellow-400">#3</p>
            </div>
             <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">Status do Servidor</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <p className="text-xl font-mono font-bold text-slate-200">Ranking Antigo</p>
                </div>
            </div>
        </div>

        {/* Main List */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-4 px-2">
            <h2 className="text-xl font-bold text-slate-200">
              {searchTerm ? 'Resultados da Busca' : 'Ranking Global (Top 50)'}
            </h2>
            <span className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded-full border border-slate-700">
              Atualizado agora
            </span>
          </div>
          
          <LeaderboardList players={listPlayers} />
        </div>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-sm py-8">
            <p>Roube um Brainrot - Ranking Antigo &copy; 2024. Todos os valores são fictícios (apenas brainrot).</p>
            <p className="text-xs mt-1 opacity-50">Desenvolvido com React & Tailwind</p>
        </footer>

      </div>

      <OracleModal isOpen={isOracleOpen} onClose={() => setIsOracleOpen(false)} />
    </div>
  );
};

export default App;