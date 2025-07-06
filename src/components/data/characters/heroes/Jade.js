const jade = {
  id: "#003",
  name: "Jade Stone",
  slug: "jade",
  image: "/jade.jpg",
  class: "Beta",
  status: "Alive",
  tagline: "",
  primaryPower: "Frost Genesis",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Female",
    height: "5'7\"",
    weight: "140 lbs",
    eyes: "Blue",
    hair: "Black & White",
    "place of birth": "Chicago"
  },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 1" },
      { name: "Frost Genesis", description: "Jade is the only known hybrid Deviant to manifest genefrost — a volatile sub-zero crystalline energy born from a rare mutation in her Deviant physiology. Her cold doesn’t stem from the environment or thermodynamics; it originates from a cryogenic gland behind her heart, a compact core that slowly produces and regulates genefrost through her nervous system and limbs. Her abilities first awakened unexpectedly during a dance recital. What she assumed was a case of chills or stage fright turned out to be her power manifesting — as she danced across the stage in her solo performance, the floor beneath her crystallized into frost, freezing solid in front of a stunned audience. It was the beginning of a life permanently shaped by the cold. As a result of this rare mutation, certain aspects of her physical appearance have also adapted. Strands of her jet-black hair have turned a stark, ice-white, and her irises glow with an unnaturally vivid, arctic blue.", book: "Book 1" },
      {
        name: "Genefrost Projection",
        description: "Jade can project condensed genefrost energy from her palms in various forms, ranging from sharp bursts to continuous streams. These manifestations are the most direct expression of her cryogenic core’s output, allowing her to strike, suppress, or reshape the battlefield at range. Depending on the form used, her projections can either blast enemies back or freeze them solid on impact.",
        book: "Book 1",
        subAbilities: [
          { name: "Genefrost Blasts", description: "Jade can fire sharp, high-velocity projectiles exclusively from her palms. These blasts vary in effect depending on the target — in some cases, they violently push opponents away with kinetic force; in others, they freeze the impact zone, encasing targets in crystalline frost. The resulting shards shatter on contact, spreading cold fractals across surfaces or armor.", book: "Book 1"},
          { name: "Genefrost Blast Stream", description: "Jade can sustain her palm-fire into a focused stream of genefrost energy. This continuous projection exerts high-pressure force, ideal for pinning enemies, carving through terrain, or applying enhanced freezing to larger or more durable foes. However, the stream drains her cryogenic core more quickly and is typically reserved for high-pressure or defensive scenarios.", book: "Book 1"},
        ]
      },
      {
        name: "Genefrost",
        description: "Jade weaves weapons or tools mid-motion using genefrost energy. She doesn’t summon them chaotically — each construct is shaped with dancer-like precision, often formed as a natural extension of her attacks, counters, or evasive maneuvers. These weapons are crystalline, cold-hardened, and visually intricate, often glowing faintly with sub-zero energy patterns.",
        book: "Book 1",
        subAbilities: [
          { name: "Ice Dagger", description: "A short, lightweight genefrost blade ideal for close-quarters combat or surprise strikes. Jade can dual-wield these and throw them with pinpoint accuracy.", book: "Book 1"},
          { name: "Ice Discs", description: "Razor-sharp throwing discs formed from spinning genefrost energy. These are aerodynamic and can ricochet off surfaces or split mid-air into multiple projectiles.", book: "Book 1"},
          { name: "Icicles", description: "Slender, high-speed shards launched like javelins or spikes. Used for sniping or pinning enemies in place from a distance.", book: "Book 1"},
          { name: "Ice Bo Staff", description: "A long, reinforced genefrost staff that Jade uses for defensive maneuvers, wide-range sweeps, and counterattacks. Often paired with acrobatic movements and spins.", book: "Book 1"},
          { name: "Ice Gauntlets", description: "Crystalized hand and forearm armor that enhances her strikes and blocks. They can form around her fists mid-combo or be used to parry heavy blows.", book: "Book 2"},
          { name: "Ice Prison", description: "A large-scale construct used to trap or immobilize enemies. Forms rapidly around a target in a jagged cage-like formation of genefrost, locking them in place with growing sub-zero pressure.", book: "Book 1"},
        ]
      },
      {
        name: "Glacial Motion",
        description: "Jade's movement is powered by a unique blend of genefrost energy control and disciplined body mechanics, allowing her to travel, evade, and attack with fluid grace. Whether grounded or airborne, her traversal abilities are a direct extension of her dance training, enabling her to move across any terrain with style and precision.",
        book: "Book 1",
        subAbilities: [
          { name: "Glacial Skating", description: "Jade can gracefully skate across any surface by channeling genefrost through her soles, causing ice to form beneath her feet as she moves. She glides effortlessly along walls, water, and uneven terrain, blending acrobatic spins, flips, and sweeps into combat. Her skating trail leaves behind razor-sharp frost, which can be used to trip pursuers or carve frozen patterns into the battlefield.", book: "Book 1"},
          { name: "Glacial Surfing", description: "By channeling genefrost through her palms, Jade can generate long-range, high-speed ice paths beneath her feet — allowing her to ride through the air on narrow ice streams. She guides the stream by extending one or both arms, using her exceptional balance and core strength to stay steady even while dodging, weaving, or transitioning between elevations. This allows her to bridge distances, surf over terrain, or escape threats in style.", book: "Book 2"},
        ]
      },
      {
        name: "Genefrost Projectile Deflection",
        description: "Jade can form a compact genefrost layer around her hands or forearms, creating a subtle but highly effective barrier against incoming attacks. Rather than blocking or redirecting force outright, the frost captures bullets or energy blasts in micro-crystalline lattices that instantly shatter on contact, dispersing the impact harmlessly. This ability relies on timing, form, and sharp awareness, and is typically used in close-quarters situations or when she’s maintaining mobility. Jade’s dancer-like reflexes allow her to angle and shape the shield in brief bursts mid-motion.",
        book: "Book 1",
        subAbilities: [
          { name: "Genefrost Shield", description: "Jade can deploy a temporary arcing wall of hardened genefrost in front of her — either by stomping the ground to raise it upward from the floor, or releasing a short-range burst that arcs forward and curves inward into a concave shape. The shield forms in a split second and holds for a brief moment before fracturing outward like shattering glass.", book: "Book 1"},
        ]
      },
      {
        name: "Frost Regeneration",
        description: "Jade can channel genefrost into her own body to patch wounds, temporarily replacing damaged flesh with translucent crystal. The process is painful and slow under stress, but highly effective when she remains calm and focused. The crystalline covering acts as a protective seal until her natural tissues regenerate beneath it.",
        book: "Book 1",
      },
      { name: "Frost Clap", description: "Jade slams her hands together, releasing a wide, concussive shockwave of genefrost. The sudden pressure drop generates a ring of freezing air that knocks enemies off their feet and spreads a rim of frost across the surrounding terrain. The impact also unleashes a powerful gust of chilled wind, capable of disrupting vision, snuffing out flames, or halting airborne projectiles.", book: "Book 1" },
      {
        name: "Frost Breath",
        description: "A sweeping exhale of concentrated genefrost energy that pushes enemies back, disrupts their footing, or flash-freezes a wide zone in front of Jade. The breath radiates outward in a cone, and its effect varies based on intensity — ranging from concussive wind to a thin layer of sub-zero ice coating the ground or walls.",
        book: "Book 2",
        subAbilities: [
          { name: "Frost Breath Mist", description: "Jade can adjust the exhale into a thick, freezing mist that lingers in the air and obscures vision in enclosed spaces or open areas. This mist not only reduces visibility for enemies but also makes the environment slick, slowing movement and adding a strategic edge during escape, ambush, or misdirection. ", book: "Book 2"},
        ]
      },
      { name: "Frost Stomp", description: "Jade stomps the ground, releasing a localized frost quake. Ice fractures burst outward in a radial pattern, freezing enemies’ feet in place or destabilizing terrain.", book: "Book 1" },
      { name: "Frost Touch", description: "By making direct contact with a surface or opponent, Jade can channel genefrost into an object or person, instantly freezing what she touches. Used for disarming weapons, immobilizing limbs, or turning terrain into slick, hazardous zones.", book: "Book 1" },
      { name: "Frost Absorption", description: "In moments of calm, Jade can reclaim lingering genefrost particles she’s previously emitted — drawing energy back into her cryogenic core to slightly reduce fatigue or accelerate healing.", book: "Book 1" },
      { name: "Frost Intangibility", description: "Jade can phase through structures composed of genefrost or natural ice, allowing her to move through walls, barriers, or constructs she or others have frozen — as if gliding through fog. This isn’t true phasing; her molecules are not breaking down. Instead, she temporarily syncs with the molecular vibration of frozen matter, slipping through it like a ghost in slow motion.", book: "Book 2" },
      { name: "Frost Telekinesis", description: "Jade can manipulate any object containing or infused with ice by remotely controlling the genefrost within it. This gives her the ability to: pull thrown ice weapons back to her, guide icicles or shards mid-flight, and rearrange ice pillars, traps, or cages on the fly.", book: "Book 1" },
      { name: "Ice Clones", description: "Jade manifests one or two temporary copies — slightly translucent, sharp-edged, and semi-autonomous. They echo her movements and confuse opponents but crack apart if hit hard.", book: "Book 1" },
      { name: "Phase-Step Teleportation", description: "By syncing her heart rate and freezing her molecular vibration, Jade vanishes in a sudden burst of genefrost, leaving behind a swirl of tiny snowflakes. She then reappears a short distance away in another delicate flurry — her body reforming through suspended frost particles in the air.", book: "Book 1" },
      { name: "Cold Immunity & Regulation", description: "Jade’s cryogenic core keeps her internal temperature perfectly balanced, granting her complete immunity to environmental cold. She feels no discomfort in subzero conditions and can survive in climates that would freeze a normal human solid.", book: "Book 1" },
      { name: "Genefrost Ice Form", description: "By fully activating her cryogenic core, Jade encases her entire body in a layer of living genefrost — a semi-translucent crystalline armor that enhances her durability and physical resilience. In this state, her form becomes sleek, glasslike, and nearly impervious to physical strikes, absorbing impacts through layered frost compression.", book: "Book 2" },
      {
        name: "Expert Hand-to-Hand Combatant",
        description: "Jade’s combat training stems from the standardized yet intense regimen taught by S.T.A.T.I.C., designed to prepare operatives for high-stakes encounters against Deviants and other enhanced threats. While her foundation includes the expected disciplines — grappling, close-quarters defense, and weapon handling — what sets her apart is the way she’s adapted these techniques through the lens of her dance training. Her fighting style is a unique fusion of fluid movement, rotational momentum, and body control, allowing her to move with grace and unpredictability. Every strike, dodge, or block is executed with the elegance of choreography and the precision of a trained killer.",
        book: "Book 1",
        subAbilities: [
          { name: "Flow-Based Combat Style", description: "Jade’s strikes are less about brute force and more about rhythm, timing, and redirection. She weaves between opponents, chaining dodges and attacks in a pattern that resembles movement art more than traditional martial arts.", book: "Book 1"},
          { name: "Kinetic Redirection", description: "Rather than stopping attacks head-on, she uses an opponent’s momentum against them — deflecting, guiding, or spinning out of reach with dancer-like precision.", book: "Book 1"},
          { name: "Ambidextrous Dual-Wielding", description: "When using genefrost constructs in both hands, Jade fights fluidly with symmetrical or mirrored forms, attacking from alternating angles to disorient foes.", book: "Book 1"},
          { name: "Combat Awareness & Composure", description: "Her background in performance makes her adept at reading body language and maintaining absolute composure under pressure, enabling clear reaction timing and mental clarity even during chaotic engagements.", book: "Book 1"},
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
        name: "Gavin Summers",
        role: "Ex Boyfriend - Teammate",
        status: "Alive",
        link: "/characters/gavin",
        image: "/gavin.jpg"
      },
      {
        name: "Keith Powers",
        role: "Husband",
        status: "Alive",
        link: "/characters/keith",
        image: "/keith.jpg"
      },
      {
        name: "Gracie Powers",
        role: "Daughter",
        status: "Alive",
        link: "/characters/gracie",
        image: "/gracie.jpg"
      },
      {
        name: "Zoey Pierce-Harris",
        role: "Mentee - Teammate",
        status: "Alive",
        link: "/characters/zoey",
        image: "/zoey.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Teammate",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      }
    ],
    uniforms: [
      {
        name: "Jade’s War Suit",
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

export default jade;
