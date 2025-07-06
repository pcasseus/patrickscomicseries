import React from "react";
import AICoreCircle from "../ui/AICoreCircle";
import { textLines } from "./bootConstants";

const AIBootupPanel = ({
  confirmedStart,
  onConfirm,
  onSkip,
  displayIndex,
  skipped,
  blipRef,
  fadeOut,
}) => {
  return (
    <div
      className={`ai-access-panel fixed inset-0 z-50 w-full bg-black text-center text-sm text-cyan-300 ${
        fadeOut ? "fade-out" : "animate-fadeIn"
      }`}
      style={{ minHeight: "100dvh", height: "100%", overflow: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-4 md:px-0 space-y-6">
        <div className="relative z-10 scale-[0.75] sm:scale-100">
          <AICoreCircle size={176} />
        </div>

        {!confirmedStart ? (
          <>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-cyan-400/80 text-center">
              System loaded. Begin sequence?
            </div>
            <button
              onClick={onConfirm}
              className="mt-2 px-4 py-2 text-[11px] sm:text-xs bg-cyan-500 hover:bg-cyan-400 text-black rounded-full transition"
            >
              I’m ready
            </button>
          </>
        ) : (
          <>
            {displayIndex >= 0 && (
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-cyan-400/80 px-2 text-center">
                {textLines[displayIndex]}
              </div>
            )}

            {!skipped && (
              <button
                onClick={onSkip}
                className="mt-4 text-[11px] text-cyan-400 underline hover:text-cyan-200 transition"
              >
                Skip Intro
              </button>
            )}

            <span
              ref={blipRef}
              className="text-cyan-400 text-[12px] sm:text-sm mt-2 tracking-widest glitch-scan block text-center"
            >
              {displayIndex === textLines.length - 1 && skipped
                ? "∎ ACCESS GRANTED — INTERFACE ONLINE"
                : ""}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default AIBootupPanel;
