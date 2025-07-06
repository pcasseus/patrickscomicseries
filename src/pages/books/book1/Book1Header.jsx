import React from "react";
import { FaSearch, FaBook } from "react-icons/fa";

export default function Book1Header({
  progressPercent,
  searchTerm,
  setSearchTerm,
  unlockedCount,
  totalChapters,
  setShowGlossary,
}) {
  return (
    <div className="mb-10 text-center space-y-4">
      <h2 className="uppercase text-yellow-300 font-bold text-xl tracking-wider">
        Story Progress: {unlockedCount}/{totalChapters} Unlocked
      </h2>
      <div className="w-full bg-zinc-800 rounded-full h-3 max-w-2xl mx-auto">
        <div
          className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="flex items-center border border-yellow-400 rounded px-2">
          <FaSearch className="text-yellow-300 mr-2" />
          <input
            type="text"
            placeholder="Search Chapters..."
            className="bg-transparent text-green-200 outline-none py-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => setShowGlossary(true)}
          className="flex items-center gap-2 px-3 py-1 border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black rounded transition"
        >
          <FaBook /> Glossary
        </button>
      </div>
    </div>
  );
}
