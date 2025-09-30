import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const ITEMS_PER_PAGE = 9; 

const RelationshipsSection = ({ character }) => {
  const family = (character.relationships || []).filter((rel) =>
    rel.role.includes('Father') ||
    rel.role.includes('Adopted Father') ||
    rel.role.includes('Mother') ||
    rel.role.includes('Adopted Mother') ||
    rel.role.includes('Brother') ||
    rel.role.includes('Sister') ||
    rel.role.includes('Bestfriend') ||
    rel.role.includes('Close Friend') ||
    rel.role.includes('Uncle') ||
    rel.role.includes('Aunt') ||
    rel.role.includes('Girlfriend') ||
    rel.role.includes('Boyfriend') ||
    rel.role.includes('Husband') ||
    rel.role.includes('Wife')
  );

  const [page, setPage] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const totalPages = Math.ceil(family.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const currentPageItems = family.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div
      className="bg-zinc-900 border border-yellow-500 rounded p-6 mb-12 relative"
      style={{
        backgroundImage: `
          linear-gradient(#00ffff11 1px, transparent 1px),
          linear-gradient(to right, #00ffff11 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <h2 className="text-yellow-300 text-xl font-bold text-center mb-8 tracking-widest uppercase">
        Family
      </h2>

      {family.length === 0 ? (
        <div className="text-yellow-400 font-mono text-sm uppercase tracking-widest border border-yellow-700 p-4 rounded bg-black shadow-inner shadow-yellow-900 text-center">
          No known family data on file.
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPageItems.map((relation, index) => (
              <div
                key={index}
                className="bg-black/80 border border-yellow-600 hover:border-yellow-400 transition rounded-xl shadow-md shadow-yellow-500/10 flex flex-col items-center text-center p-4 hover:bg-yellow-900/5"
              >
                {/* Image (click to enlarge) */}
                <img
                  src={relation.image}
                  alt={relation.name}
                  onClick={() => setEnlargedImage(relation.image)}
                  className="w-24 h-24 rounded-full border-2 border-yellow-500 object-cover shadow mb-3 cursor-pointer hover:scale-105 transition"
                />

                {/* Info */}
                <span className="text-yellow-200 font-bold text-lg">
                  {relation.name}
                </span>
                <span className="text-yellow-400 italic text-sm mb-3">
                  {relation.role}
                </span>

                {/* Profile Arrow (only if valid link) */}
                {relation.link && relation.link.trim() !== "" && (
                  <a
                    href={relation.link}
                    className="flex items-center gap-1 text-yellow-300 text-xs uppercase font-mono border border-yellow-500 px-2 py-1 rounded hover:bg-yellow-500 hover:text-black transition"
                  >
                    View <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                className={`px-3 py-1 text-xs font-mono uppercase border rounded ${
                  page === 0
                    ? "text-gray-600 border-gray-700 cursor-not-allowed"
                    : "text-yellow-300 border-yellow-500 hover:bg-yellow-800"
                }`}
              >
                ◀ Prev
              </button>
              <span className="text-yellow-400 font-mono text-sm">
                Page {page + 1} of {totalPages}
              </span>
              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
                disabled={page === totalPages - 1}
                className={`px-3 py-1 text-xs font-mono uppercase border rounded ${
                  page === totalPages - 1
                    ? "text-gray-600 border-gray-700 cursor-not-allowed"
                    : "text-yellow-300 border-yellow-500 hover:bg-yellow-800"
                }`}
              >
                Next ▶
              </button>
            </div>
          )}
        </>
      )}

      {/* Image Lightbox Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-8 right-0 text-yellow-400 hover:text-yellow-200"
            >
              <X size={28} />
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged portrait"
              className="max-h-[80vh] max-w-[80vw] rounded-lg border-2 border-yellow-500 shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RelationshipsSection;
