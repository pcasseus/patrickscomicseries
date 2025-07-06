import React from "react";
import AICoreCircle from "../ui/AICoreCircle";
import "./AccessIntro.css";

export default function AccessIntroDisplay({ name, exiting, currentLine, overrideText, onSkip }) {
  return (
    <div className={`access-intro ${exiting ? "fade-out" : ""}`}>
      {/* Matrix BG */}
      <div className="matrix-bg" />

      {/* ACCESS DENIED ALERT */}
      {currentLine === 1 && (
        <div className="fullscreen-alert red-alert">
          ACCESS DENIED
        </div>
      )}

      {/* OVERRIDE DETECTED ALERT */}
      {currentLine === 2 && (
        <div className="fullscreen-alert blue-alert">
          {overrideText.toUpperCase()}
        </div>
      )}

      <div className="terminal-box">
        {/* Skip Button */}
        <button
          onClick={onSkip}
          className="absolute top-4 right-6 z-30 text-xs text-red-400 border border-red-600 px-3 py-1 rounded hover:bg-red-800/20 transition-all"
        >
          SKIP INTRO
        </button>

        {/* AI Core */}
        <div className="ai-circle-container">
          <AICoreCircle isSpeaking={currentLine < 5} />
        </div>

        {/* Terminal Text */}
        <div className="terminal-text">
          {currentLine >= 0 && (
            <div className={`typewriter-line warning-red ${currentLine > 0 ? "done" : ""}`}>
              &gt; WARNING: ACCESSING RESTRICTED AGENT FILE
            </div>
          )}
          {currentLine >= 3 && (
            <div className={`typewriter-line ${currentLine > 3 ? "done" : ""}`}>
              &gt; ENTERING FILE
            </div>
          )}
          {currentLine >= 4 && (
            <>
              <div className={`typewriter-line ${currentLine > 4 ? "done" : ""}`}>
                &gt; SUBJECT: <span className="highlight">{name}</span>
              </div>
              <div className="auth-box">[CLASSIFIED ACCESS AUTHORIZED]</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
