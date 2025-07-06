import React from 'react';

export default function DetailsTab({ selected }) {
  return (
    <div className="poi-tab-panel">
      <p className="poi-desc">{selected.description}</p>
    </div>
  );
}
