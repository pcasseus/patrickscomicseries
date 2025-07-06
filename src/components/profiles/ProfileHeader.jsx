import React from 'react';

const ProfileHeader = ({ character }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-12">
      <img
        src={character.image}
        alt={character.name}
        className="w-64 h-80 object-cover rounded shadow-lg"
      />
      <div className="w-full">
        <h1 className="text-yellow-400 text-4xl font-bold uppercase tracking-wide mb-2">
          {character.name}
        </h1>

        <div className="text-sm leading-7 space-y-1 animate-fade-in">
          {Object.entries(character.stats || {}).map(([key, val]) => (
            <p key={key}>
              <span className="text-yellow-400 capitalize">{key}:</span> {val}
            </p>
          ))}
        </div>

        {/* Always show "coming soon" for tagline */}
        <p className="text-yellow-300 mt-4 italic opacity-50">
          Tagline coming soon...
        </p>

        {/* Theme toggle temporarily locked */}
        <button
          disabled
          className="mt-4 bg-zinc-700 text-zinc-300 px-4 py-2 rounded opacity-60 cursor-not-allowed"
        >
          Activate Theme — Coming Soon
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
