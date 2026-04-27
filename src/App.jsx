import React, { useState } from 'react';
import HomePage from './components/HomePage';
import NutritionPage from './components/NutritionPage';
import AICoachPage from './components/AICoachPage';
import LogPage from './components/LogPage';
import ProfilePage from './components/ProfilePage';

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen pb-32">
      {/* Dynamic Page Rendering */}
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "nutrition" && <NutritionPage setPage={setPage} />}
      {page === "ai" && <AICoachPage setPage={setPage} />}
      {page === "log" && <LogPage setPage={setPage} />}
      {page === "profile" && <ProfilePage setPage={setPage} />}

      {/* FAB Assistant */}
      <button 
        onClick={() => setPage("ai")}
        className="fixed bottom-28 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white z-50 organic-gradient hover:scale-105 active:scale-90 transition-all duration-300"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
      </button>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-2xl border-t border-white/30 shadow-[0_-8px_32px_rgba(45,90,67,0.08)] rounded-t-[32px]">
        <div 
          onClick={() => setPage("home")}
          className={`flex flex-col items-center justify-center font-['Space_Grotesk'] text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${page === 'home' ? 'text-emerald-700 bg-emerald-50/50 rounded-2xl px-3 py-1 active:scale-90 ease-out' : 'text-slate-400 hover:text-emerald-600'}`}
        >
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </div>
        <div 
          onClick={() => setPage("nutrition")}
          className={`flex flex-col items-center justify-center font-['Space_Grotesk'] text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${page === 'nutrition' ? 'text-emerald-700 bg-emerald-50/50 rounded-2xl px-3 py-1 active:scale-90 ease-out' : 'text-slate-400 hover:text-emerald-600'}`}
        >
          <span className="material-symbols-outlined">restaurant_menu</span>
          <span>Nutrition</span>
        </div>
        <div 
          onClick={() => setPage("ai")}
          className={`flex flex-col items-center justify-center font-['Space_Grotesk'] text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${page === 'ai' ? 'text-emerald-700 bg-emerald-50/50 rounded-2xl px-3 py-1 active:scale-90 ease-out' : 'text-slate-400 hover:text-emerald-600'}`}
        >
          <span className="material-symbols-outlined">smart_toy</span>
          <span>AI Coach</span>
        </div>
        <div 
          onClick={() => setPage("log")}
          className={`flex flex-col items-center justify-center font-['Space_Grotesk'] text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${page === 'log' ? 'text-emerald-700 bg-emerald-50/50 rounded-2xl px-3 py-1 active:scale-90 ease-out' : 'text-slate-400 hover:text-emerald-600'}`}
        >
          <span className="material-symbols-outlined">history_edu</span>
          <span>Log</span>
        </div>
        <div 
          onClick={() => setPage("profile")}
          className={`flex flex-col items-center justify-center font-['Space_Grotesk'] text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${page === 'profile' ? 'text-emerald-700 bg-emerald-50/50 rounded-2xl px-3 py-1 active:scale-90 ease-out' : 'text-slate-400 hover:text-emerald-600'}`}
        >
          <span className="material-symbols-outlined">person</span>
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
}
