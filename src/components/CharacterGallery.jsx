import React, { useState } from "react";
import CharacterCard from "../components/characterGallery/CharacterCard";
import CharacterFilters from "../components/characterGallery/CharacterFilters";
import { useNavigate } from "react-router-dom";
import { allCharacters } from "./data/characterList.js";

function CharacterGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [divisionFilter, setDivisionFilter] = useState("All");
  const [showSpoilers, setShowSpoilers] = useState(false);
  const navigate = useNavigate();

  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filtered = allCharacters.filter((char) => {
    const nameMatch = char.name.toLowerCase().includes(normalizedSearch);
    const roleMatch = roleFilter === "All" || char.role === roleFilter;
    const divisionMatch = divisionFilter === "All" || char.division === divisionFilter;
    const bookMatch = showSpoilers || char.book === "Book 1";
    return nameMatch && roleMatch && divisionMatch && bookMatch;
  });

  const suggested = searchTerm
    ? allCharacters
        .filter((char) => char.name.toLowerCase().includes(normalizedSearch))
        .slice(0, 3)
    : [];

  const handleCardClick = (slug) => {
    window.__kenshin_entrySource = "fromGallery";
    navigate(`/characters/${slug}`, { state: { fromGallery: true } });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono px-4 sm:px-6 py-12">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 opacity-90" />
      </div>

      {/* HUD */}
      <div className="absolute top-4 left-4 z-20 text-green-400 text-[10px] sm:text-xs tracking-widest">
        SYSTEM ONLINE ▮▯▯▯▯
      </div>
      <div className="absolute bottom-4 right-4 z-20 text-green-400 text-[10px] sm:text-xs tracking-widest">
        CONNECTION SECURE ▮▮▮▮▯
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-extrabold uppercase tracking-widest mb-4 leading-snug">
          Operative Files: All Characters
        </h1>
        <p className="text-yellow-300 italic max-w-3xl mx-auto text-xs sm:text-sm border border-yellow-600 p-3 sm:p-4 rounded shadow">
          Use filters or search to locate operatives. Dossiers reflect current registry.
        </p>
      </div>

      {/* Spoiler Warning Toggle */}
      <div className="relative z-10 mb-6 text-center px-2">
        <p className="text-[11px] sm:text-xs text-yellow-300 italic mb-2 leading-snug">
          Warning: Some operatives appear in later books. Toggle below to reveal future appearances.
        </p>
        <button
          onClick={() => setShowSpoilers((prev) => !prev)}
          className="px-3 sm:px-4 py-2 rounded bg-yellow-700 hover:bg-yellow-600 text-white text-[11px] sm:text-sm font-bold transition"
        >
          {showSpoilers ? "Hide Spoilers (Only Show Book 1)" : "Show All Characters (Spoilers!)"}
        </button>
      </div>

      {/* Filters */}
      <CharacterFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        divisionFilter={divisionFilter}
        setDivisionFilter={setDivisionFilter}
        suggested={suggested}
      />

      {/* Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {filtered.map((char) => (
          <div
            key={char.slug}
            onClick={() => {
              if (!char.comingSoon) handleCardClick(char.slug);
            }}
            className={`relative ${
              char.comingSoon
                ? "cursor-not-allowed opacity-60 pointer-events-none"
                : "cursor-pointer"
            }`}
          >
            <CharacterCard character={char} />

            {/* Overlay for Coming Soon */}
            {char.comingSoon && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded text-yellow-300 font-bold text-lg">
                Coming Soon
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterGallery;
