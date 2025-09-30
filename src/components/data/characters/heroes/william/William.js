import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./williamuniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";

const abilities = [...abilities1];

const william = {
  id: "#008",
  name: "Valeria Adair-Taylor",
  image: "/william.jpg",
  class: "Human Class",
  status: "Active",
  primaryPower: "Omni-Technical Intellect",
  stats,
  bio,
  abilities,
  weaknesses,
  relationships,
  uniforms,
  tools,
  feats,
};

export default william;
