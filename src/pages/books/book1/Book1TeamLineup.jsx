import React from "react";
import "./Book1TeamLineup.css";
import HeroCard from "./HeroCard";

const heroes = [
  { name: "Ajax Johnson", role: "Team Leader", image: "ajax.jpg" },
  { name: "Wesley Johnson", role: "Combat Specialist", image: "wesley.jpg" },
  { name: "Gavin Summers", role: "Co-Leader", image: "gavin.jpg" },
  { name: "Keith Powers", role: "Combat Specialist", image: "keith.jpg" },
  { name: "Jade Stone", role: "Combat Specialist", image: "jade.jpg" },
  { name: "William Hutton", role: "Team Engineer", image: "william.jpg" },
  { name: "Valeria Adair-Taylor", role: "Team Scientist", image: "valeria.jpg" },
  
];

export default function Book1TeamLineup() {
  return (
    <div className="hero-lineup-container">
      {heroes.map((hero, i) => (
        <HeroCard key={i} hero={hero} />
      ))}
    </div>
  );
}
