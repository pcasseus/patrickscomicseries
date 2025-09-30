import React from "react";
import { FaStar, FaEye, FaLock, FaBookOpen } from "react-icons/fa";

export default function Book1ChapterCard({
  chapter,
  index,
  hovered,
  setHovered,
  unlockedChapters,
  lastRead,
  onOpenChapter,
}) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative bg-black/80 border-2 rounded-xl p-4 transition-all duration-300 border-zinc-700 opacity-60"
    >
      {/* Chapter art */}
      <div className="mb-3 relative overflow-hidden border border-green-500 rounded-md">
        <img
          src={`/chapter-art/ch${chapter.id}.jpg`}
          alt={`Art for Chapter ${chapter.id}`}
          onError={(e) => (e.currentTarget.src = "/dragonballs.jpg")}
          className="object-cover w-full h-40 rounded"
        />
        {hovered === index && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-yellow-300 text-xs sm:text-sm font-semibold">
            <FaEye className="mr-2" /> Preview
          </div>
        )}
      </div>

      {/* Chapter label */}
      <h3 className="text-yellow-300 font-bold text-lg flex justify-between items-center mb-2">
        Chapter {chapter.id}
        <FaLock />
      </h3>

      {/* Buttons */}
      <div className="flex justify-between mt-2 text-sm">
        <button
          disabled
          className="px-3 py-1 rounded bg-zinc-800 text-yellow-500 font-bold opacity-60 cursor-not-allowed"
        >
          <FaBookOpen className="inline mr-1" />
          Coming Soon
        </button>
        <button
          disabled
          className="px-3 py-1 rounded border border-yellow-300 text-yellow-300 opacity-50 cursor-not-allowed"
        >
          <FaStar className="inline mr-1" />
          Bookmark
        </button>
      </div>
    </div>
  );
}
