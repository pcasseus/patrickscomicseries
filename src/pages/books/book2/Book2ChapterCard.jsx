import React from "react";
import { FaEye, FaBookOpen, FaStar, FaLock } from "react-icons/fa";

export default function Book2ChapterCard({
  chapter,
  index,
  hovered,
  setHovered,
}) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative bg-zinc-900 border-2 rounded-xl p-4 transition-all duration-300 shadow-lg border-zinc-700 opacity-60"
    >
      <div className="mb-3 relative overflow-hidden border border-red-600 rounded-md">
        <img
          src={`/chapter-art/ch${index + 1}.jpg`}
          alt={`Art for ${chapter}`}
          onError={(e) => (e.currentTarget.src = "/dragonballs.jpg")}
          className="object-cover w-full h-40 rounded"
        />
        {hovered === index && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
            <FaEye className="mr-2" /> Subject Scan
          </div>
        )}
      </div>
      <h3 className="text-red-400 font-bold text-lg flex justify-between items-center mb-2">
        {chapter}
        <FaLock />
      </h3>

      {/* Hidden: File # */}
      {/* <p className="text-white text-xs mb-2 italic">File #{String(index + 1).padStart(2, "0")}</p> */}

      <div className="flex justify-between mt-2 text-sm">
        <button
          disabled
          className="px-3 py-1 rounded bg-zinc-800 text-red-400 font-bold opacity-60 cursor-not-allowed"
        >
          <FaBookOpen className="inline mr-1" />
          Coming Soon
        </button>
        <button
          disabled
          className="px-3 py-1 rounded border border-red-400 text-red-400 opacity-50 cursor-not-allowed"
        >
          <FaStar className="inline mr-1" />
          Bookmark
        </button>
      </div>
    </div>
  );
}
