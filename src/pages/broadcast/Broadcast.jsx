import React, { useEffect, useRef } from "react";
import "./Broadcast.css";
import UpdateLog from "./UpdateLog";
import ComingSoon from "./ComingSoon";

export default function Broadcast() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const letters = "01";
    const fontSize = 14;
    let columns, drops;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }

    resizeCanvas();

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
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

  return (
    <div className="broadcast-root">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <div className="terminal-container">
        <UpdateLog />
        <ComingSoon />
      </div>
    </div>
  );
}
