import React, { useState } from "react";

const TABS = [
  { label: "Book 1", key: "1" },
  { label: "Book 2", key: "2" },
  { label: "Book 3", key: "3" },
  { label: "All Books", key: "all" },
];

const ITEMS_PER_PAGE = 10;

const colorMap = {
  1: "bg-yellow-400 shadow-yellow-500",
  2: "bg-red-400 shadow-red-500",
  3: "bg-blue-400 shadow-blue-500",
};

const FeatsSection = ({ character }) => {
  const feats = character.feats || {};
  const [activeTab, setActiveTab] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  const paginate = (list) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return list.slice(start, start + ITEMS_PER_PAGE);
  };

  const renderFeatsList = (list, bookKey = "1") =>
    list.length === 0 ? (
      <p className="text-yellow-400 text-sm font-mono uppercase text-center border border-yellow-700 p-4 rounded bg-black shadow-inner shadow-yellow-900">
        No feats recorded.
      </p>
    ) : (
      <>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {paginate(list).map((feat, index) => (
            <li
              key={index}
              className="flex items-start gap-2 border border-yellow-500 bg-black text-yellow-300 rounded font-mono text-sm px-4 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-200 shadow-md"
            >
              <span
                className={`h-2 w-2 mt-1 rounded-full animate-pulse ${
                  colorMap[bookKey] || "bg-yellow-400 shadow-yellow-500"
                }`}
              />
              {feat}
            </li>
          ))}
        </ul>

        {list.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: Math.ceil(list.length / ITEMS_PER_PAGE) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded font-mono text-xs border ${
                  currentPage === idx + 1
                    ? "bg-yellow-500 text-black border-yellow-600"
                    : "bg-black text-yellow-300 border-yellow-500 hover:bg-yellow-500 hover:text-black"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </>
    );

  const renderAllBooks = () => {
    const combinedFeats = [];

    Object.entries(feats).forEach(([bookKey, list]) => {
      list.forEach((feat) => {
        combinedFeats.push({ feat, bookKey });
      });
    });

    if (combinedFeats.length === 0) {
      return (
        <p className="text-yellow-400 text-sm font-mono uppercase text-center border border-yellow-700 p-4 rounded bg-black shadow-inner shadow-yellow-900">
          No feats recorded across any books.
        </p>
      );
    }

    const paginated = paginate(combinedFeats);

    return (
      <>
        {/* Color Legend */}
        <div className="flex justify-center items-center gap-6 mb-6 font-mono text-sm text-yellow-200">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-yellow-500" />
            Book 1
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400 shadow-red-500" />
            Book 2
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-blue-500" />
            Book 3
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {paginated.map(({ feat, bookKey }, index) => (
            <li
              key={index}
              className="flex items-start gap-2 border border-yellow-500 bg-black text-yellow-300 rounded font-mono text-sm px-4 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-200 shadow-md"
            >
              <span
                className={`h-2 w-2 mt-1 rounded-full animate-pulse ${
                  colorMap[bookKey] || "bg-yellow-400 shadow-yellow-500"
                }`}
              />
              {feat}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(combinedFeats.length / ITEMS_PER_PAGE) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded font-mono text-xs border ${
                currentPage === idx + 1
                  ? "bg-yellow-500 text-black border-yellow-600"
                  : "bg-black text-yellow-300 border-yellow-500 hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="border border-yellow-500 bg-[#111] text-white rounded shadow-xl mb-8 flex flex-col md:flex-row overflow-hidden">
      {/* Side Tabs */}
      <div className="border-r border-yellow-500 w-full md:w-40 bg-black">
        {TABS.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => handleTabClick(key)}
            className={`w-full px-4 py-3 text-sm font-bold font-mono uppercase tracking-wide border-b border-yellow-500 hover:bg-yellow-500 hover:text-black transition ${
              activeTab === key ? "bg-yellow-500 text-black" : "text-yellow-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Main Display */}
      <div
        className="flex-1 p-6"
        style={{
          backgroundImage: `
            linear-gradient(#00ffff11 1px, transparent 1px),
            linear-gradient(to right, #00ffff11 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      >
        <div className="mb-4">
          <h2 className="text-yellow-400 font-bold font-mono text-lg uppercase tracking-wide">
            Feats
          </h2>
        </div>

        {activeTab === null ? (
          <div className="border border-yellow-700 bg-black p-6 rounded text-center text-yellow-300 font-mono text-sm shadow-inner shadow-yellow-900">
            Select a book tab to view this character’s feats.
          </div>
        ) : activeTab === "all" ? (
          renderAllBooks()
        ) : (
          renderFeatsList(feats[activeTab] || [], activeTab)
        )}
      </div>
    </div>
  );
};

export default FeatsSection;
