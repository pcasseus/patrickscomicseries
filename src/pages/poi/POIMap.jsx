import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { locations } from './locations';
import POILocationList from './POILocationList';
import POIDetailsPanel from './POIDetailsPanel';
import './css/POIMapLayout.css';
import './css/POIIcons.css';

const pinIcon = new L.DivIcon({
  html: `<div class='poi-pin-icon'></div>`,
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

function FocusMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 6, { animate: true });
  }, [lat, lng, map]);
  return null;
}

export default function POIMap() {
  const mapRef = useRef();
  const [selected, setSelected] = useState(locations[0]);
  const navigate = useNavigate();

  const resetView = () => {
    if (mapRef.current) mapRef.current.setView([37.8, -96], 4);
  };

  const zoomIn = () => {
    if (mapRef.current) mapRef.current.zoomIn();
  };

  const zoomOut = () => {
    if (mapRef.current) mapRef.current.zoomOut();
  };

  const focusOnSelected = () => {
    if (mapRef.current && selected) {
      mapRef.current.setView([selected.lat, selected.lng], 10);
    }
  };

  const moveMap = (dx, dy) => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const center = map.getCenter();
    map.setView([center.lat + dy, center.lng + dx]);
  };

  return (
    <div className="poi-map-fixed-wrapper">
      {/* HEADER */}
      <div className="poi-map-header">
        <div className="poi-map-header-inner">
          <button className="poi-map-exit" onClick={() => navigate('/lore/pois')}>
            ← Exit to Access Terminal
          </button>

          <div className="poi-map-center">
            <div className="poi-map-title">KENSHINVERSE POIs</div>
            <div className="poi-map-status">
              STATUS: <span className="online">ONLINE</span>
            </div>
          </div>

          <div className="poi-map-clock">
            {new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
        <div className="poi-scanline" />
      </div>

      {/* MAP + SIDEBARS */}
      <div className="poi-map-container">
        <POILocationList selected={selected} setSelected={setSelected} />

        <div className="poi-map-pane">
          <div className="poi-map-wrapper">
            <MapContainer
              center={[selected.lat, selected.lng]}
              zoom={6}
              scrollWheelZoom
              zoomControl
              ref={mapRef}
              className="poi-leaflet map-shrinked"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {locations.map((loc, i) => (
                <Marker
                  key={i}
                  position={[loc.lat, loc.lng]}
                  icon={pinIcon}
                  eventHandlers={{ click: () => setSelected(loc) }}
                >
                  <Popup>
                    <strong>{loc.name}</strong>
                    <br />
                    {loc.description}
                  </Popup>
                </Marker>
              ))}
              <FocusMap lat={selected.lat} lng={selected.lng} />
            </MapContainer>
          </div>

          {/* MAP FOOTER CONTROLS */}
          <div className="poi-map-footer-controls">
            <div className="poi-map-btn-group">
              <button onClick={resetView}>Reset</button>
              <button onClick={zoomIn}>Zoom In</button>
              <button onClick={zoomOut}>Zoom Out</button>
              <button onClick={focusOnSelected}>Recenter</button>
            </div>
            <div className="poi-map-btn-move">
              <button onClick={() => moveMap(0, 1)}>↑</button>
              <div>
                <button onClick={() => moveMap(-1, 0)}>←</button>
                <button onClick={() => moveMap(1, 0)}>→</button>
              </div>
              <button onClick={() => moveMap(0, -1)}>↓</button>
            </div>
          </div>
        </div>

        <POIDetailsPanel selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
