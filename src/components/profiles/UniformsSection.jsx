import React, { useState } from "react";
import { X } from "lucide-react";
import ToolsSection from "./ToolsSection";

const UniformsSection = ({ character, setSelectedItem }) => {
  const uniforms = character.uniforms || [];
  const [activeUniformIndex, setActiveUniformIndex] = useState(0);
  const [isBackView, setIsBackView] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

  const currentUniform = uniforms[activeUniformIndex];

  const handlePrevUniform = () => {
    setActiveUniformIndex((prev) =>
      prev === 0 ? uniforms.length - 1 : prev - 1
    );
    setIsBackView(false);
  };

  const handleNextUniform = () => {
    setActiveUniformIndex((prev) => (prev + 1) % uniforms.length);
    setIsBackView(false);
  };

  const handleToggleView = () => {
    setIsBackView((prev) => !prev);
  };

  return (
    <div
      className="bg-zinc-900 border border-yellow-500 rounded p-6 text-center mb-8 relative"
      style={{
        backgroundImage: `
          linear-gradient(#00ffff11 1px, transparent 1px),
          linear-gradient(to right, #00ffff11 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <h2 className="text-yellow-300 text-xl font-bold mb-4">Uniforms</h2>

      {/* Suit Viewer & Description Wrapper */}
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center relative opacity-100">
        {/* Suit Viewer */}
        <div className="bg-black border border-yellow-500 rounded p-4 shadow-xl w-full md:w-1/2 relative pt-10">
          {/* Attached Uniform Tabs */}
          <div className="absolute top-0 left-0 w-full flex justify-center gap-2 translate-y-[-50%]">
            {uniforms.length > 0 &&
              uniforms.map((uniform, index) => (
                <button
                  key={uniform.id}
                  onClick={() => {
                    setActiveUniformIndex(index);
                    setIsBackView(false);
                  }}
                  className={`px-3 py-1 text-sm font-mono uppercase border border-yellow-500 rounded-t-md ${
                    index === activeUniformIndex
                      ? "bg-yellow-500 text-black font-bold border-b-transparent"
                      : "text-yellow-300 bg-zinc-900 hover:bg-yellow-800"
                  }`}
                >
                  {uniform.name}
                </button>
              ))}
          </div>

          {/* Suit Image */}
          <div
            className="relative p-4 rounded overflow-hidden mt-2 cursor-pointer"
            style={{
              backgroundColor: "#000",
              backgroundImage: `
                linear-gradient(#00ffff11 1px, transparent 1px),
                linear-gradient(to right, #00ffff11 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
              border: "1px solid #00ffff44",
              minHeight: "200px",
            }}
            onClick={() => uniforms.length > 0 && setEnlarged(true)}
          >
            {uniforms.length > 0 ? (
              <>
                <img
                  src={currentUniform.images?.[isBackView ? 1 : 0]}
                  alt={`${currentUniform.name} ${
                    isBackView ? "Back" : "Front"
                  }`}
                  className="h-64 mx-auto object-contain transition duration-300 ease-in-out"
                />
                <div className="text-green-400 mt-2 text-xs uppercase tracking-wide font-mono">
                  {currentUniform.label}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-yellow-400 font-mono uppercase">
                  NO CURRENT SUITS
                </span>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          {uniforms.length > 0 && (
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handlePrevUniform}
                className="text-green-300 hover:text-green-500"
              >
                ◀ Prev
              </button>
              <button
                onClick={handleToggleView}
                className="text-cyan-300 hover:text-cyan-100 underline"
              >
                {isBackView ? "Show Front" : "Show Back"}
              </button>
              <button
                onClick={handleNextUniform}
                className="text-green-300 hover:text-green-500"
              >
                Next ▶
              </button>
            </div>
          )}
        </div>

        {/* Suit Description */}
        <div
          className="bg-black border border-yellow-500 rounded p-4 shadow-xl w-full md:w-1/2 text-left overflow-y-auto"
          style={{
            backgroundImage: `
              linear-gradient(#00ffff11 1px, transparent 1px),
              linear-gradient(to right, #00ffff11 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            border: "1px solid #00ffff44",
            minHeight: "200px",
            maxHeight: "500px", // allow scroll
          }}
        >
          {uniforms.length > 0 ? (
            <div>
              <h3 className="text-yellow-300 text-lg font-bold mb-2 font-mono uppercase">
                {currentUniform.name}
              </h3>
              <p className="text-yellow-100 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                {currentUniform.description}
              </p>
            </div>
          ) : (
            <span className="text-yellow-400 font-mono uppercase">
              NO CURRENT SUITS
            </span>
          )}
        </div>
      </div>

      {/* Linked Tools Section */}
      <ToolsSection character={character} setSelectedItem={setSelectedItem} />

      {/* Enlarged Modal */}
      {enlarged && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-black border border-yellow-500 rounded-lg p-6 max-w-3xl w-full">
            <button
              onClick={() => setEnlarged(false)}
              className="absolute -top-10 right-0 text-yellow-400 hover:text-yellow-200"
            >
              <X size={32} />
            </button>
            <img
              src={currentUniform.images?.[isBackView ? 1 : 0]}
              alt={`${currentUniform.name} ${
                isBackView ? "Back" : "Front"
              } enlarged`}
              className="max-h-[70vh] mx-auto object-contain"
            />
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={handlePrevUniform}
                className="text-green-300 hover:text-green-500"
              >
                ◀ Prev
              </button>
              <button
                onClick={handleToggleView}
                className="text-cyan-300 hover:text-cyan-100 underline"
              >
                {isBackView ? "Show Front" : "Show Back"}
              </button>
              <button
                onClick={handleNextUniform}
                className="text-green-300 hover:text-green-500"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniformsSection;
