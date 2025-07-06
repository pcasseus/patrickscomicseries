export const textLines = [
  "Initializing Kenshin Core...",
  "Decrypting secure archives...",
  "Access granted. Welcome to the Kenshinverse.",
];

// Priority-based female voice selection for consistent output
export const preferredVoices = {
  female: [
    "Google US English Female",                  // Chrome
    "Microsoft Zira Desktop - English (United States)", // Edge/Windows
    "Samantha",                                  // macOS
  ],
};

export const findFemaleVoice = (voices) => {
  // Try to find exact match from preferred list
  for (const name of preferredVoices.female) {
    const match = voices.find((v) => v.name === name);
    if (match) return match;
  }

  // Fallback: match by keyword
  const fallback = voices.find((v) =>
    v.lang === "en-US" && v.name.toLowerCase().includes("female")
  );
  if (fallback) return fallback;

  // Final fallback: any en-US voice
  return voices.find((v) => v.lang === "en-US");
};
