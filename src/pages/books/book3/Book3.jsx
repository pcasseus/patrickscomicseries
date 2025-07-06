import React, { useState, useRef } from "react";

import { book3Chapters as chapters } from "./book3Chapters";
import glossaryEntries from "../glossary";
import characterHighlights from "../characterHighlights";

import Book3Header from "./Book3Header";
import Book3ChapterGrid from "./Book3ChapterGrid";
import Book3GlossaryModal from "./Book3GlossaryModal";
import Book3MarkdownReader from "./Book3MarkdownReader";

export default function Book3() {
  const [hovered, setHovered] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState("");
  const [lastRead, setLastRead] = useState(() =>
    parseInt(localStorage.getItem("lastReadChapterBook3")) || null
  );
  const [unlockedChapters, setUnlockedChapters] = useState(() => {
    const saved = localStorage.getItem("unlockedChaptersBook3");
    return saved ? JSON.parse(saved) : [1];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showGlossary, setShowGlossary] = useState(false);
  const readerRef = useRef();

  const handleOpenChapter = (chapter, index) => {
    if (!unlockedChapters.includes(index + 1)) return;
    fetch(`/book3pdfs/chapter${index + 1}.md`)
      .then((res) => res.text())
      .then((text) => {
        let transformed = text;
        characterHighlights.forEach(({ name, color }) => {
          const regex = new RegExp(`\\b(${name})\\b`, "g");
          transformed = transformed.replace(
            regex,
            `<span class="${color} font-bold">$1</span>`
          );
        });
        transformed = transformed.replace(
          /^(INT\.|EXT\.)/gm,
          '<span class="text-cyan-300 font-semibold">$1</span>'
        );
        setChapterContent(transformed);
      });
    setActiveChapter({ title: chapter, id: index + 1 });
    setLastRead(index + 1);
    localStorage.setItem("lastReadChapterBook3", index + 1);
  };

  const handleScrollUnlock = () => {
    if (!readerRef.current) return;
    const el = readerRef.current;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      const nextId = activeChapter.id + 1;
      if (!unlockedChapters.includes(nextId)) {
        const updated = [...unlockedChapters, nextId];
        setUnlockedChapters(updated);
        localStorage.setItem("unlockedChaptersBook3", JSON.stringify(updated));
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
    <div className="relative min-h-screen bg-black text-green-300 font-mono px-4 sm:px-6 md:px-12 py-12 overflow-hidden">
      {/* Matrix Background & Frame */}
      <div className="absolute inset-0 z-0 animate-scroll-matrix bg-[url('/matrix.gif')] bg-cover bg-center opacity-[0.03]" />
      <div className="absolute inset-0 border-4 border-cyan-400/10 rounded-xl animate-pulse pointer-events-none" />

      {/* Header */}
      <Book3Header
        progressPercent={progressPercent}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        unlockedCount={unlockedChapters.length}
        totalChapters={chapters.length}
        setShowGlossary={setShowGlossary}
      />

      {/* Chapter Grid */}
      <Book3ChapterGrid
        chapters={filteredChapters}
        hovered={hovered}
        setHovered={setHovered}
        unlockedChapters={unlockedChapters}
        lastRead={lastRead}
        onOpenChapter={handleOpenChapter}
      />

      {/* Glossary */}
      {showGlossary && (
        <Book3GlossaryModal
          glossaryEntries={glossaryEntries}
          onClose={() => setShowGlossary(false)}
        />
      )}

      {/* Reader */}
      {activeChapter && (
        <Book3MarkdownReader
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
