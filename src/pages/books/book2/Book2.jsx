import React, { useState, useRef } from "react";
import { book2Chapters as chapters } from "./book2Chapters";
import glossaryEntries from "../glossary";
import characterHighlights from "../characterHighlights";

import Book2Header from "./Book2Header";
import Book2WantedPosters from "./Book2WantedPosters";
import Book2ChapterGrid from "./Book2ChapterGrid";
import Book2GlossaryModal from "./Book2GlossaryModal";
import Book2MarkdownReader from "./Book2MarkdownReader";

export default function Book2() {
  const [hovered, setHovered] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState("");
  const [lastRead, setLastRead] = useState(() =>
    parseInt(localStorage.getItem("lastReadChapterBook2")) || null
  );
  const [unlockedChapters, setUnlockedChapters] = useState(() => {
    const saved = localStorage.getItem("unlockedChaptersBook2");
    return saved ? JSON.parse(saved) : [1];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showGlossary, setShowGlossary] = useState(false);
  const readerRef = useRef();

  const handleOpenChapter = (chapter, index) => {
    if (!unlockedChapters.includes(index + 1)) return;
    fetch(`/book2pdfs/chapter${index + 1}.md`)
      .then((res) => res.text())
      .then((text) => {
        let transformed = text;
        characterHighlights.forEach(({ name, color }) => {
          const regex = new RegExp(`\\b(${name})\\b`, "g");
          transformed = transformed.replace(regex, `<span class="${color} font-bold">$1</span>`);
        });
        transformed = transformed.replace(/^(INT\.|EXT\.)/gm, '<span class="text-red-400 font-semibold">$1</span>');
        setChapterContent(transformed);
      });
    setActiveChapter({ title: chapter, id: index + 1 });
    setLastRead(index + 1);
    localStorage.setItem("lastReadChapterBook2", index + 1);
  };

  const handleScrollUnlock = () => {
    if (!readerRef.current) return;
    const el = readerRef.current;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      const nextId = activeChapter.id + 1;
      if (!unlockedChapters.includes(nextId)) {
        const updated = [...unlockedChapters, nextId];
        setUnlockedChapters(updated);
        localStorage.setItem("unlockedChaptersBook2", JSON.stringify(updated));
      }
    }
  };

  const nextChapter = () => {
    const next = chapters[activeChapter.id];
    if (next && unlockedChapters.includes(activeChapter.id + 1)) {
      handleOpenChapter(next, activeChapter.id);
    }
  };

  const prevChapter = () => {
    const prev = chapters[activeChapter.id - 2];
    if (prev && unlockedChapters.includes(activeChapter.id - 1)) {
      handleOpenChapter(prev, activeChapter.id - 2);
    }
  };

  const progressPercent = Math.round((unlockedChapters.length / chapters.length) * 100);
  const filteredChapters = chapters.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 font-mono text-red-300 relative bg-black">
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('/textures/starfield.png')] bg-cover bg-fixed blur-sm pointer-events-none" />
      
      <Book2Header
        progressPercent={progressPercent}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowGlossary={setShowGlossary}
        unlockedCount={unlockedChapters.length}
        totalChapters={chapters.length}
      />

      <Book2WantedPosters />

      <Book2ChapterGrid
        chapters={filteredChapters}
        hovered={hovered}
        setHovered={setHovered}
        unlockedChapters={unlockedChapters}
        lastRead={lastRead}
        handleOpenChapter={handleOpenChapter}
      />

      {showGlossary && (
        <Book2GlossaryModal glossaryEntries={glossaryEntries} onClose={() => setShowGlossary(false)} />
      )}

      {activeChapter && (
        <Book2MarkdownReader
          chapter={activeChapter}
          content={chapterContent}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          onClose={() => setActiveChapter(null)}
          onPrev={prevChapter}
          onNext={nextChapter}
          readerRef={readerRef}
          onScrollUnlock={handleScrollUnlock}
        />
      )}
    </div>
  );
}
