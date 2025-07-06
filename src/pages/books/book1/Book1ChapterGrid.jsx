import React from "react";
import Book1ChapterCard from "./Book1ChapterCard";

export default function Book1ChapterGrid({
  chapters,
  hovered,
  setHovered,
  unlockedChapters,
  lastRead,
  onOpenChapter,
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {chapters.map((chapter, index) => (
        <Book1ChapterCard
          key={chapter.id}
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
