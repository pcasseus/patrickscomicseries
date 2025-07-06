import React from 'react';

const UniformsToolsSection = () => (
  <div className="grid md:grid-cols-2 gap-6 mb-8">
    {['Uniforms', 'Tools'].map((label) => (
      <div key={label} className="bg-zinc-900 border border-yellow-500 rounded p-6 text-center">
        <h2 className="text-yellow-300 text-xl font-bold mb-4">{label}</h2>
        <div className="py-8">
          <p className="text-yellow-400 font-mono text-sm uppercase tracking-widest border border-yellow-700 p-4 rounded bg-black shadow-inner shadow-yellow-900">
            ACCESS DENIED: {label} records are currently classified.
            <br />
            <span className="text-yellow-500 font-bold block mt-2">■ COMING SOON ■</span>
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default UniformsToolsSection;
