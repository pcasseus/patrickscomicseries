import React from "react";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <div className="terminal right">
      <div className="header">
        <h1>UPDATES COMING SOON</h1>
        <p>Preview of incoming transmissions queued for deployment.</p>
      </div>
      <ul className="coming-soon-list">
        <li>Historical Archives</li>
        <li>Tech & Artifacts</li>
        <li>Upgraded Character Introduction Animations</li>
        <li>Character Themes, Weaknesses, Tools and Suits</li>
        <li>Books 1, 2, and 3</li>
      </ul>
    </div>
  );
}
