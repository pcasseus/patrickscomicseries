import React, { useEffect, useRef } from "react";

export default function CrimesModal({ target, onClose, anchorRef }) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const rect = anchorRef?.current?.getBoundingClientRect();
  const top = rect ? rect.top + window.scrollY + rect.height + 10 : 100;
  const left = rect ? rect.left + rect.width / 2 - 150 : 100;

  return (
    <div className="popup-absolute-wrapper">
      <div
        className="popup-box anchored"
        ref={popupRef}
        style={{ top: `${top}px`, left: `${left}px` }}
      >
        <div className="popup-header">
          <span>Charges</span>
          <button className="popup-close" onClick={onClose}>✕</button>
        </div>
        <ul className="popup-list">
          {target.crimes.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        <div className="popup-caret" />
      </div>
    </div>
  );
}
