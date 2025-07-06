import React from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Book1MarkdownReader({
  chapter,
  content,
  fullscreen,
  setFullscreen,
  onClose,
  onPrev,
  onNext,
  readerRef,
  onScrollUnlock,
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6">
      <div className="flex justify-between items-center w-full max-w-5xl mb-4">
        <h2 className="text-yellow-300 font-bold text-xl sm:text-2xl">
          {chapter.title}
        </h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={onPrev}
            disabled={chapter.id === 1}
            className="text-yellow-400 hover:text-yellow-200 text-xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="text-yellow-400 hover:text-yellow-200 text-xl"
          >
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            onClick={onClose}
            className="text-yellow-400 hover:text-yellow-200 text-xl"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      <div
        ref={readerRef}
        onScroll={onScrollUnlock}
        className={`overflow-y-auto bg-zinc-900/80 p-6 rounded-xl border-2 border-yellow-400 shadow-xl backdrop-blur-sm text-green-100 leading-relaxed tracking-wide whitespace-pre-wrap font-mono ${
          fullscreen ? "w-full h-full" : "w-full max-w-5xl h-[75vh]"
        }`}
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
