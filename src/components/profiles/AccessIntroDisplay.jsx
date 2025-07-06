// src/components/profiles/AccessIntroDisplay.jsx
import React from "react";
import AICoreCircle from "../ui/AICoreCircle";
import "./AccessIntro.css";

export default function AccessIntroDisplay({ name, exiting, currentLine, overrideText, onSkip }) {
  return (
    <div className={`access-intro ${exiting ? "fade-out" : ""}`}>
      {/* Matrix BG & Scanner */}
      <div className="matrix-bg" />
      <div className="scanner-bar" />

      <div className="terminal-box">
        {/* Skip Button */}
        <button
          onClick={onSkip}
          className="absolute top-4 right-6 z-30 text-xs text-green-400 border border-green-600 px-3 py-1 rounded hover:bg-green-800/20 transition-all"
        >
          SKIP INTRO
        </button>

        {/* Fallback Hint */}
        {currentLine < 1 && (
          <div className="text-red-400 text-xs mt-4 text-center italic animate-pulse">
            Having trouble? You can skip the intro below.
          </div>
        )}

        {/* AI Core */}
        <div className="ai-circle-container">
          <AICoreCircle isSpeaking={currentLine < 4} />
        </div>

        {/* Terminal Text */}
        <div className="terminal-text">
          <div className={`glitch-line ${currentLine >= 0 ? "visible" : ""}`}>
            &gt; CIVILIAN ACCESS DETECTED
          </div>

          <div className={`glitch-line ${currentLine >= 1 ? "visible" : ""}`}>
            &gt; {overrideText.toUpperCase()}
          </div>

          <div className={`glitch-line ${currentLine >= 2 ? "visible" : ""}`}>
            &gt; UNLOCKING OPERATIVE FILE
          </div>

          <div className={`glitch-line ${currentLine >= 3 ? "visible" : ""}`}>
            &gt; SUBJECT: <span className="highlight">{name}</span>
          </div>

          <div className={`auth-box ${currentLine >= 3 ? "visible" : ""}`}>
            [CLASSIFIED ACCESS AUTHORIZED]
          </div>
        </div>
      </div>
    </div>
  );
}
