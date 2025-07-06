import React, { useRef, useEffect } from "react";
import "./UpdateLog.css";
import { mockLogs } from "./logs";

export default function UpdateLog() {
  const logRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (logRef.current) logRef.current.scrollTop += 1;
    }, 50);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="terminal left">
      <div className="header">
        <h1>📡 UPDATES PUSHED TO THE WEBSITE</h1>
        <p>Secure relay access granted. Logging all universe-wide transmissions.</p>
      </div>
      <div className="log-window" ref={logRef}>
        {mockLogs.map((log, idx) => (
          <div className="log-line" key={idx}>
            <span className="timestamp">{log.timestamp}</span>
            <span className="type">{log.type}</span>
            <div className="message">{log.message}</div>
          </div>
        ))}
        <div className="blinker"> Awaiting next input...</div>
      </div>
    </div>
  );
}
