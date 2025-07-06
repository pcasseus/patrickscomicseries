const zoey = {
  id: "#006",
  name: "Zoey Pierce-Harris",
  slug: "zoey",
  image: "/zoey.jpg",
  class: "Beta - Alpha",
  status: "Alive",
  tagline: "",
  primaryPower: "Unlimited Energy Generation",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Female",
    height: "5'7\"",
    weight: "132 lbs",
    eyes: "Brown",
    hair: "Light Brown",
    "place of birth": "Boston, Massachusetts"
  },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 1" },
      { name: "Unlimited Energy Generation", description: "Zoey Harris is a rare energy generator—her cells naturally produce a limitless stream of internal energy. This output is not restricted to one form but manifests as a fusion of energy types. Her body functions like a self-sustaining, adaptive reactor, generating power even under duress without ever needing to recharge. However, her gift remained dormant well into adolescence. It wasn’t until a brief but pivotal encounter with Gavin Summers—whose body radiates nuclear fusion energy—that her cells were catalyzed. Gavin’s energy acted as a biological jumpstart, activating the dormant photonic chambers within her cells. Shortly thereafter, a separate interaction with Danny Foster exposed her to his neurocharged lightning, further accelerating her energy awakening. Danny’s unique, high-velocity electricity refined Zoey’s cellular ion channels, triggering the emergence of her electrokinesis. From that point on, Zoey's cells began functioning as they were meant to—producing and regulating energy in real time, adapting to external sources, and slowly unlocking her full range of powers. Over time, this internal engine evolved, seamlessly blending absorbed energy types into her system and giving her limitless adaptability, extreme endurance, and exponential growth potential.", book: "Book 1" },
      { name: "Photonic Energy Manipulation", description: "Zoey’s ability to control light energy stems from specialized organelles embedded within her cells known as light vacuoles. Originally dormant, these microscopic reactors remained inactive until her cellular engine was jumpstarted by Gavin Summers’ fusion energy. Once triggered, the light vacuoles began functioning as natural photonic generators. These organelles draw on mitochondrial energy to excite targeted molecules, releasing photons through microscopic photonic resonance chambers. By finely regulating this process, Zoey can manipulate light with extraordinary precision—shaping beams, pulses, or constructs as needed.", book: "Book 1" },
      {
        name: "Photonic Energy Projection",
        description: "Zoey’s control over light energy extends beyond manipulation into advanced projection-based offense and utility. By channeling her internal photonic output through finely tuned resonance chambers, she can emit concentrated or dispersed light in various forms—ranging from high-intensity blasts to precision beams. These emissions are not only powerful but can also serve tactical or sensory disruption purposes.",
        book: "Book 1",
        subAbilities: [
          { name: "Photon Blasts", description: "Short-range, wide-angle energy bursts designed for crowd control or concussive force. These blasts can knock enemies back, disable tech, or stagger even reinforced opponents.", book: "Book 2"},
          { name: "Photon Beams", description: "Focused, high-density streams of light energy capable of piercing armor, melting through barriers, or cutting across vast distances. These are her precision strikes—ideal for ranged offense or disabling key targets.", book: "Book 2"},
          { name: "Photon Flashing", description: "Zoey can instantaneously emit blinding flashes of light from any part of her body—primarily her hands or eyes. This ability temporarily overwhelms visual receptors, disorienting or stunning enemies in close quarters. Useful for escapes, counteattacks, or resetting momentum in battle.", book: "Book 1"},
          { name: "Photon Constructs", description: "By sustaining photon cohesion around a central shape, Zoey can form temporary constructs such as barriers, spears, platforms, or protective domes. While they are made of light, the resonance fields give them solid, usable mass and tactical functionality.", book: "Book 2"},
        ]
      },
      {
        name: "Electrical Energy Manipulation",
        description: "Zoey’s electrokinesis is rooted in specialized cellular organelles that create ion gradients during energy production. Initially inert, these structures were activated following brief exposure to Danny Foster’s neurocharged lightning—a form of high-speed electricity shaped by his hyper-accelerated nervous system. The surge interacted with Zoey’s dormant channels, triggering a second phase of her awakening: electrical control. These organelles excite surrounding molecules during photon release, generating synchronized electrical currents. The resulting electric field, layered with photonic emissions, allows Zoey to manipulate electricity with the same precision as light. She channels excess ions and voltage into usable force, weaving lightning and light into one seamless system. Her electric control is fast, fluid, and highly scalable—capable of supporting combat, propulsion, shielding, or delicate neural interfacing. As part of her self-sustaining energy loop, this ability continues to evolve the more she adapts to new electric stimuli.",
        book: "Book 1",
      },
      {
        name: "Electrical Energy Projection",
        description: "Zoey’s refined electrokinesis allows her to convert excess ionic energy and electric potential into direct, high-voltage attacks. These electric emissions are generated through the same bioenergetic system that powers her photonic abilities, with her body acting as both conductor and capacitor. By regulating the charge density and field intensity, she can emit electricity in various forms tailored to different combat needs—from concussive barrages to pinpoint streams. This power gives her unparalleled versatility in ranged offense, allowing her to overwhelm, immobilize, or destroy depending on the application.",
        book: "Book 1",
        subAbilities: [
          { name: "Electric Blasts", description: "Rapid, high-voltage discharges that strike with concussive force. These are her bread-and-butter energy strikes—ideal for mid-range combat or neutralizing heavily shielded opponents.", book: "Book 2"},
          { name: "Electric Blast Streams", description: "Continuous streams of lightning-like energy that Zoey can sweep across the battlefield. Perfect for suppressive fire, disabling enemy movements, or overwhelming multiple foes in succession.", book: "Book 2"},
          { name: "Electric Bursts", description: "Short-range, omnidirectional surges that explode from her body in a radius. These bursts fry nearby electronics, disorient enemies, and create space in close quarters. Ideal for breaking grapples or stunning groups.", book: "Book 2"},
          { name: "Electric Balls", description: "Compressed spheres of volatile charge that she can throw or launch. These orbs detonate on contact or in proximity, delivering explosive electric payloads. Can be used for ranged ambushes, traps, or delayed detonations.", book: "Book 2"},
        ]
      },
      {
        name: "Electroshield",
        description: "By channeling high-frequency electrical energy into a dense, oscillating pattern, Zoey can generate protective shields composed entirely of electricity. These barriers operate by repelling incoming matter and energy using force-field-like voltage gradients. While primarily defensive, they can also emit reactive shocks to anything that makes contact.",
        book: "Book 2",
        subAbilities: [
          { name: "Electrobarrier", description: "A reinforced wall of compressed electric charge that manifests as a curved, translucent arc around Zoey or her allies. The barrier can absorb or deflect kinetic force, energy blasts, and even blunt high-impact physical attacks. Upon contact, it lashes out with a feedback discharge, shocking attackers and destabilizing tech-based weapons. Perfect for stalling enemy advances, guarding narrow corridors, or protecting vulnerable teammates under fire.", book: "Book 2"},
        ]
      },
      {
        name: "Electrokinetic Constructs",
        description: "Zoey can shape raw electricity into semi-solid constructs by weaving electromagnetic fields into stable patterns. These constructs are powered by her internal energy generator and reinforced by precise ionic regulation, allowing them to hold form and function in both offensive and utility roles. While they appear to shimmer with volatility, each construct is fully under her control—manifesting as either tools, weapons, or restraining devices.",
        book: "Book 2",
        subAbilities: [
            {name: "Electro Whip", description: "A long, crackling filament of high-tension electricity that Zoey can lash outward with incredible speed. The whip is capable of slicing through metal, disarming enemies, or binding targets at range. Its arc can extend or retract at will, and it delivers a punishing electric jolt on impact.", book: "Book 2"},
            {name: "Electro Rope", description: "A versatile tether of stabilized electricity used for binding, grappling, or traversal. The rope can wrap around targets like a lasso, secure objects mid-air, or function as a climbing tool. It remains malleable until she wills it to stiffen, offering dynamic combat and mobility applications.", book: "Book 2"},
            {name: "Electro Bolt", description: "A dense, spear-like projectile of pure electric energy. Unlike her standard blasts, the electro bolt is shaped for precision and impact—matching the voltage and force of a natural lightning strike. Upon contact, it delivers both piercing kinetic trauma and a devastating electric payload. Ideal for disabling armored enemies or breaching energy barriers.", book: "Book 2"},
            {name: "Electro Prison", description: "", book: "Book 2"},

        ]
      },
      { name: "Electrical Sight", description: "Zoey’s specialized vision grants her the ability to perceive electrical currents and bioelectric signals with pinpoint clarity. This evolved sensory ability is a direct offshoot of her adaptive energy system, allowing her to read power flow as easily as others read movement or light. She can instantly assess both machines and living organisms—identifying electrical malfunctions, short circuits, or failing components within tech, as well as spotting irregular neural activity, muscle stimulation, or cardiac rhythm in humans. From diagnosing battlefield injuries to pinpointing weak points in enemy hardware, her electrical sight enhances both her combat precision and her role as a tactical medic or technician. Whether spotting a hidden bomb by its activation current or gauging someone’s vitals by their nervous system activity, Zoey sees the battlefield through a lens of power and pulse.", book: "Book 1" },
      {
        name: "Universal Energy Absorption",
        description: "Zoey’s body isn’t just a generator—it’s an adaptive energy system. Once her cellular engine was jumpstarted, her biology began absorbing and integrating external energy sources to supplement and evolve her core output. Whether it’s ambient electricity, solar radiation, or other exotic energy fields, Zoey’s body doesn’t merely store it—she learns from it. This absorption process enhances her cellular functions, expands her energy repertoire, and helps her unlock entirely new applications. Every encounter with a new energy type becomes an opportunity for biological evolution, feeding directly into her self-sustaining loop.",
        book: "Book 2",
        subAbilities: [
          { name: "Free Energy Usage", description: "Zoey’s cells are engineered to adapt to any absorbed energy, she eventually gains the ability to manipulate those forms directly. What starts as passive absorption can evolve into active control. Each new energy source—whether natural, artificial, or alien—broadens her capabilities, granting her near-limitless potential as she masters increasingly rare and complex energy types.", book: "Book 2"},
        ]
      },

      {
        name: "Technopathy",
        description: "Zoey’s evolving energy-based biology allows her to interface with and manipulate technology at an instinctual level. As her internal systems began harmonizing with both electrical and photonic frequencies, her brain developed the capacity to communicate with digital systems—not just interpret them. This makes her a living conduit between organic intelligence and synthetic networks. Her technopathic abilities are scalable, intuitive, and enhanced further by her ability to absorb and adapt to new forms of energy—enabling her to interface with technologies beyond Earth’s design.",
        book: "Book 2",
        subAbilities: [
          { name: "Digital Manipulation", description: "Zoey can control computers, smartphones, and security networks, retrieving information or shutting them down at will.", book: "Book 2"},
          { name: "Technological Communication", description: "By mentally speaking to devices through bioelectric signals and encoded pulses, Zoey can gather data or issue commands wirelessly. Her power is so refined she can even access alien operating systems, regardless of language, logic tree, or encryption standard.", book: "Book 2"},
          { name: "Techno-Sensory Perception", description: "Zoey sees and hears through cameras, microphones, and similar equipment as if physically present, making her invaluable for surveillance or remote recon.", book: "Book 2"},
          { name: "Cybersecurity Expertise", description: "Zoey deftly navigates encryption and digital defenses, bypassing firewalls and dismantling malicious systems with fluid ease.", book: "Book 2"},
          { name: "Remote Hacking", description: "Zoey can infiltrate distant electronics without physical contact, exploiting frequencies or wireless signals to execute deep system control from afar.", book: "Book 2"},
        ]
      },
      { name: "Electromagnetic Perception", description: "As Zoey’s energy systems matured, her brain developed the capacity to passively interpret electromagnetic phenomena across a wide spectrum. This perception is a direct result of her photonic and electrical resonance chambers becoming finely tuned to their environment. It allows her to detect, map, and respond to energy signatures at a near-instinctual level. She can identify cloaked devices, trace power sources, and sense bioelectric signals in living beings. Her perception extends beyond sight and sound—giving her a spatial awareness of technological fluctuations, digital emissions, and field distortions in real time. This heightened electromagnetic sensitivity gives her a substantial tactical edge, whether scanning for threats, locating hidden enemies, or navigating complex environments saturated with interference—terrestrial or alien.", book: "Book 2" },
      { name: "Accelerated Healing Factor", description: "Zoey’s cellular regeneration is driven by her internal energy generation system, particularly the bioelectric currents that course through her body. Once her energy engine was fully awakened, these currents began fueling a powerful self-repair mechanism—stimulating rapid tissue regeneration, organ recovery, and cellular renewal at superhuman speeds. Her body uses its own photonic and bioelectric outputs to repair damage efficiently, closing wounds in seconds and mending internal trauma with minimal downtime. This regenerative capability not only makes her extremely difficult to incapacitate, but also slows her biological aging. Her healing factor is a passive function of her self-sustaining energy cycle, meaning it never depletes her strength—allowing her to recover mid-battle without compromising performance. Over time, this may grant her an extended or potentially indefinite lifespan.", book: "Book 2" },

      {
        name: "Pure Energy Form",
        description: "After being pushed beyond her breaking point in a battle to the death against her brother, Axel Pierce, Zoey’s physical body was destroyed. But death didn’t end her story—it remade her. Using his fusion energy, Gavin Summers reconstituted Zoey’s scattered energy signature on the physical plane, jumpstarting a transformation that unlocked her most powerful state: her Pure Energy Form. This form is not simply a power boost—it’s a biological failsafe. When Zoey’s internal energy generation exceeds what her physical body can contain or release, her human form dissolves into pure energy. In this state, she becomes an untouchable force of living photonic and electrical resonance—no longer bound by conventional physics, injury, or exhaustion. She exists as a radiant silhouette of energy—incapable of being struck, slowed, or extinguished through normal means.",
        book: "Book 2",
        subAbilities: [
          { name: "Immense Damage Output", description: "Her attack power surges exponentially, with every beam, blast, or strike amplified far beyond her baseline. This output rivals high-tier energy weapons and can shatter defenses with ease.", book: "Book 2"},
          { name: "Limitless Core", description: "There is no ceiling to her energy reserve in this form. She draws from the raw essence of her core, allowing her to generate and release energy without fatigue, limits, or downtime.", book: "Book 2"},
          { name: "Intangible Vessel", description: "Her body in this state is incorporeal—untouchable by matter, immune to physical harm, and able to phase through terrain, attacks, or structures.", book: "Book 2"},
          { name: "Post-Mortal Resilience", description: "As pure energy, Zoey cannot be killed by conventional means. Even if dispersed or overloaded, she can reassemble herself over time or with the aid of an external catalyst like Gavin’s fusion field. Her death becomes a reset—not an end.", book: "Book 2"},
        ]
      },
    ],
      weaknesses: [
      {
        name: "Power Limit",
        description: "Wesley can only generate so much vibration before overloading."
      },
      {
        name: "Strain Under Overwhelming Force",
        description: "He cannot absorb impacts above planetary scale."
      }
    ],
    relationships: [
      {
        name: "Azazel Pierce",
        role: "Father",
        status: "Alive",
        link: "/characters/axel",
        image: "/axel.jpg"
      },
      {
        name: "Jade Stone",
        role: "Mentor - Teammate",
        status: "Alive",
        link: "/characters/jade",
        image: "/jade.jpg"
      },
      {
        name: "Danny Foster",
        role: "Bestfriend",
        status: "Alive",
        link: "/characters/danny",
        image: "/danny.jpg"
      },
      {
        name: "Cleo Moreau",
        role: "Mom",
        status: "Alive",
        link: "/characters/cleo",
        image: "/cleo.jpg"
      },
      {
        name: "",
        role: "",
        status: "",
        link: "",
        image: ""
      }
    ],
    uniforms: [
      {
        name: "Zoey’s War Suit",
        description: ""
      }
    ],
    tools: [
      {
        name: "",
        description: ""
      }
    ]
  };

export default zoey;
