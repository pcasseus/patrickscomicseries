import React from "react";
import { FaSearch, FaBook } from "react-icons/fa";

export default function Book3Header({
  progressPercent,
  searchTerm,
  setSearchTerm,
  unlockedCount,
  totalChapters,
  setShowGlossary,
}) {
  return (
    <>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-cyan-400 uppercase tracking-widest mb-4 text-center drop-shadow">
        Book 3: Invasion
      </h1>

      <div className="text-center uppercase text-xs sm:text-sm tracking-widest font-bold mb-6">
        <span className="bg-cyan-700 text-black px-3 py-1 rounded shadow-md animate-pulse block max-w-fit mx-auto">
          🚨 COSMIC DISTURBANCE DETECTED — SYSTEM OVERRIDE
        </span>
      </div>

      <div className="mb-10 text-center space-y-4 px-4">
        <h2 className="uppercase text-cyan-300 font-bold text-base sm:text-lg tracking-widest">
          Infiltration Log: {unlockedCount}/{totalChapters} Unlocked
        </h2>

        <div className="w-full bg-zinc-800 rounded-full h-3 max-w-2xl mx-auto">
          <div
            className="bg-cyan-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
          <div className="flex items-center border border-cyan-500 rounded px-2 w-full sm:w-auto">
            <FaSearch className="text-cyan-300 mr-2" />
            <input
              type="text"
              placeholder="Search Chapters..."
              className="bg-transparent text-white outline-none py-1 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowGlossary(true)}
            className="flex items-center justify-center gap-2 px-3 py-1 border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black rounded transition w-full sm:w-auto"
          >
            <FaBook /> Glossary
          </button>
        </div>
      </div>
    </>
  );
}
