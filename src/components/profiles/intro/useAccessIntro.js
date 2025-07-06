import { useEffect, useRef, useState } from "react";
import { getRandomOverrideCode } from "../accessLogic";

export function useAccessIntro(name, onComplete, forceExit) {
  const [shouldRender, setShouldRender] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [overrideText] = useState(() => getRandomOverrideCode());

  const hasStarted = useRef(false);
  const timeoutRef = useRef(null);

  const LINE_DELAYS = [1600, 1400, 1600, 1400, 1200];

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
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
    clearTimeout(timeoutRef.current);
    setExiting(true);
    unlockScroll();
    setTimeout(() => onComplete?.(), 1000);
  };

  const runSequence = async () => {
    for (let i = 0; i <= 4; i++) {
      await new Promise((res) => setTimeout(res, LINE_DELAYS[i]));
      setCurrentLine(i);
    }

    setTimeout(() => {
      simulateTabSwitch();
      setExiting(true);
      unlockScroll();
      setTimeout(() => {
        onComplete?.();
      }, 300);
    }, 400);
  };

  useEffect(() => {
    if (forceExit) exitEarly();
  }, [forceExit]);

  useEffect(() => {
    if (!shouldRender || hasStarted.current) return;
    hasStarted.current = true;
    document.body.style.overflow = "hidden";
    runSequence();
  }, [shouldRender]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (currentLine < 1) {
        console.warn("Intro stuck — exiting.");
        exitEarly();
      }
    }, 10000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentLine]);

  return {
    shouldRender,
    exiting,
    currentLine,
    overrideText,
    exitEarly,
  };
}
