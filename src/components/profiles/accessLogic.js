export const getRandomOverrideCode = () => {
  const options = [
    'Override Code: Specter-Delta Engaged',
    'Override Sequence: Omega-4 Authorization',
    'Override Key Accepted: Fenrir Protocol',
    'Override Triggered: Zeta-Black Directive',
    'Override Lock Disengaged: Helix Command',
    'Override Confirmed: Prime Vault Access',
    'Override Initialized: Tempest-Class Clearance',
    'Override Detected: Protocol Indigo-8',
    'Override Signal: Echo-Six Breach Validated',
    'Override Input Verified: Sigma-Five Clearance',
    'Override Code Decryption: Zero-State Enabled'
  ];
  return options[Math.floor(Math.random() * options.length)];
};

export const getSelectedVoice = () => {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find(v => v.name.toLowerCase().includes("samantha")) ||
    voices.find(v => v.name.toLowerCase().includes("female")) ||
    voices.find(v => v.name.includes("Google US English Female")) ||
    voices.find(v => v.lang === "en-US") ||
    voices[0]
  );
};

export const speakLinesSequentially = async (lines, voice, setCurrentLine, volume = 0.8) => {
  for (let i = 0; i < lines.length; i++) {
    setCurrentLine(i);
    const utter = new SpeechSynthesisUtterance(lines[i]);
    utter.voice = voice;
    utter.rate = 0.85;
    utter.pitch = 1.2;
    utter.volume = volume;

    await new Promise(resolve => {
      utter.onend = resolve;
      speechSynthesis.speak(utter);
    });
  }
};

export const stopAllSpeech = (utterances) => {
  speechSynthesis.cancel();
  utterances.forEach(u => (u.onend = null));
};
