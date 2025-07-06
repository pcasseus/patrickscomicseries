import React from "react";
import AICoreCircle from "../ui/AICoreCircle";
import "./AccessIntro.css";

export default function AccessIntroDisplay({ name, exiting, currentLine, overrideText, onSkip }) {
  return (
    <div className={`access-intro-container ${exiting ? "fade-out" : ""}`}>
      {/* Background Layers */}
      <div className="grid-bg" />
      <div className="scanlines" />

      {/* AI Core Visual */}
      <div className="ai-core-wrapper">
        <AICoreCircle isSpeaking={currentLine < 3} size={160} />
      </div>

      {/* Terminal Readout */}
      <div className="terminal-panel">
        {currentLine >= 0 && (
          <div className="terminal-line line-init">
            &gt; INITIALIZING SECURE TERMINAL ACCESS...
          </div>
        )}

        {currentLine >= 1 && (() => {
          const hasInitiated = / INITIATED$/i.test(overrideText);
          const cleaned = overrideText.replace(/ INITIATED$/i, "");

          return (
            <div className="terminal-line line-override">
              &gt; SECURITY OVERRIDE ENGAGED:{" "}
              <span className="typewriter-line-fixed">
                {cleaned}
                {hasInitiated && <span className="override-end">&nbsp;INITIATED</span>}
              </span>
            </div>
          );
        })()}

        {currentLine >= 2 && (
          <>
            <div className="terminal-line line-access">
              &gt; GAINING ACCESS TO SUBJECT: <span className="line-name">{name}</span>
            </div>
            <div className="terminal-line line-granted" style={{ marginTop: "1rem" }}>
              [CLASSIFIED ACCESS GRANTED]
            </div>
          </>
        )}
      </div>

      {/* Inline Skip Button below terminal */}
      <button className="skip-btn-inline" onClick={onSkip}>
        Skip Access Terminal
      </button>
    </div>
  );
}
