// src/pages/poi/components/POIDetailsPanel.jsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DetailsTab from './DetailsTab';
import CharactersTab from './CharactersTab';
import LoreTab from './LoreTab';
import './css/POIDetailsPanel.css';
import './css/POITabs.css';


export default function POIDetailsPanel({ selected, setSelected }) {
  const [tab, setTab] = useState("details");

  const renderTab = () => {
    switch (tab) {
      case "details": return <DetailsTab selected={selected} />;
      case "characters": return <CharactersTab selected={selected} />;
      case "lore": return <LoreTab selected={selected} />;
      default: return null;
    }
  };

  return (
    <div className="poi-sidebar">
      <div className="poi-sidebar-header">
        <h2 className="poi-sidebar-title">{selected.name}</h2>
      </div>

      <div className="poi-sidebar-tabs">
        {["details", "characters", "lore"].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`poi-tab ${tab === key ? 'active' : ''}`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="poi-sidebar-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
