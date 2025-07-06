import React, { useState, useEffect, useRef } from "react";
import { book1Chapters as chapters } from "./book1Chapters";
import glossaryEntries from "../glossary";
import characterHighlights from "../characterHighlights";

import Book1Header from "./Book1Header";
import Book1Cast from "./Book1TeamLineup";
import Book1ChapterGrid from "./Book1ChapterGrid";
import Book1GlossaryModal from "./Book1GlossaryModal";
import Book1MarkdownReader from "./Book1MarkdownReader";

export default function Book1() {
  const [hovered, setHovered] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState("");
  const [lastRead, setLastRead] = useState(() => parseInt(localStorage.getItem("lastReadChapter")) || null);
  const [unlockedChapters, setUnlockedChapters] = useState(() => {
    const saved = localStorage.getItem("unlockedChapters");
    return saved ? JSON.parse(saved) : [1];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showGlossary, setShowGlossary] = useState(false);
  const readerRef = useRef();

  const handleOpenChapter = (chapter) => {
    if (!unlockedChapters.includes(chapter.id)) return;
    fetch(`/book1pdfs/chapter${chapter.id}.md`)
      .then((res) => res.text())
      .then((text) => {
        let transformed = text;
        characterHighlights.forEach(({ name, color }) => {
          const regex = new RegExp(`\\b(${name})\\b`, "g");
          transformed = transformed.replace(regex, `<span class="${color} font-bold">$1</span>`);
        });
        transformed = transformed.replace(/^(INT\.|EXT\.)/gm, '<span class="text-yellow-300 font-semibold">$1</span>');
        setChapterContent(transformed);
      });
    setActiveChapter(chapter);
    setLastRead(chapter.id);
    localStorage.setItem("lastReadChapter", chapter.id);
  };

  const handleScrollUnlock = () => {
    if (!readerRef.current) return;
    const el = readerRef.current;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      const nextId = activeChapter.id + 1;
      if (!unlockedChapters.includes(nextId)) {
        setUnlockedChapters((prev) => [...prev, nextId]);
      }
    }
  };

  const nextChapter = () => {
    const next = chapters.find((c) => c.id === activeChapter.id + 1);
    if (next && unlockedChapters.includes(next.id)) {
      handleOpenChapter(next);
    }
  };

  const prevChapter = () => {
    const prev = chapters.find((c) => c.id === activeChapter.id - 1);
    if (prev && unlockedChapters.includes(prev.id)) {
      handleOpenChapter(prev);
    }
  };

  const progressPercent = Math.round((unlockedChapters.length / chapters.length) * 100);
  const filteredChapters = chapters.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 font-mono text-green-300 relative">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 uppercase tracking-widest mb-6 text-center drop-shadow">
        Book 1: Rise of Iztan
      </h1>

      <Book1Header
        progressPercent={progressPercent}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        unlockedCount={unlockedChapters.length}
        totalChapters={chapters.length}
        setShowGlossary={setShowGlossary}
      />

      <Book1Cast />

      <Book1ChapterGrid
        chapters={filteredChapters}
        hovered={hovered}
        setHovered={setHovered}
        unlockedChapters={unlockedChapters}
        lastRead={lastRead}
        onOpenChapter={handleOpenChapter}
      />

      {showGlossary && (
        <Book1GlossaryModal glossaryEntries={glossaryEntries} onClose={() => setShowGlossary(false)} />
      )}

      {activeChapter && (
        <Book1MarkdownReader
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
