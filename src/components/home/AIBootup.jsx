import React, { useRef, useState, useEffect } from "react";
import AIBootupPanel from "./AIBootupPanel";
import { useBootSequence } from "./useBootSequence";
import { textLines } from "./bootConstants";
import "../ui/AIBootup.css";

const AIBootup = ({ onComplete }) => {
  const blipRef = useRef(null);
  const audioRef = useRef(null);

  const [confirmedStart, setConfirmedStart] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [audioStarted, setAudioStarted] = useState(() => {
    return sessionStorage.getItem("bootupAudioPlayed") === "true";
  });

  const {
    displayIndex,
    fadeOut,
    playAudioOnce,
    skip: skipBoot,
  } = useBootSequence({
    confirmedStart,
    skipped,
    onComplete: () => {
      unlockScroll();
      document.body.classList.remove("hide-navbar");
      onComplete?.();
    },
    blipRef,
  });

  // Unlock scroll and UI after boot completes or is skipped
  const unlockScroll = () => {
    document.body.style.overflow = "auto";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);
    const el = document.querySelector(".ai-access-panel");
    if (el) el.classList.add("scroll-unlocked");
  };

  // Confirmed start (user clicked the "Get Started" button)
  const handleConfirm = () => {
    setConfirmedStart(true);

    if (!audioStarted) {
      const ambient = new Audio("/sfx/bootup.mp3");
      ambient.volume = 0.9;
      ambient.loop = true;
      ambient.play().catch(() => {});
      audioRef.current = ambient;

      sessionStorage.setItem("bootupAudioPlayed", "true");
      setAudioStarted(true);
    }

    // Start boot sequence audio cues (text beeps etc)
    playAudioOnce();
  };

  // Skip logic if user clicks "Skip"
  const handleSkip = () => {
    setSkipped(true);
    skipBoot();
    unlockScroll();
    document.body.classList.remove("hide-navbar");

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Stop boot audio when "Welcome" finishes
  useEffect(() => {
    if (
      textLines[displayIndex]?.toLowerCase().includes("welcome to the kenshinverse") &&
      audioRef.current
    ) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [displayIndex]);

  // Lock scroll and hide navbar on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("hide-navbar");

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("hide-navbar");
    };
  }, []);

  return (
    <div style={{ minHeight: "100dvh", height: "100%", width: "100%", overflow: "hidden" }}>
      <AIBootupPanel
        confirmedStart={confirmedStart}
        onConfirm={handleConfirm}
        onSkip={handleSkip}
        displayIndex={displayIndex}
        skipped={skipped}
        blipRef={blipRef}
        fadeOut={fadeOut}
      />
    </div>
  );
};

export default AIBootup;
