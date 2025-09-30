import React, { useEffect, useRef, useState } from "react";
import "./Broadcast.css";
import ComingSoon from "./ComingSoon";

export default function Broadcast() {
  const canvasRef = useRef(null);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const letters = "01";
    const fontSize = 16;
    let columns, drops;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }

    resizeCanvas();

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,255,0,0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(drawMatrix);
    }

    window.addEventListener("resize", resizeCanvas);
    drawMatrix();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/pcasseus/patrickscomicseries/commits")
      .then((res) => res.json())
      .then((data) => setCommits(data.slice(0, 5)))
      .catch((err) => console.error("GitHub fetch failed:", err));
  }, []);

  return (
    <div className="broadcast-root">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <div className="overlay"></div>
      <div className="terminal-container">
        <div className="terminal panel">
          <div className="header">
            <h1>UPDATES PUSHED</h1>
            <p>Latest commits from the repository feed.</p>
          </div>
          <div className="updates-list">
            {commits.length === 0 ? (
              <p className="loading">Loading commit data...</p>
            ) : (
              commits.map((commit, idx) => (
                <div key={idx} className="commit-entry">
                  <p className="commit-message">{commit.commit.message}</p>
                  <p className="commit-meta">
                    {new Date(commit.commit.author.date).toLocaleString()} ·{" "}
                    <a
                      href={commit.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View →
                    </a>
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="view-more">
            <a
              href="https://github.com/pcasseus/patrickscomicseries/commits/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub →
            </a>
          </div>
        </div>

        <div className="terminal panel">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}
