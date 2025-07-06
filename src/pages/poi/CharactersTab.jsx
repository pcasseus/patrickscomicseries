import React from 'react';
import { Link } from 'react-router-dom';

export default function CharactersTab({ selected }) {
  return (
    <div className="poi-tab-panel">
      {selected.characters?.length > 0 ? (
        selected.characters.map((char, i) => (
          <Link key={i} to={`/characters/${char.slug}`} className="poi-char-card">
            <img src={char.img} alt={char.name} />
            <div>
              <span>{char.name}</span>
              <span className="poi-char-link">View →</span>
            </div>
          </Link>
        ))
      ) : (
        <p className="poi-muted">No characters associated.</p>
      )}
    </div>
  );
}
