import React, { useEffect, useState } from 'react';
import AICoreCircle from '../../components/ui/AICoreCircle';
import { Play, Square } from 'lucide-react';

export default function AIWelcome() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState(null);

  const message = `Welcome. I am Kenshin Core. This codex is the central archive for all known races across the Kenshinverse. 
  Access genetic profiles, origins, structures, and the hidden truths behind every species that walks or wages war in this universe.`;

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();

      const preferred = voices.find(v =>
        ['Google UK English Female', 'Samantha', 'Microsoft Aria Online (Natural)', 'Microsoft Zira Desktop', 'Google en-US'].includes(v.name)
      );

      const fallback = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'));
      const nonDefault = voices.find(v => v.lang.startsWith('en') && v !== voices[0]);

      setVoice(preferred || fallback || nonDefault || voices[0]);
    };

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, []);

  const speak = () => {
    if (!voice) return;
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.voice = voice;
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-center mb-16">
      <AICoreCircle isSpeaking={isSpeaking} size={120} />

      <h1 className="mt-4 text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-[#00ff9f] drop-shadow">
        Welcome to the Kenshinverse Codex
      </h1>

      <div className="mt-4 flex gap-4">
        <button
          onClick={speak}
          className="flex items-center gap-2 text-[#00ff9f] border border-[#00ff9f88] px-4 py-1.5 rounded hover:bg-[#002621] hover:shadow-md transition-all"
        >
          <Play size={16} /> Play Intro
        </button>

        <button
          onClick={stop}
          className="flex items-center gap-2 text-[#00ff9f] border border-[#00ff9f88] px-4 py-1.5 rounded hover:bg-[#330000] hover:shadow-md transition-all"
        >
          <Square size={16} /> Stop
        </button>
      </div>
    </div>
  );
}
