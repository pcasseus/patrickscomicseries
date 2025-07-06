import React, { useState } from 'react';

const AbilitiesSection = ({ character, setSelectedAbility, subVisible, toggleSub }) => {
  const [spoilerLevel, setSpoilerLevel] = useState("Book 1"); // "Book 1" | "Book 1+2" | "All"
  const abilities = Array.isArray(character.abilities) ? character.abilities : [];

  const visibleAbilities = abilities.filter((a) => {
    if (!a.book || a.book === "Book 1") return true;
    if (spoilerLevel === "Book 1+2" && a.book === "Book 2") return true;
    if (spoilerLevel === "All") return true;
    return false;
  });

  const cycleSpoilerLevel = () => {
    setSpoilerLevel((prev) =>
      prev === "Book 1" ? "Book 1+2" : prev === "Book 1+2" ? "All" : "Book 1"
    );
  };

  const spoilerLabel = {
    "Book 1": "Show Book 2 Abilities",
    "Book 1+2": "Show Book 3 Abilities",
    "All": "Hide Spoilers (Only Show Book 1)",
  };

  return (
    <div className="bg-zinc-900 border border-yellow-500 rounded p-6 mb-8">
      <h2 className="text-yellow-300 text-xl font-bold mb-4">Power & Abilities</h2>

      {/* Spoiler Level Toggle */}
      <div className="text-center mb-6">
        <p className="text-xs text-yellow-300 italic mb-2">
          Some abilities are introduced in later books. Toggle to reveal them by phase.
        </p>
        <button
          onClick={cycleSpoilerLevel}
          className="px-4 py-2 rounded bg-yellow-700 hover:bg-yellow-600 text-white text-sm font-bold transition"
        >
          {spoilerLabel[spoilerLevel]}
        </button>
      </div>

      <p className="mb-6">
        <span className="text-yellow-400 font-semibold">Primary Power:</span> {character.primaryPower}
      </p>

      <div className="grid gap-3">
        {visibleAbilities.map((ability, index) => {
          const hasSub = Array.isArray(ability.subAbilities) && ability.subAbilities.length > 0;

          return (
            <div key={`${ability.name}-${index}`} className="relative">
              <button
                onClick={() => setSelectedAbility(ability)}
                className="flex justify-between items-center w-full bg-black border border-yellow-500 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition text-left pr-10"
              >
                <span>{ability.name}</span>
              </button>

              {hasSub && (
                <button
                  onClick={() => toggleSub(ability.name)}
                  className="absolute top-2 right-2 p-1 text-yellow-300 hover:text-black hover:bg-yellow-500 rounded transition"
                  aria-label="Toggle Sub Abilities"
                >
                  <span className={`inline-block transform transition-transform duration-300 ${subVisible[ability.name] ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </button>
              )}

              {hasSub && subVisible[ability.name] && (
                <div className="pl-5 mt-2 space-y-1">
                  {ability.subAbilities.map((sub, subIndex) => (
                    <button
                      key={`${sub.name}-${subIndex}`}
                      onClick={() => setSelectedAbility(sub)}
                      className="flex items-center gap-2 w-full text-left border border-yellow-400 bg-zinc-800 text-yellow-300 px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition"
                    >
                      <span className="text-sm">💥</span>
                      <span>{sub.name}</span>
                    </button>
                  ))}
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
