import React from "react";
import Book2ChapterCard from "./Book2ChapterCard";

export default function Book2ChapterGrid({
  chapters,
  hovered,
  setHovered,
  unlockedChapters,
  lastRead,
  handleOpenChapter,
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {chapters.map((chapter, index) => (
        <Book2ChapterCard
          key={index}
          index={index}
          chapter={chapter}
          hovered={hovered}
          setHovered={setHovered}
          unlockedChapters={unlockedChapters}
          lastRead={lastRead}
          onOpenChapter={handleOpenChapter}
        />
      ))}
    </div>
  );
}
