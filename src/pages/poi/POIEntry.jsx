import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { useNavigate } from 'react-router-dom';
import './css/POIEntry.css';

export default function POIEntry() {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.6;
    }
  }, []);

  return (
    <div className="poi-entry-container">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="black"
        width={windowSize.width}
        height={windowSize.height}
        className="poi-globe"
      />

      <div className="poi-entry-overlay">
        <h1 className="poi-entry-title">ACCESS TERMINAL: KENSHINVERSE</h1>
        <p className="poi-entry-sub">Spinning up global interface...</p>
        <button
          className="poi-entry-button"
          onClick={() => navigate('/lore/pois/map')}
        >
          ENTER INTERFACE →
        </button>
      </div>
    </div>
  );
}
