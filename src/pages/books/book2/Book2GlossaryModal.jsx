import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Book2GlossaryModal({ glossaryEntries, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 text-white flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-red-500 rounded-lg p-6 max-w-2xl w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-red-400 text-xl hover:text-red-300"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold text-red-500 mb-4">📘 Restricted Terms</h2>
        <ul className="space-y-2 text-sm">
          {glossaryEntries.map(({ term, definition }) => (
            <li key={term}>
              <strong className="text-red-400">{term}</strong>: {definition}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
