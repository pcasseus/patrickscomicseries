import React from "react";
import { FaSearch, FaBook } from "react-icons/fa";

export default function Book2Header({
  progressPercent,
  searchTerm,
  setSearchTerm,
  setShowGlossary,
  unlockedCount,
  totalChapters,
}) {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-red-500 uppercase tracking-widest mb-2 text-center drop-shadow">
        Book 2: A New World Order
      </h1>

      <div className="text-center uppercase text-sm tracking-widest font-bold mb-6">
        <span className="bg-red-600 text-black px-4 py-1 rounded shadow-md animate-pulse">
          ⚠️ ALERT: Powerful Deviants At Large
        </span>
      </div>

      <div className="mb-10 text-center space-y-4">
        <h2 className="uppercase text-red-400 font-bold text-lg tracking-widest">
          Surveillance File: {unlockedCount}/{totalChapters} Unlocked
        </h2>
        <div className="w-full bg-zinc-800 rounded-full h-3 max-w-2xl mx-auto">
          <div
            className="bg-red-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex items-center border border-red-500 rounded px-2">
            <FaSearch className="text-red-400 mr-2" />
            <input
              type="text"
              placeholder="Search Chapters..."
              className="bg-transparent text-white outline-none py-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowGlossary(true)}
            className="flex items-center gap-2 px-3 py-1 border border-red-500 text-red-400 hover:bg-red-500 hover:text-black rounded transition"
          >
            <FaBook /> Glossary
          </button>
        </div>
      </div>
    </>
  );
}
