import React from "react";
import { useLocation } from "react-router-dom";
import CharacterProfile from "./CharacterProfile";

const SecureCharacterProfile = () => {
  const location = useLocation();

  const safeState = location.state || {
    fromGallery: window.__kenshin_entrySource === "fromGallery",
    fromHome: window.__kenshin_entrySource === "fromHome"
  };

  // Immediately reset the global entry marker so it doesn't persist
  window.__kenshin_entrySource = null;

  return <CharacterProfile locationState={safeState} />;
};

export default SecureCharacterProfile;
