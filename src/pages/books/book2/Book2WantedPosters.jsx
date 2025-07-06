import React from "react";
import "./Book2WantedPosters.css";
import WantedCard from "./WantedCard";

const targets = [
  {
    name: "Wesley Johnson",
    image: "/wesley.jpg",
    alias: "Ryctor",
    status: "ACTIVE",
    crimes: [
      "Terrorism",
      "Unauthorized Power Use",
      "Destruction of Government Property",
      "Assault on Officers",
      "Escape from Detainment",
      "Harboring Deviants",
      "Interdimensional Interference",
    ],
    threat: "MAXIMUM",
    glitch: false,
  },
  {
    name: "Zoey Harris",
    image: "/zoey.jpg",
    alias: "Unknown",
    status: "AT LARGE",
    crimes: [
      "Accomplice to Federal Crimes",
      "Assault on Officers",
      "Evading Pursuit",
      "Sabotage of Energy Grid",
    ],
    threat: "UNSCALABLE",
    glitch: false,
  },
  {
    name: "Logan Summers",
    image: "/logan.jpg",
    alias: "Unknown",
    status: "UNCONFIRMED",
    crimes: [
      "Accomplice to Federal Crimes",
      "Assault on Officers",
      "Evading Pursuit",
      "Use of Unregistered Powers",
    ],
    threat: "MAXIMUM",
    glitch: true,
  },
];

export default function Book2WantedPosters() {
  return (
    <div className="grid-container">
      {targets.map((target, i) => (
        <WantedCard key={i} target={target} index={i} />
      ))}
    </div>
  );
}
