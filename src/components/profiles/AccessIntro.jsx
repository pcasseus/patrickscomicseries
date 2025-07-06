import React from "react";
import AccessIntroDisplay from "./AccessIntroDisplay";
import { useAccessIntro } from "./intro/useAccessIntro";

export default function AccessIntro({ name, shouldPlay = false, onComplete, forceExit = false }) {
  const {
    shouldRender,
    exiting,
    currentLine,
    exitEarly,
    overrideText,
  } = useAccessIntro(name, onComplete, forceExit);

  if (!shouldPlay || !shouldRender) return null;

  return (
    <AccessIntroDisplay
      name={name}
      exiting={exiting}
      currentLine={currentLine}
      overrideText={overrideText}
      onSkip={exitEarly}
    />
  );
}
