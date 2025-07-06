import React from "react";
import Book3ChapterCard from "./Book3ChapterCard";

export default function Book3ChapterGrid({
  chapters,
  hovered,
  setHovered,
  unlockedChapters,
  lastRead,
  onOpenChapter,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 px-4">
      {chapters.map((chapter, index) => (
        <Book3ChapterCard
          key={index}
          chapter={chapter}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          unlockedChapters={unlockedChapters}
          lastRead={lastRead}
          onOpenChapter={onOpenChapter}
        />
      ))}
    </div>
  );
}
