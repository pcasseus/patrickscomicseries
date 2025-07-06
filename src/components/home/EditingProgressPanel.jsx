import React, { useState, useEffect } from "react";

const editingPhases = [
  { label: "Line Editing", icon: "✏", color: "yellow" },
  { label: "Continuity Review", icon: "🔍", color: "blue" },
  { label: "Beta Feedback", icon: "🧪", color: "lime" },
  { label: "Rewrites", icon: "📘", color: "indigo" },
  { label: "Final Polishing", icon: "✨", color: "amber" },
];

const targetDate = new Date("2025-11-15T00:00:00");

const EditingProgressPanel = () => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [countdown, setCountdown] = useState("");

  const totalDrafts = 3;
  const totalPhases = editingPhases.length;
  const completedCount = totalDrafts;
  const maxCount = totalDrafts + totalPhases;
  const finalPercent = Math.floor((completedCount / maxCount) * 100);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= finalPercent) {
        clearInterval(interval);
      } else {
        current += 1;
        setAnimatedPercent(current);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [finalPercent]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setCountdown("COMPLETE");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m remaining`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm bg-black/70 border border-yellow-600 rounded-lg p-4 text-xs text-white backdrop-blur-md shadow-lg animate-fadeIn flex flex-col space-y-5">
      {/* Header: Editing */}
      <h3 className="text-yellow-300 font-semibold text-sm border-b border-yellow-600 pb-1">
        ⚡ Editing Phase Progress
      </h3>

      <div className="text-blue-300 font-mono text-[11px] flex justify-between mt-1">
        <span>{animatedPercent}% Complete</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded overflow-hidden mb-4">
        <div
          className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-100 ease-linear"
          style={{ width: `${animatedPercent}%` }}
        />
      </div>

      {/* === Phases === */}
      <div className="flex-grow overflow-y-auto pr-1 space-y-4 border-t border-yellow-800 pt-4 pb-1">
        {editingPhases.map((phase) => (
          <div
            key={phase.label}
            className={`flex items-start gap-3 p-3 border-l-4 border-${phase.color}-500 bg-black/50 rounded-md relative`}
          >
            <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 heartbeat-blink" />
            <div className="flex flex-col">
              <span className={`text-${phase.color}-300 font-semibold`}>
                {phase.icon} {phase.label}
              </span>
              <span className="text-[10px] text-red-400 italic">In Progress</span>
            </div>
          </div>
        ))}
      </div>

      {/* === Forecast Section === */}
      <div className="flex flex-col gap-6 text-[11px] font-mono border-t border-yellow-800 pt-6 pb-1">

        {/* Tag: Broadcast Sync Active */}
        <div className="text-[10px] text-yellow-400 uppercase tracking-widest border border-yellow-700 rounded px-2 py-1 bg-yellow-900/10 w-fit">
          [Broadcast Sync Active]
        </div>

        {/* Header: Trilogy I */}
        <h3 className="text-yellow-300 font-semibold text-sm border-b border-yellow-600 pb-1">
          TRILOGY I — LIVE TRACKING
        </h3>

        {/* Book 1 - Live */}
        <div className="relative border border-yellow-500 bg-yellow-900/10 rounded-lg px-3 py-3 shadow-lg space-y-1 overflow-hidden">
          <div className="text-yellow-400 font-bold tracking-wide">
            BOOK 1 ▸ LIVE TRACKING
          </div>
          <div className="text-yellow-200">
            Fall 2025 <span className="opacity-50">[~ Nov 15]</span>
          </div>
          <div className="text-yellow-400 font-mono">{countdown}</div>
          <div className="text-yellow-600 italic opacity-70">
            Final polishing underway.
          </div>
          {/* Animated bottom border line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 opacity-40 animate-scrollLine" />
        </div>

        {/* Book 2 */}
        <div className="border-l-2 border-yellow-800 pl-3 ml-1 space-y-1">
          <div className="text-yellow-300 font-semibold">
            BOOK 2 ▸ Forecast
          </div>
          <div className="text-yellow-100">
            Late Summer 2026 <span className="opacity-50">[~ August]</span>
          </div>
          <div className="text-yellow-500 italic opacity-50">
            Story re-assembly scheduled.
          </div>
        </div>

        {/* Book 3 */}
        <div className="border-l-2 border-yellow-800 pl-3 ml-1 space-y-1">
          <div className="text-yellow-300 font-semibold">
            BOOK 3 ▸ Forecast
          </div>
          <div className="text-yellow-100">
            Late Spring 2027 <span className="opacity-50">[~ May]</span>
          </div>
          <div className="text-yellow-500 italic opacity-50">
            Final convergence expected.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditingProgressPanel;
