import React from 'react';

const WeaknessesSection = ({ character, setSelectedAbility, subVisible, toggleSub, selectedBooks }) => {
  const weaknesses = Array.isArray(character.weaknesses) ? character.weaknesses : [];

  const isBookMatch = (entryBooks) => {
    if (!entryBooks || !Array.isArray(entryBooks)) return false;
    return entryBooks.some(book => selectedBooks.includes(book));
  };

  const visibleWeaknesses = weaknesses.filter((w) => isBookMatch(w.books));

  return (
    <div
      className="bg-zinc-900 border border-yellow-500 rounded p-6 mb-8"
      style={{
        backgroundImage: `
          linear-gradient(#00ffff11 1px, transparent 1px),
          linear-gradient(to right, #00ffff11 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <h2 className="text-yellow-300 text-xl font-bold mb-4">Weaknesses</h2>

      {visibleWeaknesses.length ? (
        <div className="grid gap-3">
          {visibleWeaknesses.map((weakness, index) => {
            const hasSub = Array.isArray(weakness.subWeaknesses) && weakness.subWeaknesses.length > 0;

            return (
              <div key={`${weakness.name}-${index}`} className="relative">
                {/* Main Weakness Button */}
                <button
                  onClick={() => setSelectedAbility(weakness)}
                  className="flex justify-between items-center w-full bg-black border border-yellow-500 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition text-left pr-10"
                >
                  <span>{weakness.name}</span>
                </button>

                {/* Toggle Sub-Weaknesses */}
                {hasSub && (
                  <button
                    onClick={() => toggleSub(weakness.name)}
                    className="absolute top-2 right-2 p-1 text-yellow-300 hover:text-black hover:bg-yellow-500 rounded transition"
                    aria-label="Toggle Sub Weaknesses"
                  >
                    <span
                      className={`inline-block transform transition-transform duration-300 ${
                        subVisible[weakness.name] ? 'rotate-90' : ''
                      }`}
                    >
                      ▶
                    </span>
                  </button>
                )}

                {/* Sub-Weakness List */}
                {hasSub && subVisible[weakness.name] && (
                  <div className="pl-5 mt-2 space-y-2">
                    {weakness.subWeaknesses.map((sub, subIndex) => {
                      if (!isBookMatch(sub.books)) return null;

                      const enrichedSub = {
                        ...sub,
                        evolved: Array.isArray(sub.evolved) ? sub.evolved : []
                      };

                      return (
                        <div key={`${sub.name}-${subIndex}`}>
                          <button
                            onClick={() => setSelectedAbility(enrichedSub)}
                            className="flex items-center gap-2 w-full text-left border border-yellow-400 bg-zinc-800 text-yellow-300 px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition"
                          >
                            <span className="text-sm">⚠️</span>
                            <span>{sub.name}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-yellow-400 font-mono text-sm uppercase tracking-widest border border-yellow-700 p-4 rounded bg-black shadow-inner shadow-yellow-900">
            ACCESS DENIED: Operative weakness profiles currently classified.
            <br />
            <span className="text-yellow-500 font-bold block mt-2">■ COMING SOON ■</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeaknessesSection;
