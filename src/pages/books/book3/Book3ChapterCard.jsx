import React from "react";
import { FaEye, FaBookOpen, FaStar, FaLock } from "react-icons/fa";

export default function Book3ChapterCard({
  chapter,
  index,
  hovered,
  setHovered,
}) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative bg-black border-2 rounded-xl p-4 transition-all duration-300 shadow-md border-zinc-700 opacity-60 hover:opacity-90"
    >
      <div className="mb-3 relative overflow-hidden border border-cyan-600 rounded-md">
        <img
          src={`/chapter-art/ch${index + 1}.jpg`}
          alt={`Art for ${chapter}`}
          onError={(e) => (e.currentTarget.src = "/dragonballs.jpg")}
          className="object-cover w-full h-40 sm:h-48 md:h-52 rounded"
        />
        {hovered === index && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-cyan-300 text-xs sm:text-sm font-semibold uppercase text-center px-2">
            <FaEye className="mr-2" /> Energy Signature Match
          </div>
        )}
      </div>

      <h3 className="text-cyan-300 font-bold text-base sm:text-lg flex justify-between items-center mb-2">
        {chapter}
        <FaLock />
      </h3>

      <div className="flex flex-col sm:flex-row justify-between gap-2 mt-2 text-sm">
        <button
          disabled
          className="px-3 py-1 rounded bg-zinc-800 text-cyan-400 font-bold opacity-60 cursor-not-allowed w-full sm:w-auto"
        >
          <FaBookOpen className="inline mr-1" />
          Coming Soon
        </button>
        <button
          disabled
          className="px-3 py-1 rounded border border-cyan-300 text-cyan-300 opacity-50 cursor-not-allowed w-full sm:w-auto"
        >
          <FaStar className="inline mr-1" />
          Bookmark
        </button>
      </div>
    </div>
  );
}
