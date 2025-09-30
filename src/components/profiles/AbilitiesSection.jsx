import React from 'react';

const AbilitiesSection = ({ character, setSelectedAbility, subVisible, toggleSub, selectedBooks }) => {
  const abilities = Array.isArray(character.abilities) ? character.abilities : [];

  const isBookMatch = (entryBooks) => {
    if (!entryBooks || !Array.isArray(entryBooks)) return false;
    return entryBooks.some(book => selectedBooks.includes(book));
  };

  const visibleAbilities = abilities.filter((a) => isBookMatch(a.books));

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
      <h2 className="text-yellow-300 text-xl font-bold mb-4">Power & Abilities</h2>

      <p className="mb-6">
        <span className="text-yellow-400 font-semibold">Primary Power:</span> {character.primaryPower}
      </p>

      <div className="grid gap-3">
        {visibleAbilities.map((ability, index) => {
          const hasSub = Array.isArray(ability.subAbilities) && ability.subAbilities.length > 0;

          return (
            <div key={`${ability.name}-${index}`} className="relative">
              {/* Main Ability Button */}
              <button
                onClick={() => setSelectedAbility(ability)}
                className="flex justify-between items-center w-full bg-black border border-yellow-500 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition text-left pr-10"
              >
                <span>{ability.name}</span>
              </button>

              {/* Toggle Sub Abilities */}
              {hasSub && (
                <button
                  onClick={() => toggleSub(ability.name)}
                  className="absolute top-2 right-2 p-1 text-yellow-300 hover:text-black hover:bg-yellow-500 rounded transition"
                  aria-label="Toggle Sub Abilities"
                >
                  <span
                    className={`inline-block transform transition-transform duration-300 ${
                      subVisible[ability.name] ? 'rotate-90' : ''
                    }`}
                  >
                    ▶
                  </span>
                </button>
              )}

              {/* Sub-Ability List */}
              {hasSub && subVisible[ability.name] && (
                <div className="pl-5 mt-2 space-y-2">
                  {ability.subAbilities.map((sub, subIndex) => {
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
                          <span className="text-sm">💥</span>
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
    </div>
  );
};

export default AbilitiesSection;
