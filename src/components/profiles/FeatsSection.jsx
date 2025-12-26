import React, { useMemo, useRef, useState } from "react";

const FEATS_PER_PAGE = 8;

const FeatsSection = ({ character }) => {
  const featsByBook = character?.feats || {};

  // null = nothing selected
  const [selectedBook, setSelectedBook] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("next");
  const flipTimer = useRef(null);

  const toggleBook = (key) => {
    setPageIndex(0);
    setSelectedBook((prev) => (prev === key ? null : key));
  };

  const hasAnySelected = selectedBook !== null;

  const activeFeats = useMemo(() => {
    if (!hasAnySelected) return [];

    if (selectedBook === "all") {
      return Object.values(featsByBook).flat().filter(Boolean);
    }

    return Array.isArray(featsByBook[selectedBook])
      ? featsByBook[selectedBook]
      : [];
  }, [featsByBook, selectedBook, hasAnySelected]);

  const totalPages = Math.max(
    1,
    Math.ceil(activeFeats.length / FEATS_PER_PAGE)
  );
  const safePage = Math.min(pageIndex, totalPages - 1);

  const pageSlice = activeFeats.slice(
    safePage * FEATS_PER_PAGE,
    safePage * FEATS_PER_PAGE + FEATS_PER_PAGE
  );

  const leftPage = pageSlice.slice(0, 4);
  const rightPage = pageSlice.slice(4, 8);

  const canPrev = hasAnySelected && safePage > 0 && !isFlipping;
  const canNext =
    hasAnySelected && safePage < totalPages - 1 && !isFlipping;

  const runFlip = (dir) => {
    if ((dir === "next" && !canNext) || (dir === "prev" && !canPrev)) return;

    setFlipDir(dir);
    setIsFlipping(true);

    if (flipTimer.current) clearTimeout(flipTimer.current);
    flipTimer.current = setTimeout(() => {
      setPageIndex((p) =>
        dir === "next" ? p + 1 : Math.max(p - 1, 0)
      );
      setIsFlipping(false);
    }, 720);
  };

  return (
    <section className="border border-yellow-500 rounded overflow-hidden flex w-full mb-32 featsRoot">
      <style>{`
        /* ---------- EXISTING STYLES ---------- */

        .featsWrap {
          background: radial-gradient(circle at top, #080808, #020202 70%);
        }

        .sidebarGrid {
          background-color: #000;
          background-image:
            linear-gradient(rgba(255,196,0,0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,196,0,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .page {
          position: relative;
          background: linear-gradient(#f7e7d6, #efddc8);
          color: #141414;
          border-radius: 6px;
          padding: 36px 40px;
          box-shadow:
            inset 0 0 0 1px rgba(0,0,0,0.14),
            0 12px 24px rgba(0,0,0,0.45);
        }

        .page::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 6px;
          background-image:
            radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 4px 4px;
          opacity: 0.35;
          pointer-events: none;
        }

        .featBlock {
          margin-bottom: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(0,0,0,0.18);
        }

        .featText {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 17px;
          line-height: 1.75;
          color: #141414;
        }

        .pageLabel {
          position: absolute;
          top: 14px;
          right: 18px;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: rgba(0,0,0,0.35);
          font-family: monospace;
        }

        .flipOverlay {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: calc(50% - 12px);
          background: linear-gradient(#f3e2cf, #e7d2ba);
          border-radius: 6px;
          box-shadow:
            inset 0 0 0 1px rgba(0,0,0,0.2),
            0 0 30px rgba(0,0,0,0.6);
          transform-origin: right center;
          transform-style: preserve-3d;
          animation: ${flipDir === "next" ? "flipNext" : "flipPrev"}
            720ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        @keyframes flipNext {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-155deg); }
        }

        @keyframes flipPrev {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(155deg); }
        }

        /* ---------- MOBILE ADDITIONS ONLY ---------- */

        @media (max-width: 900px) {
          .featsRoot {
            flex-direction: column;
          }

          .desktopOnly {
            display: none;
          }

          .mobileOnly {
            display: block;
          }

          .page {
            padding: 24px;
          }

          .featText {
            font-size: 15px;
          }
        }

        .mobileOnly {
          display: none;
        }
      `}</style>

      {/* DESKTOP SIDEBAR (UNCHANGED) */}
      <div className="w-48 border-r border-yellow-500 sidebarGrid desktopOnly">
        {[
          { key: "1", label: "Book 1" },
          { key: "2", label: "Book 2" },
          { key: "3", label: "Book 3" },
          { key: "all", label: "All Books" },
        ].map((b) => {
          const active = selectedBook === b.key;
          return (
            <button
              key={b.key}
              onClick={() => toggleBook(b.key)}
              className={`w-full px-5 py-5 font-mono uppercase tracking-widest border-b border-yellow-500
                ${
                  active
                    ? "bg-yellow-500 text-black"
                    : "text-yellow-300 hover:bg-yellow-500 hover:text-black"
                }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      {/* MOBILE BOOK TOGGLES */}
      <div className="mobileOnly flex border-b border-yellow-500 sidebarGrid">
        {["1", "2", "3", "all"].map((key) => (
          <button
            key={key}
            onClick={() => toggleBook(key)}
            className={`flex-1 py-3 font-mono text-xs uppercase tracking-widest
              ${
                selectedBook === key
                  ? "bg-yellow-500 text-black"
                  : "text-yellow-300"
              }`}
          >
            {key === "all" ? "All" : `Book ${key}`}
          </button>
        ))}
      </div>

      {/* BODY */}
      <div className="flex-1 featsWrap p-6">
        {!hasAnySelected ? (
          <div className="border border-yellow-500 rounded p-6 text-gray-300 font-mono">
            Select a book to display this character&apos;s feats.
          </div>
        ) : (
          <>
            {/* DESKTOP BOOK SPREAD (UNCHANGED) */}
            <div className="relative flex gap-6 desktopOnly">
              {[leftPage, rightPage].map((page, idx) => (
                <div key={idx} className="w-1/2 page">
                  <div className="pageLabel">ARCHIVE</div>
                  {page.map((feat, i) => (
                    <div key={i} className="featBlock">
                      <p className="featText">{feat}</p>
                    </div>
                  ))}
                </div>
              ))}
              {isFlipping && <div className="flipOverlay" />}
            </div>

            {/* MOBILE SINGLE PAGE */}
            <div className="mobileOnly">
              <div className="page">
                {pageSlice.map((feat, i) => (
                  <div key={i} className="featBlock">
                    <p className="featText">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PAGINATION (WORKS FOR BOTH) */}
            <div className="mt-8 flex justify-between">
              <button
                disabled={!canPrev}
                onClick={() => runFlip("prev")}
                className="border border-yellow-500 px-4 py-2 font-mono text-xs disabled:opacity-30"
              >
                ◀ Prev
              </button>
              <button
                disabled={!canNext}
                onClick={() => runFlip("next")}
                className="border border-yellow-500 px-4 py-2 font-mono text-xs disabled:opacity-30"
              >
                Next ▶
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeatsSection;
