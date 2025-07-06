import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import characterData from '../data/characters';
import AccessIntro from './AccessIntro';
import ProfileBody from './ProfileBody';
import { useIntroPhase } from './intro/useIntroPhase';

const CharacterProfile = () => {
  const { slug } = useParams();
  const character = characterData[slug];

  const [themeActive, setThemeActive] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subVisible, setSubVisible] = useState({});

  const { phase, replayKey, markIntroComplete, replayIntro } = useIntroPhase();

  useEffect(() => {
    document.body.setAttribute('data-theme', slug);
    const themeId = 'character-theme';
    const existing = document.getElementById(themeId);
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.id = themeId;
    link.rel = 'stylesheet';
    link.href = `/CharacterProfile.css`;
    document.head.appendChild(link);

    return () => {
      document.body.removeAttribute('data-theme');
      const cleanup = document.getElementById(themeId);
      if (cleanup) cleanup.remove();
    };
  }, [slug]);

  const toggleTheme = () => {
    const themeId = 'custom-theme-toggle';
    const existing = document.getElementById(themeId);
    if (existing) {
      existing.classList.add('fade-out');
      setTimeout(() => existing.remove(), 500);
      setThemeActive(false);
    } else {
      const link = document.createElement('link');
      link.id = themeId;
      link.rel = 'stylesheet';
      link.href = `/themes/${slug}-theme.css`;
      link.classList.add('fade-in');
      document.head.appendChild(link);
      setThemeActive(true);
    }
  };

  const toggleSub = (abilityName) => {
    setSubVisible((prev) => ({
      ...prev,
      [abilityName]: !prev[abilityName],
    }));
  };

  if (!character) {
    return <div className="text-center text-yellow-500">404 — Operative not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-x-hidden">
      {phase === 'intro' && (
        <AccessIntro
          key={replayKey}
          name={character.name}
          shouldPlay={true}
          forcePlay={true}
          onComplete={markIntroComplete}
        />
      )}

      {phase === 'profile' && (
        <ProfileBody
          character={character}
          toggleTheme={toggleTheme}
          themeActive={themeActive}
          subVisible={subVisible}
          toggleSub={toggleSub}
          selectedAbility={selectedAbility}
          setSelectedAbility={setSelectedAbility}
          selectedRelation={selectedRelation}
          setSelectedRelation={setSelectedRelation}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          replayIntro={replayIntro}
        />
      )}
    </div>
  );
};

export default CharacterProfile;
