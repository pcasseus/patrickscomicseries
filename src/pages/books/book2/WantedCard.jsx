import React from "react";

export default function WantedCard({ target, index }) {
  return (
    <div className="grid-card">
      <div className="grid-heading">WANTED</div>
      <div className="grid-image-frame">
        <img src={target.image} alt={target.name} className="grid-image" />
      </div>
      <div className="grid-name">{target.name}</div>
      <div className="grid-info">
        <div><span>Alias:</span> {target.alias}</div>
        <div><span>Status:</span> {target.status}</div>
        <div><span>Top Charges:</span></div>
        <ul>
          {target.crimes.slice(0, 4).map((crime, i) => (
            <li key={i}>{crime}</li>
          ))}
        </ul>
        <div className={`grid-threat ${target.threat.toLowerCase()} ${index === 2 ? "electric-glow" : ""}`}>
          <span>THREAT LEVEL:</span> {target.threat}
        </div>
      </div>
    </div>
  );
}
