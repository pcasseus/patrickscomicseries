import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaCompress,
  FaTimes,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Book3MarkdownReader({
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
        <h2 className="text-cyan-300 font-bold text-xl sm:text-2xl">
          {chapter.title}
        </h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={onPrev}
            disabled={chapter.id === 1}
            className="text-cyan-400 hover:text-cyan-200 text-xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="text-cyan-400 hover:text-cyan-200 text-xl"
          >
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-200 text-xl"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      <div
        ref={readerRef}
        onScroll={onScrollUnlock}
        className={`overflow-y-auto bg-zinc-900/90 p-6 rounded-xl border-2 border-cyan-500 shadow-xl backdrop-blur-sm text-white leading-relaxed tracking-wide whitespace-pre-wrap font-mono ${
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
