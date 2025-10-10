import React from 'react';
import { Link } from 'react-router-dom';

export default function Lore() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 font-mono relative overflow-hidden">
      {/* Holo Gridlines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#ffffff0b_0px,#ffffff0b_1px,transparent_3px)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#ffffff0b_0px,#ffffff0b_1px,transparent_3px)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-2 uppercase tracking-widest text-center animate-glow-header">
          Lore Index
        </h1>
        <p className="text-center text-gray-400 italic mb-12 tracking-wide">
          Explore the deeper world of the <span className="text-blue-300">KenshinVerse</span>.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Active Links */}
          <Link
            to="/lore/races"
            className="group bg-yellow-900/90 hover:bg-yellow-800/90 border border-yellow-500 p-6 rounded-xl shadow-lg relative transition-all duration-300 card-hover-glow"
          >
            <h2 className="text-xl font-bold text-yellow-300 mb-2 group-hover:underline underline-offset-4">
              🧬 Races
            </h2>
            <p className="text-gray-300">
              Learn about the different evolved species and superhuman classes.
            </p>
          </Link>

          {/* Unlocked POI Card */}
          <Link
            to="/lore/pois"
            className="group bg-yellow-900/90 hover:bg-yellow-800/90 border border-yellow-500 p-6 rounded-xl shadow-lg relative transition-all duration-300 card-hover-glow"
          >
            <h2 className="text-xl font-bold text-yellow-300 mb-2 group-hover:underline underline-offset-4">
              📍 Points of Interest
            </h2>
            <p className="text-gray-300">
              Discover key locations, bases, and landmarks across the KenshinVerse.
            </p>
          </Link>

          {/* Future Teases */}
          <div className="opacity-30 border border-dashed border-yellow-500 p-6 rounded-xl bg-yellow-900/50 text-yellow-300 pointer-events-none select-none">
            <h2 className="text-xl font-bold mb-2">🔒 Historical Archives</h2>
            <p className="text-gray-300">Timeline logs and recorded key events — Coming Soon</p>
          </div>

          <div className="opacity-30 border border-dashed border-yellow-500 p-6 rounded-xl bg-yellow-900/50 text-yellow-300 pointer-events-none select-none">
            <h2 className="text-xl font-bold mb-2">🔒 Tech & Artifacts</h2>
            <p className="text-gray-300">Legendary items, enhancements, and alien relics — Coming Soon</p>
          </div>
        </div>

        {/* Console Status Footer */}
        <div className="mt-16 text-xs text-green-400 text-center tracking-widest border-t border-yellow-700 pt-4">
          STATUS: ACCESS GRANTED — LORE CONSOLE ACTIVE
        </div>
      </div>
    </div>
  );
}
