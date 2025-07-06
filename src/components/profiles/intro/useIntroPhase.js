import { useEffect, useState } from "react";
import { getIsReload } from './getIsReload';
import { useInactiveReturn } from './useInactiveReturn';
import { markIntroComplete as markFn } from './markIntroComplete';
import { replayIntro as replayFn } from './replayIntro';

export const useIntroPhase = (slug, locationState = {}) => {
  const [phase, setPhase] = useState("init");
  const [replayKey, setReplayKey] = useState(0); // replaces forceReplay with versioned trigger

  const isReload = getIsReload();
  const inactiveReturn = useInactiveReturn();

  useEffect(() => {
    const fromGallery = locationState?.fromGallery ?? false;
    const fromHome = locationState?.fromHome ?? false;
    const cameFromNav = fromGallery || fromHome;

    const shouldPlayIntro = !isReload && !inactiveReturn && (cameFromNav || replayKey > 0);

    console.log("Intro Phase Debug:", {
      isReload,
      inactiveReturn,
      fromGallery,
      fromHome,
      replayKey,
      shouldPlayIntro,
    });

    if (shouldPlayIntro) {
      setPhase("intro");
    } else {
      setPhase("loading");
      const timer = setTimeout(() => setPhase("profile"), 2000);
      return () => clearTimeout(timer);
    }
  }, [slug, locationState, replayKey, isReload, inactiveReturn]);

  return {
    phase,
    markIntroComplete: markFn(setPhase),
    replayIntro: () => setReplayKey(prev => prev + 1),
  };
};
