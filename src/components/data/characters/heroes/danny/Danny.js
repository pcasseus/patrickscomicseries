import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./dannyuniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";
import abilities2 from "./abilities2.js";
import abilities3 from "./abilities3.js";

const abilities = [...abilities1, ...abilities2, ...abilities3];

const danny = {
  id: "#005",
  name: "Danny Foster",
  image: "/danny.jpg",
  class: "Beta Class Deviant",
  status: "Active",
  primaryPower: "Cognitive Hyperacceleration",
  stats,
  bio,
  abilities,
  weaknesses,
  relationships,
  uniforms,
  tools,
  feats,
};

export default danny;
