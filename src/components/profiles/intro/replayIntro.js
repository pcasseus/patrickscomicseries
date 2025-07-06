export const replayIntro = (setForceReplay, setPhase) => () => {
  setForceReplay(true);
  setPhase("intro");
};
