import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import characterData from '../data/characters';
import AccessIntro from './AccessIntro';
import ProfileBody from './ProfileBody';
import { useIntroPhase } from './intro/useIntroPhase';

const CharacterProfile = () => {
  const { slug } = useParams();
  const location = useLocation();
  const locationState = location.state || {};
  const character = characterData[slug];

  const [themeActive, setThemeActive] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subVisible, setSubVisible] = useState({});

  const { phase, markIntroComplete, replayIntro } = useIntroPhase(slug, locationState);

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
          name={character.name}
          shouldPlay={true}
          forcePlay={true}
          onComplete={markIntroComplete}
        />
      )}

      {phase === 'loading' && (
        <div className="flex flex-col items-center justify-center h-screen text-green-400 tracking-wide gap-6 bg-black relative overflow-hidden px-4 sm:px-8 md:px-12">
          {/* Background Layers */}
          <div className="matrix-bg absolute inset-0 z-0 opacity-20" />
          <div className="scanner-bar absolute top-0 left-0 w-full h-1 bg-green-500 animate-scan z-10" />

          {/* Foreground Loader */}
          <div className="z-20 flex flex-col items-center gap-4 text-center">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 border-2 border-t-transparent border-green-400" />
            <div className="animate-pulse text-sm sm:text-base md:text-lg">
              ACCESSING OPERATIVE FILE...
            </div>
          </div>
        </div>
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
