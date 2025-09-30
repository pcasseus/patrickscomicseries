import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import AbilitiesSection from './AbilitiesSection';
import WeaknessesSection from './WeaknessesSection';
import RelationshipsSection from './RelationshipsSection';
import UniformsSection from './UniformsSection';
import Footer from './Footer';
import Modal from './Modal';
import FeatsSection from './FeatsSection';

const ProfileBody = ({
  character,
  toggleTheme,
  themeActive,
  subVisible,
  toggleSub,
  selectedAbility,
  setSelectedAbility,
  selectedRelation,
  setSelectedRelation,
  selectedItem,
  setSelectedItem,
  replayIntro
}) => {
  const [selectedBooks, setSelectedBooks] = useState([1]);

  const toggleBook = (book) => {
    setSelectedBooks((prev) =>
      prev.includes(book)
        ? prev.filter((b) => b !== book)
        : [...prev, book]
    );
  };

  return (
    <>
      <div className="text-green-400 tracking-widest text-sm mb-2 border-b border-green-700 pb-2">
        OPERATIVE ID: {character.id || "#000"} — CLASS: {character.class || ""}
      </div>

      <div className="mb-6 flex justify-start">
        <button
          onClick={replayIntro}
          className="text-xs font-mono tracking-wider text-yellow-300 border border-yellow-500 px-4 py-1.5 rounded transition-all duration-300 hover:bg-yellow-300 hover:text-black shadow-md hover:shadow-yellow-500/50"
        >
          REPLAY ACCESS TERMINAL INTRO
        </button>
      </div>

      <ProfileHeader
        character={character}
        toggleTheme={toggleTheme}
        themeActive={themeActive}
        bio={character.bio}
      />

      <div className="flex gap-4 mb-6">
        {[1, 2, 3].map((book) => (
          <button
            key={book}
            onClick={() => toggleBook(book)}
            className={`px-4 py-1 border rounded text-sm font-bold tracking-wider ${
              selectedBooks.includes(book)
                ? 'bg-green-600 text-white border-green-400'
                : 'bg-red-700 text-white border-red-500'
            }`}
          >
            Book {book}
          </button>
        ))}
      </div>

      <AbilitiesSection
        character={character}
        setSelectedAbility={setSelectedAbility}
        subVisible={subVisible}
        toggleSub={toggleSub}
        selectedBooks={selectedBooks}
      />

      <WeaknessesSection
        character={character}
        selectedBooks={selectedBooks}
        setSelectedAbility={setSelectedAbility}
        onToggleBook={toggleBook}
      />

      <FeatsSection character={character} />

      {/* 🔀 SPLIT: Family (left) | Uniforms HUD (right) */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        {/* Family Section */}
        <div className="lg:w-1/2">
          <RelationshipsSection
            character={character}
            setSelectedRelation={setSelectedRelation}
          />
        </div>

        {/* Uniforms + integrated tools */}
        <div className="lg:w-1/2">
          <UniformsSection
            character={character}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>

      <Footer characterName={character.name} />

      {/* Ability Modal */}
      {selectedAbility && (
        <Modal
          title={selectedAbility.name}
          onClose={() => setSelectedAbility(null)}
          tabbed={true}
          baseContent={
            <>
              <p className="mb-2">{selectedAbility.description}</p>
              {selectedAbility.book && (
                <p className="text-sm text-yellow-300">
                  First Appearance: <strong>{selectedAbility.book}</strong>
                </p>
              )}
            </>
          }
          evolvedContent={selectedAbility.evolved}
          selectedBooks={selectedBooks}
        />
      )}

      {/* Relationship Modal */}
      {selectedRelation && (
        <Modal title={selectedRelation.name} onClose={() => setSelectedRelation(null)}>
          <div className="flex flex-col items-center text-center">
            <img
              src={selectedRelation.image}
              alt={selectedRelation.name}
              className="w-32 h-32 object-cover rounded border border-yellow-500 mb-3"
            />
            <p className="text-sm mb-2 text-yellow-300">
              Role: <span className="text-white">{selectedRelation.role}</span>
            </p>
            {selectedRelation.description && (
              <p className="text-sm mt-2 text-gray-300 italic">{selectedRelation.description}</p>
            )}
            <a
              href={`/characters/${selectedRelation.slug}`}
              className="mt-4 px-4 py-2 border border-yellow-300 text-yellow-300 rounded hover:bg-yellow-300 hover:text-black transition-all text-sm"
            >
              View Full Profile
            </a>
          </div>
        </Modal>
      )}

      {/* Tools/Uniforms Modal */}
      {selectedItem && (
        <Modal title={selectedItem.name} onClose={() => setSelectedItem(null)}>
          <p>{selectedItem.description}</p>
        </Modal>
      )}
    </>
  );
};

export default ProfileBody;
