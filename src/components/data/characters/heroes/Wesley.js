const wesley = {
    id: "#001",
    name: "Wesley Johnson",
    slug: "wesley",
    image: "/wesley.jpg",
    class: "Unapplicable",
    status: "Active",
    tagline: "I've survived worse. Let’s finish this.",
    primaryPower: "Vibration Manipulation",
    stats: {
      affiliation: "S.T.A.T.I.C.",
      gender: "Male",
      height: "5'9\" (1.75m)",
      weight: "148 lbs (67kg)",
      eyes: "Brown",
      hair: "Black",
      "place of birth": "Unknown"
    },
    abilities: [
      { name: "Alien Physiology", description: "Wesley’s extraterrestrial lineage grants him a physiology that far exceeds the capabilities of a typical Alpha Deviant. Currently, Gavin Summers is the only confirmed Alpha Deviant on Earth—but Wesley’s powers rival, and in some cases surpass, even his. As a being of alien origin, Wesley’s metabolism operates on a uniquely advanced level, granting him enhanced speed, strength, stamina, and reaction time that set him apart from both Deviants and Terran counterparts.\n\nThese attributes place him at the absolute peak of physical performance and resilience among his kind. Despite his staggering abilities, however, the full scope of Wesley’s alien heritage remains a mystery. Neither he nor those closest to him fully understand the depth of his genetic legacy—or the dormant potential that may still lie undiscovered.", book: "Book 1" },
      { name: "Vibration Manipulation", description: "At age 14, Wesley’s encounter with a mysterious stone from his alien vessel triggered a profound transformation, awakening within him the ability to manipulate vibrations at a molecular and environmental level. Rooted in an alien genetic predisposition and honed through years of disciplined training under his father, Ajax, this power allows Wesley to perceive and control the underlying frequency and amplitude of all things that vibrate—matter, energy, air, sound, even light. His connection to these vibrations is not superficial; it is instinctive, fundamental, and omnipresent. By altering vibrational patterns, he can influence physical structures, direct force, reshape energy, and interact with the world in ways that defy conventional physics. This ability serves as the foundation for his entire arsenal—whether he's disrupting the molecular integrity of an object, reinforcing his own body, or turning the battlefield into a resonant weapon. It is not a single trick but a complete system of control, one that grows more complex and powerful as Wesley continues to evolve.", book: "Book 1" },
      {
        name: "Vibration Emission",
        description: "Wesley generates and directs vibrations with precision, amplifying their force to create powerful shockwaves. These emissions serve as the foundation of his offensive toolkit, enabling him to release vibrational energy in a variety of focused, explosive, and adaptive forms depending on the combat scenario.",
        book: "Book 1",
        subAbilities: [
          { name: "Concussive Blasts/Bursts", description: "Emitted from his hands, feet, or body, these waves disrupt matter by transferring concentrated kinetic energy. His left hand typically emits stronger blasts due to its vibrational dominance.", book: "Book 1"},
          { name: "Concussive Slash", description: "By channeling vibrations along his arm or leg, Wesley creates a shockwave in a slashing motion that can cut through objects or strike with disruptive force.", book: "Book 2"},
          { name: "Finger Gun Sniper Shot", description: "Focused blasts are generated from his fingertips, where vibrations concentrate into a tightly packed, high-velocity shockwave. By modulating the frequency, Wesley ensures the blast remains cohesive over long distances, striking targets with pinpoint precision.", book: "Book 2"},
          { name: "Concussive Punch", description: "Wesley channels intense vibrational force through his fists, releasing it on impact in a focused burst. This technique allows him to either detonate outward on contact or drive the force directly into his opponent’s body for maximum disruption.", book: "Book 1"},
          { name: "Concussive Ricochet Blast", description: "Wesley can curve and shape his blasts to bounce off surfaces, allowing him to strike enemies indirectly. These precision-angled shockwaves retain enough power to travel through complex spaces and hit from unpredictable directions.", book: "Book 3"},
          { name: "Concussive Rapid Fire", description: "Wesley emits a rapid series of controlled, lower-powered vibration bursts in a repeating pattern. Ideal for suppressing enemies, staggering movement, or overwhelming defenses through tempo alone.", book: "Book 2"}
        ]
      },
      {
        name: "Shockwave Creation",
        description: "Wesley manipulates air molecules through sudden, controlled bursts of vibration, producing powerful shockwaves that can disorient, repel, or destabilize targets in his immediate environment. These shockwaves are typically triggered by simple, physical gestures amplified through his vibrational field.",
        book: "Book 2",
        subAbilities: [
          { name: "Concussive Stomp", description: "By directing vibrations through his leg into the ground, Wesley can generate a radial shockwave that destabilizes footing, fractures terrain, or repels multiple enemies at once.", book: "Book 2"},
          { name: "Concussive Snap Burst", description: "A short-range, omnidirectional shockwave generated through a finger snap. Often used to clear space around him or disrupt incoming attacks in close quarters.", book: "Book 1"},
          { name: "Concussive Clap", description: "Generates a wide, large-scale shockwave that disorients or repels targets within a forward-facing cone. The concussive force travels through the air like a controlled sonic blast.", book: "Book 1"},
          { name: "Core Drop Shockwave", description: "Wesley crosses his arms over his chest, locking vibrational energy in his upper body, then sharply drops them outward in an X-pattern. This motion channels the built-up energy into his core, triggering an explosive release from his chest and diaphragm that erupts forward in a massive, horizontal shockwave. Unlike clapping or snapping, the X Blast is fueled by full-body compression and release, giving it both greater intensity and a wider arc of destruction. The resulting blast flattens everything in its path, making the move ideal for mid-range clearing, often used as a finisher or a panic response when Wesley is overwhelmed or surrounded.", book: "Book 1"}
        ]
      },
      {
        name: "Disintegration",
        description: "Wesley can vibrate matter at its exact resonant frequency, causing its molecular and atomic bonds to destabilize and collapse. This results in the target breaking down into smaller components—effectively erasing solid matter through vibrational decay. The technique demands extreme precision, as even a slight miscalculation can result in unintended destruction.",
        book: "Book 3",
        subAbilities: [
          { name: "Disintegration Punch", description: "Wesley channels the destructive frequency through his arm, concentrating it in his fist. Upon impact, the target’s molecules are forced into catastrophic resonance, causing matter to rapidly destabilize and collapse. This move is highly condensed and directional, making it ideal for punching through armor, shielding, or high-durability targets at close range.", book: "Book 2"},
          { name: "Disintegration Orb", description: "Wesley forms a compact, unstable orb of vibrational energy in his hand—an externalized version of the disintegration frequency. The orb floats or is hurled toward its target, unraveling whatever it touches with overwhelming molecular force. More powerful and volatile than the punch, the orb is harder to control and far more taxing. If it fails to land or is aborted mid-charge, the vibrational recoil can cause severe internal backlash, including muscular spasms, nervous system failure, or partial energy collapse.", book: "Book 3"}
        ]
      },
      {
        name: "Resonant Reversal",
        description: "Wesley creates a vibrational field tuned to the frequency of an incoming attack—be it kinetic, elemental, or energy-based. Once captured, the energy is harmonized within his vibrational field, its structure broken down just enough to be manipulated. Wesley can then reverse the force, launching it back toward its origin with amplified momentum and destructive potential. The technique demands exact vibrational calibration, especially with unstable or unknown forms of energy, but it allows Wesley to weaponize virtually any offensive force used against him.",
        book: "Book 3",
        subAbilities: [
          { name: "Construct Overload", description: "Wesley doesn’t always send attacks back in their original form. Sometimes, he repurposes the absorbed energy or matter—fusing it with his own concussive power to create volatile, reinforced constructs. For example, incoming fire, ice, or metal shards can be captured, infused into a vibrational matrix, and compressed into a blade, orb, or projectile that hits with exponentially more force. These constructs not only carry his signature concussive payload but also the elemental or physical properties of the original attack, resulting in unpredictable and devastating combinations. This form of retaliatory creation is taxing and usually reserved for high-stakes moments when he needs to turn the tide in one decisive blow.", book: "Book 3"}
        ]
      },
      {
        name: "Vibro-kinetic Absorption Combat",
        description: "Wesley absorbs the vibrational energy generated by physical impacts—whether from punches, strikes, or blunt force trauma—and redirects that energy into his own attacks. By channeling the absorbed kinetic force through his body’s vibrational network, he significantly amplifies the power of his retaliatory strikes. The more force he takes in, the more devastating his counterattack becomes. This style of combat turns defense into offense, allowing Wesley to grow more dangerous the longer a fight goes on, especially in close quarters.",
        book: "Book 1",
        subAbilities: [
          { name: "Vibration Strike Release", description: "Once he has absorbed enough kinetic energy, Wesley can discharge it through a single limb—typically via a punch, kick, or palm strike. The resulting blow is laced with stored vibrational force, capable of shattering reinforced materials, crumpling armor, or launching enemies with explosive concussive impact. The release is tightly focused, making it ideal for single-target takedowns or sudden power shifts mid-fight.", book: "Book 1"},
          { name: "Vibration Kinetic Body Release", description: "After storing enough vibrational energy through accumulated impacts, Wesley can unleash it through his whole frame. The resulting strike detonates with explosive, shockwave-laced force, multiplying the damage output far beyond a normal attack. This move is often used as a momentum-shifting finisher, delivered with zero warning, and capable of cratering terrain or launching high-durability targets across the battlefield. The precision of release ensures minimal energy is wasted—and maximum force is transferred.", book: "Book 1"}
        ]
      },
      { name: "Vibration Outburst", description: "Wesley unleashes a massive, omnidirectional shockwave generated entirely from within his own body—no impact absorption required. By compressing vibrational energy throughout his muscular and skeletal systems, he builds a volatile charge across every layer of his being. Once the internal pressure reaches a critical threshold, he releases it in a sudden, explosive burst that radiates outward from his core in all directions.\n\nThe resulting shockwave destabilizes everything in the immediate radius—knocking back enemies, fracturing terrain, and causing widespread environmental disruption. The outburst is not a precision tool—it’s a raw, violent expulsion of power used to break free from suppression, repel multiple attackers, or end a standoff with overwhelming force\n\nThough not dependent on external strikes, this technique still demands precise internal control. If unleashed without discipline, the feedback can disorient Wesley or cause short-term strain on his internal systems. At full power, the blast can level structures and displace reinforced targets across vast distances.", book: "Book 2" },
      {
        name: "Vibro-Shield",
        description: "Wesley manipulates concentrated air vibrations to form protective barriers that deflect or absorb incoming attacks. These vibrational shields are composed of tightly controlled oscillating fields that create opposing waveforms—disrupting kinetic energy, elemental attacks, or energy blasts before they reach him. The shields can be deployed in quick bursts for directional defense or sustained briefly under heavy fire.",
        book: "Book 1",
        subAbilities: [
          { name: "Vibro-Forcefield", description: "A full-scale, dome-shaped extension of his vibrational shielding. This 360-degree barrier envelopes Wesley—or a designated target—offering total coverage from all angles. The forcefield is semi-permeable to controlled outgoing attacks but resists most external intrusions. Maintaining it for long durations is taxing, making it a high-energy defensive option reserved for critical moments.", book: "Book 1"}
        ]
      },
      {
        name: "Phasing",
        description: "By synchronizing his body’s vibrational frequency with that of a solid object, Wesley can pass through it without resistance. This process avoids molecular collisions by aligning his atomic oscillations with the space between the atoms of the target matter, allowing him to move seamlessly through walls, structures, or other obstructions. The technique requires precise frequency matching and continuous control—any lapse in concentration could result in partial materialization or internal trauma. While effective for infiltration, evasion, or sudden repositioning in battle, extended phasing can become disorienting and is used strategically rather than constantly.",
        book: "Book 2",
        subAbilities: [
          { name: "Phase Link", description: "By maintaining direct contact, Wesley can extend his vibrational frequency into another person or object, allowing them to phase with him. This process requires immense focus, especially with larger masses or unwilling targets, and becomes more unstable the longer it’s sustained. Phase Link is typically used to pull allies through solid barriers, bypass obstacles, or save others from entrapment in high-risk situations.", book: "Book 2"},
          { name: "Dimensional Phase-Out", description: "Wesley can push his phasing ability beyond the physical realm, briefly shifting his body out of the current dimensional plane entirely. Unlike standard phasing, which synchronizes his vibrations with matter to bypass it, this technique involves desynchronizing from the natural frequency of the universe itself—temporarily removing him from the fabric of space-time. While phased out, Wesley is untouchable and undetectable, immune to all forms of physical, energy, or psychic interference. He cannot interact with his surroundings while in this state, and remaining disconnected for too long risks vibrational dissonance or dimensional echo feedback upon return. It's an extreme evasive maneuver, often used as a last resort", book: "Book 3"}
        ]
      },
      { name: "Vibration Absorption", description: "Wesley can absorb incoming vibrational energy—whether from physical impacts, explosions, shockwaves, or environmental tremors—and disperse it safely across his body. Rather than allowing that energy to cause damage, he redirects it through his internal vibrational network, neutralizing the kinetic force before it can destabilize his structure. This not only protects him from harm but also enables him to store and repurpose the absorbed energy into future attacks, movement bursts, or enhanced defense. The more concentrated or rhythmic the incoming vibrations, the more efficiently he can capture them. This technique serves as both a passive defense mechanism and a setup for retaliatory strikes.", book: "Book 1" },
      { name: "Vibro-Titanium Body", description: "Wesley can manipulate the vibrational frequency of his own body to enter a hyper-stabilized state, drastically increasing his physical density and durability. By locking his molecular vibrations into a rigid, unified resonance, his body becomes nearly unbreakable—capable of withstanding extreme impacts, high-caliber weaponry, and even certain energy-based assaults.\n\nThis transformation dramatically enhances his resistance to physical harm, allowing him to fight through conditions that would otherwise incapacitate or destroy most beings. While in this state, Wesley moves with deliberate weight and power, sacrificing some speed for overwhelming force and near-impervious resilience.", book: "Book 3" },
      {
        name: "Vibration Constructs",
        description: "Wesley manipulates air molecules by adjusting their vibrational frequency and amplitude, condensing them into semi-solid, tangible forms. These constructs are formed through precise control over the surrounding environment, allowing him to create temporary structures and tools made entirely of compressed vibrational force. Despite being formed from air, they are stable, versatile, and can adapt to his needs in combat, traversal, or defense.",
        book: "Book 3",
        subAbilities: [
          { name: "Platforms", description: "Short-burst pulses from Wesley’s feet form transparent, floating vibrational surfaces beneath him. These platforms allow for aerial suspension, rapid elevation, or precise re-positioning in mid-air.", book: "Book 2"},
          { name: "Vibration Staircase", description: "Sequential foot pulses generate ascending or descending steps made of stabilized vibrational fields. This technique enables Wesley to climb across vertical terrain or build literal steps into the air for others to follow.", book: "Book 2"},
          { name: "Vibration Weapons", description: "Using focused hand pulses, Wesley forms semi-solid weapons—such as swords—composed of hardened vibration. These tools hit with concussive force and can be reshaped or dispersed mid-combat.", book: "Book 3"},
          { name: "Concussive Fist Construct", description: "Wesley channels intense vibrational energy into his fists, concentrating it between the gaps of his fingers. Upon striking, he releases a controlled concussive blast from those gaps, unleashing force not just forward, but explosively outward from the structure of his hand itself. This technique effectively turns his fists into short-range cannons—delivering devastating impact while simultaneously destabilizing anything directly in contact or in close proximity. The construct doesn’t just amplify his punch—it creates a detonation point, sending out shockwaves that can break guard stances, launch enemies, or disorient opponents within the radius of the blast arc.", book: "Book 1"},
          { name: "Vibration Slide", description: "By guiding pulses from his hands, Wesley generates a smooth, angled surface made of flowing vibrational fields. Designed for vertical descents or emergency escapes, the slide cushions and stabilizes riders, ensuring safe and rapid travel down deep tunnels or shafts.", book: "Book 3"}
        ]
      },
      {
        name: "Levitation & Limited Flight",
        description: "Wesley propels himself through the air using concussive blasts emitted from his hands and feet. By precisely modulating the force, direction, and timing of each burst, he achieves controlled levitation and short-to-mid-range flight. These blasts function like pulsing thrusters, allowing him to hover in place, ascend vertically, or dart across the battlefield with speed and agility. While not a true form of continuous, passive flight, his dynamic control gives him full aerial maneuverability for extended periods—especially in open environments where space and air pressure allow for efficient recoil.",
        book: "Book 1",
        subAbilities: [
          { name: "True Flight", description: "Through advanced vibrational stabilization and refined energy output, Wesley can achieve uninterrupted flight without relying on constant propulsion bursts. By synchronizing vibrational output with gravitational resistance, he creates a stabilized lift field around his body, allowing for smooth, fluid aerial movement. This form of flight is quieter, more energy-efficient, and allows him to maintain altitude and maneuver with far greater precision over long distances. It also grants the freedom to combine airborne movement with offensive and defensive techniques without compromising trajectory or control.", book: "Book 2"}
        ]
      },
      {
        name: "Vibration Detection",
        description: "Wesley emits controlled pulses of vibrational energy that bounce off objects in his environment and return to him, functioning like a form of high-frequency echolocation. This ability allows him to precisely map his surroundings—even in total darkness, smoke, or obstructed areas. He can send pulses through the ground via his hands or through subtle foot taps, reading how those vibrations reflect off surfaces, bodies, and environmental structures in real-time.",
        book: "Book 1",
        subAbilities: [
          { name: "Vibration Sense", description: "By remaining passively attuned to ambient vibrations in the air and ground, Wesley maintains a continuous awareness of movement, displacement, or approaching threats. At higher levels of focus, this heightened sensitivity allows him to react to danger before it's visible, anticipate sneak attacks, and sense emotional tension through bodily micro-movements—functioning like a sixth sense.", book: "Book 2"}
        ]
      },
      { name: "Pressure Manipulation", description: "Wesley can manipulate localized air pressure by compressing or decompressing air molecules through vibrational control. This allows him to create concentrated zones of high pressure to constrict, pin, or destabilize enemies. By focusing on specific points—like the chest, throat, or limbs—he can restrict airflow, compress lung capacity, or disrupt an opponent’s balance and circulation.", book: "Book 1" },
      { name: "Localized Weather Manipulation", description: "Wesley can temporarily disrupt atmospheric conditions by altering the vibrational patterns of the surrounding air. By modulating these frequencies, he creates “calm zones”—stable bubbles of neutralized pressure that redirect or suppress environmental effects such as wind, rain, fog, or snow. These fields don’t stop weather globally, but within their radius, they force the atmosphere into stillness, providing a controlled space for visibility, movement, or concentration.", book: "Book 2" },
      { name: "Memory Alteration", description: "Wesley can manipulate the vibrational frequencies of neural pathways in the brain, allowing him to subtly modify, suppress, or erase memories. By adjusting the resonance of specific neural clusters, he can interfere with how the brain stores or retrieves information. However, this technique is incredibly risky—any deviation in frequency can cause unintended consequences, including memory fragmentation, emotional imbalance, or permanent cognitive damage. Wesley has only performed this ability once, and it happened by accident. The result, though successful, unsettled him deeply, and as a result, he considers this power off-limits.", book: "Book 1" },
      { name: "Voice Manipulation", description: "By controlling the vibrations in his vocal cords, Wesley can alter the pitch, tone, cadence, and volume of his voice with exceptional precision. This allows him to mimic other voices, mask his own, or project sound in unconventional ways for stealth communication or deception. The ability is frequently used to shroud his identity. However, due to its link with his emotional and physiological state, Wesley can sometimes trigger this effect unintentionally—especially during moments of intense stress, rage, or grief.", book: "Book 2" },
      {
        name: "Invisibility",
        description: "Wesley can render himself invisible by manipulating the vibrational frequencies of both light and sound waves around his body. By bending light to avoid reflection and altering sound wave patterns to dampen noise, he effectively erases his visual and auditory presence from the surrounding environment.",
        book: "Book 2",
        subAbilities: [
          { name: "Dual Cloak", description: "By maintaining physical contact with both hands, Wesley can extend his invisibility to cloak up to two additional people. This is achieved by syncing their outer vibrational fields with his own, though the effort divides his focus and shortens the duration of the cloak. Movement must remain coordinated, or the link destabilizes.", book: "Book 2"},
          { name: "Vibration Cloak Field", description: "At higher energy output, Wesley can generate a localized invisibility field—a temporary dome of altered vibration frequencies that conceals multiple people or objects within a confined area. The field distorts light and sound passing through it, creating a bubble of total sensory nullification. It is difficult to sustain for more than a minute and is vulnerable to high-impact attacks or environmental disruption.", book: "Book 2"}
        ]
      },
      { name: "Vibration Confinement", description: "Wesley creates imperceptible vibrational barriers designed to trap targets within a fixed area. These barriers are forged from oscillating vibrational fields calibrated to specific resonant frequencies, allowing them to remain completely invisible and undetectable to the naked eye or standard sensors. Once formed, the field holds its shape with remarkable stability, adapting its frequency to resist physical escape or energy disruption.\n\nTargets trapped inside may not even realize they’re confined until they attempt to move, only to find themselves repelled or redirected by a seemingly invisible wall. The confinement zone can be shaped with precision—forming cages, spheres, or wall traps depending on Wesley’s intent. Maintaining the barrier requires mental focus and continuous resonance adjustment, especially against volatile powers or teleportation.", book: "Book 2" },
      { name: "Vibrational Speed Field", description: "Wesley generates a high-frequency vibrational aura around his body that dramatically reduces air resistance, ground friction, and inertial drag. By surrounding himself with this field, he minimizes the natural forces that slow movement, enabling him to reach superhuman speeds with fluid precision. The aura dynamically adjusts in real-time, allowing him to shift direction, stop, or accelerate with perfect control—even in chaotic terrain or mid-combat.\n\nThis ability allows Wesley to move with blinding agility, often appearing as a blur or a flicker to the naked eye. When fully activated, it becomes difficult for enemies to track his position, let alone react. The speed field is a core component of his close-quarters movement, allowing him to seamlessly chain dashes, counters, and precision strikes at velocities that defy conventional combat logic.", book: "Book 2" },
      { name: "Vibration Jet Propulsion", description: "By emitting continuous, high-powered bursts of vibrational energy from his back, Wesley generates explosive thrust that propels him forward at extreme speeds. These focused shockwave streams function like an organic jetpack, allowing for rapid ground dashes, powerful vertical leaps, and brief periods of midair maneuvering. The propulsion is controlled through fine-tuned modulations in his vibration aura, giving Wesley precise control over direction, altitude, and velocity. While not a true substitute for long-duration flight, this ability excels in close-quarters combat, gap-closing maneuvers, or evasive retreats—allowing Wesley to launch into or away from battle with brutal speed.", book: "Book 2" },
      { name: "Afterimage Creation", description: "By vibrating his body at extremely high frequencies, Wesley creates visual and auditory echoes of himself that linger momentarily in space. These afterimages appear as flickering silhouettes or overlapping “ghosts” that mimic his movement in delayed intervals—trailing behind or darting to the side with misleading intent. Accompanied by displaced footfalls, motion blur, or duplicated sound signatures, the effect makes it appear as though multiple versions of Wesley are moving simultaneously.", book: "Book 2" },
      { name: "Vibration Regeneration", description: "Wesley accelerates his natural healing by manipulating the microscopic vibrations within his cells and tissues. By amplifying these internal frequencies, he stimulates rapid cell repair, improved circulation, and accelerated tissue regeneration. Minor injuries like cuts, bruises, and surface abrasions heal within seconds, while more serious wounds such as broken bones may take several minutes to realign and mend. Burns can be repaired but often leave residual scarring due to the complexity of tissue reconstruction.", book: "Book 2" },
      {
        name: "Ultimate Wesley",
        description: "In the wake of a key figure's death, Wesley underwent a powerful transformation—an emotional and biological evolution he refers to as his Ultimate Form. This state marks a profound amplification of both his physical attributes and vibrational powers, representing the full potential of his alien physiology and years of refined control.",
        book: "Book 1",
        subAbilities: [
          { name: "Physical Augmentation", description: "Wesley’s physical capabilities are magnified to extraordinary levels. His speed becomes a blur, granting him lightning-fast reflexes and superhuman agility. His musculature doubles in size, enhancing both his strength and his intimidating presence. In this form, he possesses the stamina to fight for extended periods without fatigue and the durability to withstand overwhelming force.", book: "Book 1"},
          { name: "Ultimate Vibrational Mastery", description: "Wesley gains absolute control over his vibrational abilities, allowing him to perform techniques that would normally risk self-harm in his base form. His manipulation of frequency, resonance, and force reaches levels that defy conventional physics—giving him access to planet-level feats without compromising his structural stability.", book: "Book 1"},
          { name: "Flight", description: "His entire body radiates high-frequency vibrations that counteract gravity, enabling smooth, sustained flight without the need for blast propulsion. This flight is silent, stable, and highly maneuverable, marking a leap beyond his previous movement techniques.", book: "Book 1"},
          { name: "Piercing Gaze", description: "Upon activation of this form, Wesley’s pupils vanish and are replaced by a radiant, white glow that floods his eyes. This glow is a visible signature of his full power—a visual manifestation of his peak vibrational energy and alien potential.", book: "Book 1"}
        ]
      },
      { name: "Vibrational Discrepancy Awareness", description: "Wesley can detect inconsistencies in the vibrational patterns of his environment, allowing him to sense—and often visually perceive—when something is an illusion, projection, or reality distortion. Because every object and entity emits a subtle vibrational signature, any artificial construct or manipulated image typically carries slight inconsistencies in frequency, resonance, or delay.\n\nBy constantly attuning to these micro-vibrations, Wesley can feel when something is out of phase with the world around it. This awareness often presents as a distortion, shimmer, or absence of expected feedback in his senses—making illusions harder to fool him with and enabling him to “see through” them even when others can’t. While not infallible against all types of illusions, especially those that manipulate vibration directly, his ability gives him a significant edge against deceptive abilities and reality-altering foes.", book: "Book 3" },
      { name: "Concussive Echo Barrage", description: "Wesley delivers a single punch laced with staggered vibrational frequencies, causing it to detonate in a cascade of overlapping concussive impacts. Instead of one strike, the vibrations ripple forward in rapid succession, layering dozens—sometimes hundreds—of micro-shockwaves along the same path. The result is a barrage of phantom hits all focused on a single impact zone, overwhelming even the most durable targets with relentless internal pressure and kinetic trauma.", book: "Book 3" },
      { name: "Mass Distortion Strikes", description: "Wesley manipulates the vibrational frequency and momentum of his limbs to simulate the kinetic mass of far heavier objects. By momentarily syncing his strikes with the resonant signature of something massive—like a boulder, a vehicle, or even a meteor—he tricks the laws of motion into amplifying the weight behind each blow.\n\nThis doesn’t make him physically heavier, but rather makes his strike land with the force of something that is. The result is a punch or kick that carries catastrophic inertia, capable of blowing through reinforced barriers, launching foes across vast distances, or shattering defensive constructs in a single hit. At full output, the backlash from these strikes can cause shockwaves or fracture the terrain underfoot, making them risky to use in unstable environments.", book: "Book 3" },
      { name: "Concussive Force Multiplier", description: "Wesley unleashes a series of vibration-based attacks that compound in strength with each successive strike. By syncing the frequency of each blast to the residual vibrations left by the previous one, he amplifies the kinetic feedback loop—causing every hit to grow stronger, faster, and more destabilizing than the last. This buildup continues until the final strike delivers exponentially enhanced concussive force, often overwhelming even the most resilient defenses.\n\nThe multiplier effect only works when attacks are executed in rapid succession, making this technique a high-reward combat rhythm that punishes hesitation or interruption. At full potential, the last strike in the sequence can trigger area-wide shockwaves, shatter reinforced constructs, or rupture internal systems in vibration-sensitive targets.", book: "Book 3" },
      { name: "Vibration Armor", description: "Wesley can rapidly form makeshift armor by gathering debris, rubble, or nearby environmental materials and binding them together using controlled vibrational fields. These oscillating frequencies stabilize loose fragments into a cohesive, flexible shell that absorbs impact and redistributes kinetic force across the surface.\n\nThe armor is not a solid plate—it’s a reactive layer held together by continuous micro-vibrations, allowing it to flex, shift, and adapt with Wesley’s movements. It can be formed mid-combat, often while he's using concussive blasts from a single arm or leg to stay upright. This makes the technique especially effective when Wesley is injured and needs quick reinforcement, such as after sustaining major limb damage.\n\nDepending on available materials, the armor may appear jagged, layered, or rough—but its vibrational cohesion renders it surprisingly resilient. The more stable Wesley’s aura, the longer it holds together; too much disruption or external destabilization may cause it to break apart.", book: "Book 3" },
      { name: "Vibro-Inertial Displacement Surge", description: "In the vacuum of space, where traditional movement systems fail, Wesley weaponizes vibration itself. By generating a focused internal recoil—originating from a synchronized pulse of vibrational energy across his muscular and skeletal structure—he launches himself at extreme speeds without relying on external propulsion. This sudden surge propels him like a human railgun, converting zero-gravity into a combat advantage.\n\nThe move distorts light and local debris as he breaks forward, becoming a streak of vibrational force capable of blitzing across starship fields or tearing through fleets. Because it bypasses conventional thruster drag, the technique allows for tight maneuvering, precision bursts, or devastating strike entries from unexpected vectors.", book: "Book 3" },
      { name: "Zero-State Vibration Control", description: "Wesley enters a hyper-refined state where his body’s vibrations are perfectly stabilized at a harmonic equilibrium, severing his connection to conventional inertia. In this zero-state, he effectively removes all internal resistance to motion—allowing him to move using only the recoil of his own vibrational emissions, with no drag, slowdown, or external friction acting on him.\n\nThis state enables silent, instantaneous redirection in zero-G, extreme-speed bursts without traditional acceleration, and even temporary “suspension” from the normal laws of motion. It’s particularly effective in space or high-pressure atmospheres, where traditional movement would falter.", book: "Book 3" },
      { name: "Master Hacker", description: "Trained from a young age by his uncle Teddy Johnson—Wesley developed an elite-level proficiency in cyber-infiltration. Under Teddy’s hands-on tutelage, he learned to breach firewalls, override encrypted systems, disrupt live surveillance networks, and manipulate AI protocols with precision.\n\nBut the student didn’t just learn—he surpassed the master by a mile. In time, Wesley became one of the most dangerous and untraceable hackers on the planet, capable of outmaneuvering government systems, disabling alien tech, and bringing military infrastructure to its knees in seconds. His blend of instinctual logic, speed, and tactical brilliance makes him nearly impossible to oppose in the digital realm.", book: "Book 1" },
      { name: "Master Martial Artist", description: "Trained extensively by his father Ajax Johnson—a renowned soldier and combat tactician—Wesley is a master of multiple martial arts disciplines. His fighting style is an evolving synthesis of Krav Maga, Brazilian Jiu-Jitsu, boxing, kickboxing, and jujutsu, each integrated seamlessly into his approach based on the threat and terrain. From grapples and throws to strikes and pressure-point counters, he’s equipped for nearly any scenario. What sets Wesley apart is how he fuses technique with his vibrational abilities, using timing, flow, and environmental control to amplify even the most basic move.", book: "Book 1" },
      { name: "Expert Spy", description: "Wesley is highly trained in the art of espionage, surveillance, and infiltration—skills passed down by both Ajax and Teddy Johnson. He is adept at executing black ops missions, blending into hostile environments, extracting intelligence, and navigating enemy facilities undetected. His talents cover a range of field techniques: lockpicking, silent takedowns, remote surveillance setup, disguise, psychological profiling, and asset handling.", book: "Book 1" },
      { name: "Expert Tactician", description: "Wesley is a naturally gifted strategist—analytically sharp, quick to adapt, and capable of reading the battlefield with surgical clarity. Mentored by both Ajax and Teddy Johnson, he learned to approach combat and mission planning like a chessboard: seeing angles others miss, accounting for probabilities in real time, and making split-second decisions under pressure.\n\nHis mind operates like a predictive engine—analyzing patterns, anticipating enemy moves, and adjusting tactics mid-conflict. Whether in solo operations or team leadership roles, Wesley’s plans are precise, layered, and often two steps ahead of everyone else. His anxiety, once a burden, now sharpens his awareness—fueling a hyper-intuitive combat sense that borders on precognition.\n\nWhen things fall apart, Wesley doesn’t panic. He recalculates—and wins.", book: "Book 1" }
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
        name: "Ajax Johnson",
        role: "Adoptive Father",
        status: "Deceased (Book 1)",
        link: "/characters/ajax",
        image: "/ajax.jpg"
      },
      {
        name: "Teddy Johnson",
        role: "Adoptive Uncle",
        status: "Deceased (Book 1)",
        link: "/characters/teddy",
        image: "/teddy.jpg"
      },
      {
        name: "Gavin Summers",
        role: "Bestfriend",
        status: "Alive",
        link: "/characters/gavin",
        image: "/gavin.jpg"
      },
      {
        name: "Warren Summers",
        role: "Honorary Uncle",
        status: "Alive",
        link: "/characters/warren",
        image: "/warren.jpg"
      },
      {
        name: "Roman Johnson",
        role: "Adoptive Brother",
        status: "Alive",
        link: "/characters/roman",
        image: "/roman.jpg"
      }
    ],
    uniforms: [
      {
        name: "Wesley’s War Suit",
        description: "Lightweight reinforced battle suit custom-fit to optimize kinetic redirection and channel vibration flow through gauntlets and joints."
      }
    ],
    tools: [
      {
        name: "Wesley’s Gauntlets",
        description: "Vibration-hardened wrist units that amplify shockwave projection and prevent bone damage from high-intensity blasts."
      }
    ]
  };

export default wesley;
