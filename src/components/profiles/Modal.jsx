import React, { useState } from 'react';

const Modal = ({
  title,
  children,
  onClose,
  tabbed = false,
  baseContent,
  evolvedContent,
  selectedBooks = [] 
}) => {
  const [activeTab, setActiveTab] = useState('base');

  const isLocked = (bookList) => {
    if (!bookList || !Array.isArray(bookList)) return false;
    return !bookList.some((b) => selectedBooks.includes(b));
  };

  const renderTabs = () => {
    const tabs = [{ id: 'base', label: 'Base Form' }];

    if (Array.isArray(evolvedContent)) {
      evolvedContent.forEach((entry, idx) => {
        const books = entry?.books || [];
        const locked = isLocked(books);
        tabs.push({
          id: `evolved-${idx}`,
          label: `${entry?.title?.trim() || `Evolved ${idx + 1}`}${locked ? ' 🔒' : ''}`
        });
      });
    } else if (evolvedContent) {
      const books = evolvedContent?.books || [];
      const locked = isLocked(books);
      tabs.push({
        id: 'evolved',
        label: `${evolvedContent?.title?.trim() || 'Evolved Form'}${locked ? ' 🔒' : ''}`
      });
    }

    return (
      <div className="flex gap-4 mb-4 text-sm sm:text-base flex-wrap">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={`px-4 py-1 rounded border transition-all duration-200 ${
              activeTab === id
                ? 'bg-yellow-500 text-black border-yellow-400'
                : 'bg-black text-yellow-300 border-yellow-700 hover:border-yellow-500 hover:text-yellow-200'
            }`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (!tabbed) return children;

    if (activeTab === 'base') return baseContent;

    if (Array.isArray(evolvedContent)) {
      const idx = parseInt(activeTab.split('-')[1], 10);
      const content = evolvedContent[idx];
      const locked = isLocked(content?.books);
      return locked ? (
        <p className="text-yellow-500 italic">
          🔒 This evolution is locked. Activate Book {content?.books?.join(', ') || '?'} to view it.
        </p>
      ) : (
        <>
          <p className="mb-2">{content?.description}</p>
          {content?.book && (
            <p className="text-sm text-yellow-300">
              Evolves In: <strong>{content.book}</strong>
            </p>
          )}
        </>
      );
    }

    const locked = isLocked(evolvedContent?.books);
    return locked ? (
      <p className="text-yellow-500 italic">
        🔒 This evolution is locked. Activate Book {evolvedContent?.books?.join(', ') || '?'} to view it.
      </p>
    ) : (
      <>
        <p className="mb-2">{evolvedContent?.description}</p>
        {evolvedContent?.book && (
          <p className="text-sm text-yellow-300">
            Evolves In: <strong>{evolvedContent.book}</strong>
          </p>
        )}
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] px-4 sm:px-6 animate-fade-in">
      <div className="bg-zinc-900 border border-lime-400 shadow-2xl rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative text-white font-mono tracking-wide leading-relaxed scrollbar-thin scrollbar-thumb-lime-400 scrollbar-track-transparent">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-lime-300 hover:text-lime-200 text-xl sm:text-2xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 mb-4 uppercase tracking-widest">
          {title}
        </h2>

        {tabbed && renderTabs()}

        <div className="text-sm sm:text-base whitespace-pre-line">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
