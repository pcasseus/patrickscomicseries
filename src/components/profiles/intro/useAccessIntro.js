import { useEffect, useRef, useState } from "react";
import {
  getRandomOverrideCode,
  getSelectedVoice,
  speakLinesSequentially,
  stopAllSpeech,
} from "../accessLogic";

export function useAccessIntro(name, onComplete, forceExit) {
  const [shouldRender, setShouldRender] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [overrideText] = useState(() => getRandomOverrideCode());

  const hasStarted = useRef(false);
  const activeUtterances = useRef([]);
  const retryCount = useRef(0);

  const stopSpeech = () => {
    stopAllSpeech(activeUtterances.current);
    activeUtterances.current = [];
  };

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);
    const el = document.querySelector(".access-intro");
    if (el) el.classList.add("scroll-unlocked");
  };

  const simulateTabSwitch = () => {
  try {
    const original = Object.getOwnPropertyDescriptor(Document.prototype, "hidden");
    const event = new Event("visibilitychange");

    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => true,
    });

    document.dispatchEvent(event);

    setTimeout(() => {
      Object.defineProperty(document, "hidden", original || { get: () => false });
      document.dispatchEvent(event);
    }, 50);
  } catch (err) {
    console.warn("Tab simulation failed:", err);
  }
};

  const exitEarly = () => {
    stopSpeech();
    setExiting(true);
    unlockScroll();
    setTimeout(() => onComplete?.(), 1000);
  };

  useEffect(() => {
    if (forceExit) exitEarly();
  }, [forceExit]);

  const speak = async (voice) => {
    const lines = [
      "Civilian access detected.",
      `${overrideText}.`,
      "Unlocking operative file.",
    ];

    await speakLinesSequentially(lines, voice, setCurrentLine, 0.7);

    setCurrentLine(3);
    const final = new SpeechSynthesisUtterance(`Subject: ${name}`);
    final.voice = voice;
    final.rate = 0.9;
    final.pitch = 1.1;
    final.volume = 0.8;
    activeUtterances.current.push(final);

    await new Promise((resolve) => {
      final.onend = resolve;
      speechSynthesis.speak(final);
    });

    setTimeout(() => {
      const dummy = document.createElement("div");
      dummy.style.display = "none";
      document.body.appendChild(dummy);
      document.body.offsetHeight;
      document.body.removeChild(dummy);

      simulateTabSwitch();
      setExiting(true);
      unlockScroll();

      setTimeout(() => {
        onComplete?.();
      }, 100);
    }, 300);
  };

  const trySpeak = () => {
    const voices = speechSynthesis.getVoices();
    if (voices.length === 0) {
      if (retryCount.current < 10) {
        retryCount.current++;
        setTimeout(trySpeak, 200);
      }
      return;
    }

    const voice = getSelectedVoice();
    speak(voice);
  };

  useEffect(() => {
    if (!shouldRender || hasStarted.current) return;
    hasStarted.current = true;
    retryCount.current = 0;

    document.body.style.overflow = "hidden";
    setTimeout(trySpeak, 300);

    speechSynthesis.addEventListener("voiceschanged", trySpeak);

    return () => {
      stopSpeech();
      document.body.style.overflow = "auto";
      speechSynthesis.removeEventListener("voiceschanged", trySpeak);
    };
  }, [shouldRender]);

  // ✅ Timeout fallback: auto exit if intro is stuck
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentLine < 1) {
        console.warn("Speech failed — exiting intro.");
        exitEarly();
      }
    }, 6000); // 6 seconds fallback

    return () => clearTimeout(timeout);
  }, [currentLine]);

  return {
    shouldRender,
    exiting,
    currentLine,
    overrideText,
    exitEarly,
  };
}
