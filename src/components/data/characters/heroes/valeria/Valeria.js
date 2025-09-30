import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./valeriauniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";

const abilities = [...abilities1];

const valeria = {
  id: "#006",
  name: "Valeria Adair-Taylor",
  image: "/valeria.jpg",
  class: "Human Class",
  status: "Active",
  primaryPower: "Genius-Level Intellect",
  stats,
  bio,
  abilities,
  weaknesses,
  relationships,
  uniforms,
  tools,
  feats,
};

export default valeria;
