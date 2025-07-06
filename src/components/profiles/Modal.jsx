import React from 'react';

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] px-4 sm:px-6 animate-fade-in">
    <div className="bg-zinc-900 border border-lime-400 shadow-2xl rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative text-white font-mono tracking-wide leading-relaxed scrollbar-thin scrollbar-thumb-lime-400 scrollbar-track-transparent">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-lime-300 hover:text-lime-200 text-xl sm:text-2xl"
        aria-label="Close modal"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 mb-4 uppercase tracking-widest">
        {title}
      </h2>

      {/* Body */}
      <div className="text-sm sm:text-base whitespace-pre-line">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
