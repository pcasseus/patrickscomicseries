import { useEffect, useState, useRef } from "react";
import { textLines } from "./bootConstants";

export function useBootSequence({ confirmedStart, skipped, onComplete, blipRef }) {
  const [displayIndex, setDisplayIndex] = useState(-1);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);

  const audioRef = useRef(null);
  const indexRef = useRef(0);

  // Load available voices
  useEffect(() => {
    const handleVoices = () => setVoiceReady(true);
    if (speechSynthesis.getVoices().length > 0) {
      setVoiceReady(true);
    } else {
      window.speechSynthesis.onvoiceschanged = handleVoices;
    }
  }, []);

  // Boot sequence speech logic
  useEffect(() => {
    if (!confirmedStart || !voiceReady || hasRun || skipped) return;
    setHasRun(true);

    const voices = speechSynthesis.getVoices();

    const selectedVoice =
      voices.find(v => v.name === "Samantha") || // hardcoded preference
      voices.find(v => v.name.toLowerCase().includes("female")) ||
      voices.find(v => v.lang === "en-US") ||
      voices[0];

    const speakLine = () => {
      const currentIndex = indexRef.current;
      if (currentIndex >= textLines.length || skipped) return;

      const line = textLines[currentIndex];
      const utter = new SpeechSynthesisUtterance(line);
      utter.voice = selectedVoice;
      utter.rate = 0.95;
      utter.pitch = 1.15;
      utter.volume = 1;

      utter.onstart = () => {
        setDisplayIndex(currentIndex);
      };

      utter.onend = () => {
        indexRef.current += 1;
        if (indexRef.current < textLines.length) {
          speakLine();
        } else {
          triggerFinalTransition();
        }
      };

      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    };

    speakLine();
  }, [confirmedStart, voiceReady, hasRun, skipped]);

  const triggerFinalTransition = () => {
    blipRef.current?.classList.add("flash-pulse");

    setTimeout(() => {
      audioRef.current?.pause();
      audioRef.current = null;
      blipRef.current?.classList.remove("flash-pulse");

      setFadeOut(true);
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }, 1800);
  };

  const playAudioOnce = () => {
    if (!audioRef.current) {
      const audio = new Audio("/sfx/bootup.mp3");
      audio.volume = 0.4;
      audioRef.current = audio;
      audio.play().catch(() => {});
    }
  };

  const skip = () => {
    speechSynthesis.cancel();
    audioRef.current?.pause();
    audioRef.current = null;
    onComplete?.();
  };

  return {
    displayIndex,
    fadeOut,
    playAudioOnce,
    skip,
  };
}
