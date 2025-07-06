import React from 'react';

const RelationshipsSection = ({ character, setSelectedRelation }) => (
  <div className="bg-zinc-900 border border-yellow-500 rounded p-6 mb-8">
    <h2 className="text-yellow-300 text-xl font-bold mb-4">Relationships</h2>
    <div className="grid gap-3">
      {character.relationships?.map((rel, index) => (
        <button
          key={`${rel.name}-${index}`}
          onClick={() => setSelectedRelation(rel)}
          className="bg-black border border-yellow-500 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition text-left"
        >
          {rel.name}
        </button>
      ))}
    </div>
  </div>
);

export default RelationshipsSection;
