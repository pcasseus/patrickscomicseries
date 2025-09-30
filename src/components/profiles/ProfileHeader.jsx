import React from 'react';

const ProfileHeader = ({ character, toggleTheme, themeActive, bio }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
      {/* Left Column: Character Image */}
      <div className="flex-shrink-0">
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-80 object-cover rounded shadow-lg"
        />
      </div>

      {/* Right Column: Name, Stats, Theme Button, and Biography */}
      <div className="flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* Left: Name, Stats, Button */}
          <div className="flex-1 space-y-2 text-sm leading-7">
            <h1 className="text-yellow-400 text-4xl font-bold uppercase tracking-wide">
              {character.name}
            </h1>

            {Object.entries(character.stats || {}).map(([key, val]) => (
              <p key={key}>
                <span className="text-yellow-400 capitalize">{key}:</span> {val}
              </p>
            ))}

            <button
              disabled
              className="mt-2 bg-zinc-700 text-zinc-300 px-4 py-2 rounded opacity-60 cursor-not-allowed"
            >
              Activate Theme — Coming Soon
            </button>
          </div>

          {/* Right: Biography Panel */}
          <div className="flex-1 relative bg-gradient-to-b from-black to-zinc-900 border border-yellow-400 rounded-lg shadow-inner self-stretch w-full">
            {/* Terminal-style label */}
            <div className="absolute top-0 left-0 px-3 py-1 bg-yellow-400 text-black text-xs font-bold tracking-widest rounded-br">
              BIOGRAPHY_LOG // ORIGIN
            </div>

            {/* Scrollable Bio Content */}
            <div className="pt-8 px-4 pb-4 h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-zinc-800">
              <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed font-mono">
                {bio || "No history available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
