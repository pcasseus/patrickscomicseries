import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import AbilitiesSection from './AbilitiesSection';
import WeaknessesSection from './WeaknessesSection';
import RelationshipsSection from './RelationshipsSection';
import UniformsToolsSection from './UniformsToolsSection';
import Footer from './Footer';
import Modal from './Modal';

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
  const [revealStatus, setRevealStatus] = useState(false);

  return (
    <>
      <div className="text-green-400 tracking-widest text-sm mb-2 border-b border-green-700 pb-2">
        OPERATIVE ID: {character.id || "#000"} — STATUS:{" "}
        <span
          className={`transition duration-300 ${
            revealStatus ? "blur-0 text-green-300" : "blur-sm text-green-700 cursor-pointer"
          }`}
          onClick={() => setRevealStatus(true)}
        >
          {character.status?.toUpperCase() || "UNKNOWN"}
        </span>{" "}
        — CLASS: {character.class || "OMEGA"}
        {!revealStatus && (
          <div className="text-yellow-300 italic text-xs mt-1">
            (Status hidden to prevent spoilers — Click to reveal. Blurring does not imply harm or death.)
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          onClick={replayIntro}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition-all text-sm"
        >
          Replay Character Intro
        </button>
      </div>

      <ProfileHeader character={character} toggleTheme={toggleTheme} themeActive={themeActive} />
      <AbilitiesSection
        character={character}
        setSelectedAbility={setSelectedAbility}
        subVisible={subVisible}
        toggleSub={toggleSub}
      />
      <WeaknessesSection character={character} setSelectedAbility={setSelectedAbility} />
      <RelationshipsSection character={character} setSelectedRelation={setSelectedRelation} />
      <UniformsToolsSection character={character} setSelectedItem={setSelectedItem} />
      <Footer characterName={character.name} />

      {selectedAbility && (
        <Modal title={selectedAbility.name} onClose={() => setSelectedAbility(null)}>
          <p className="mb-2">{selectedAbility.description}</p>
          {selectedAbility.book && (
            <p className="text-sm text-yellow-300">
              First Appearance: <strong>{selectedAbility.book}</strong>
            </p>
          )}
        </Modal>
      )}
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
            <a
              href={`/characters/${selectedRelation.slug}`}
              className="mt-2 px-4 py-2 border border-yellow-300 text-yellow-300 rounded hover:bg-yellow-300 hover:text-black transition-all text-sm"
            >
              View Full Profile
            </a>
          </div>
        </Modal>
      )}
      {selectedItem && (
        <Modal title={selectedItem.name} onClose={() => setSelectedItem(null)}>
          <p>{selectedItem.description}</p>
        </Modal>
      )}
    </>
  );
};

export default ProfileBody;
