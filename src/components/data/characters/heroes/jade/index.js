import stats from './stats/stats';
import abilities1 from './abilities/abilities1';
import abilities2 from './abilities/abilities2';
import abilities3 from './abilities/abilities3';
import abilities4 from './abilities/abilities4';
import abilities5 from './abilities/abilities5';
import abilities6 from './abilities/abilities6';
import abilities7 from './abilities/abilities7';
import weaknesses from './weaknesses/weaknesses';
import relationships from './relationships/relationships';
import uniforms from './uniforms/jadeuniforms';
import tools from './tools/tools';
import bio from './bio/bio';

const jade = {
  id: "#003",
  name: "Jade Stone",
  slug: "jade",
  image: "/jade.jpg",
  class: "Beta Class Deviant",
  status: "Active",
  primaryPower: "Frost Genesis",
  stats,
  bio,
  abilities: [...abilities1, ...abilities2, ...abilities3, ...abilities4, ...abilities5, ...abilities6, ...abilities7],
  weaknesses,
  relationships,
  uniforms,
  tools,
};

export default jade;
