import React from "react";

export default function HeroCard({ hero }) {
  return (
    <div className="hero-card">
      <div className="hero-heading">HERO</div>
      <div className="hero-image-frame">
        <img
          src={`/${hero.image}`}
          alt={hero.name}
          className="hero-image"
          onError={(e) => {
            console.warn("Missing image for", hero.name);
            e.currentTarget.src = "/fallback.jpg";
          }}
        />
      </div>
      <div className="hero-name">{hero.name}</div>
      <div className="hero-role">{hero.role}</div>
    </div>
  );
}
