/** /private — copy per docs/content/private.md (DA). Audience landing for homeowners. */

export const PRIVATE_META = {
  title: "Renovering for private boligejere i København — Grønt Land DK",
  description:
    "Terrasse, renovering, facade, belægning og havearbejde med fast prisramme, tydelig tidsplan og én kontaktperson. Få et gratis tilbud — vi svarer senest næste hverdag.",
} as const;

export const PRIVATE_HERO = {
  label: "For private kunder",
  h1: "Renovering og udendørsprojekter med fast plan — uden stress",
  sub: "Til boligejere i København og Storkøbenhavn, der vil have terrasse, renovering, facade eller belægning udført med tydelig kommunikation fra start til aflevering.",
  ctas: [
    { label: "Få et privat tilbud", href: "/kontakt" },
    { label: "Se vores projekter", href: "/projekter" },
  ],
  // Same photo as the home AUDIENCES private card — continuity for the audience.
  image: {
    src: "/images/cases/havearbejde-private.png",
    alt: "Plejet have med græsplæne og beplantning",
  },
} as const;

export const PRIVATE_BENEFITS = {
  h2: "Det får du som privatkunde",
  items: [
    {
      title: "Fast prisramme",
      desc: "Du kender den økonomiske ramme, før arbejdet går i gang — ingen ubehagelige overraskelser undervejs.",
    },
    {
      title: "Tydelig tidsplan",
      desc: "En realistisk plan fra starten og løbende opdatering, hvis noget ændrer sig.",
    },
    {
      title: "Én kontaktperson",
      desc: "Du skal ikke jonglere mellem murer, tømrer og anlægsgartner — én person har ansvaret hele vejen.",
    },
  ],
} as const;

export const PRIVATE_TYPES = {
  h2: "Populære opgaver for private",
  items: [
    {
      title: "Terrasse og udearealer",
      desc: "Træterrasser, havezoner og udearealer planlagt efter brug og holdbarhed.",
      image: { src: "/images/cases/projekt-terrasse.png", alt: "Bærende konstruktion til træterrasse under opbygning" },
      service: { label: "Se ydelsen", href: "/ydelser/havearbejde" },
      example: { label: "Eksempel: Træterrasse i Jatoba", href: "/projekter/terrasse-og-haveomraade" },
    },
    {
      title: "Renovering af bolig",
      desc: "Samlet renovering med flere fag, én plan og én ansvarlig kontakt.",
      image: { src: "/images/gallery/total-1.jpg", alt: "Indvendig renovering med nye overflader" },
      service: { label: "Se ydelsen", href: "/ydelser/totalentreprise" },
      example: { label: "Eksempel: Renovering af betontrappe", href: "/projekter/betontrappe-hellerup" },
    },
    {
      title: "Facade og udvendig opgradering",
      desc: "Pudsning, spartling og maling, der løfter husets udtryk og holdbarhed.",
      image: { src: "/images/cases/projekt-facade.png", alt: "Facaderenovering på privat bolig" },
      service: { label: "Se ydelsen", href: "/ydelser/murerarbejde" },
      example: { label: "Eksempel: Facaderenovering", href: "/projekter/facadeopgave" },
    },
    {
      title: "Belægning og indkørsel",
      desc: "Indkørsler, stier og støttemure med stærkt underlag og korrekt afvanding.",
      image: { src: "/images/cases/projekt-belaegning.png", alt: "Belægning i natursten ved bolig" },
      service: { label: "Se ydelsen", href: "/ydelser/belaegningsarbejde" },
      example: { label: "Eksempel: Belægning og terrænarbejde", href: "/projekter/belaegning-ved-bolig" },
    },
  ],
} as const;

export const PRIVATE_PROJECTS = {
  h2: "Udvalgte private projekter",
  slugs: ["terrasse-og-haveomraade", "belaegning-ved-bolig", "facadeopgave"],
  ctas: [
    { label: "Se alle projekter", href: "/projekter" },
    { label: "Åbn galleriet", href: "/galleri" },
  ],
} as const;

export const PRIVATE_FAQ = {
  h2: "Ofte stillede spørgsmål fra private",
  items: [
    {
      q: "Hvad koster det at få lavet et tilbud?",
      a: "Ingenting. Du sender en kort beskrivelse, vi vurderer opgaven og giver et uforpligtende tilbud.",
    },
    {
      q: "Hvor hurtigt kan I gå i gang?",
      a: "Det afhænger af opgavens omfang og sæsonen. Vi giver en realistisk opstartsdato sammen med tilbuddet.",
    },
    {
      q: "Skal jeg selv koordinere de forskellige håndværkere?",
      a: "Nej. Vi samler fagene i én plan, og du har én kontaktperson hele vejen.",
    },
    {
      q: "Rydder I op efter arbejdet?",
      a: "Ja. Oprydning og bortskaffelse er en del af planen, og vi gennemgår resultatet sammen med dig ved afleveringen.",
    },
  ],
} as const;

export const PRIVATE_CTA = {
  h2: "Klar til at komme i gang?",
  text: "Beskriv din opgave kort — så vender vi tilbage med en vurdering senest næste hverdag.",
  primary: { label: "Få et privat tilbud", href: "/kontakt" },
  crosslinks: [{ label: "Er du entreprenør? Se samarbejdsmodellen", href: "/entreprenorer" }],
} as const;

/* English copy (docs/content/private.md EN) — sections pick da/en by locale. */

export const PRIVATE_META_EN = {
  title: "Renovation for homeowners in Copenhagen — Grønt Land DK",
  description:
    "Terraces, renovation, facades, paving and garden work with a fixed price frame, a clear schedule and one contact person. Get a free quote — we reply by the next business day.",
} as const;

export const PRIVATE_HERO_EN = {
  label: "For private customers",
  h1: "Renovation and outdoor projects with a fixed plan — without stress",
  sub: "For homeowners in Greater Copenhagen who want a terrace, renovation, facade or paving carried out with clear communication from start to handover.",
  ctas: [
    { label: "Get a private quote", href: "/kontakt" },
    { label: "See our projects", href: "/projekter" },
  ],
  image: {
    src: "/images/cases/havearbejde-private.png",
    alt: "A well-kept garden with lawn and planting",
  },
} as const;

export const PRIVATE_BENEFITS_EN = {
  h2: "What you get as a private customer",
  items: [
    {
      title: "Fixed price frame",
      desc: "You know the financial frame before work begins — no unpleasant surprises along the way.",
    },
    {
      title: "Clear schedule",
      desc: "A realistic plan from the start and ongoing updates if anything changes.",
    },
    {
      title: "One contact person",
      desc: "No juggling between mason, carpenter and landscaper — one person is responsible all the way.",
    },
  ],
} as const;

export const PRIVATE_TYPES_EN = {
  h2: "Popular projects for private customers",
  items: [
    {
      title: "Terrace and outdoor areas",
      desc: "Wooden terraces, garden zones and outdoor areas planned for use and durability.",
      image: { src: "/images/cases/projekt-terrasse.png", alt: "Load-bearing structure for a timber deck under construction" },
      service: { label: "See the service", href: "/ydelser/havearbejde" },
      example: { label: "Example: Jatoba hardwood deck", href: "/projekter/terrasse-og-haveomraade" },
    },
    {
      title: "Home renovation",
      desc: "Complete renovation with several trades, one plan and one accountable contact.",
      image: { src: "/images/gallery/total-1.jpg", alt: "Interior renovation with new surfaces" },
      service: { label: "See the service", href: "/ydelser/totalentreprise" },
      example: { label: "Example: Concrete stair renovation", href: "/projekter/betontrappe-hellerup" },
    },
    {
      title: "Facade and exterior upgrade",
      desc: "Rendering, filling and painting that lift the house's look and durability.",
      image: { src: "/images/cases/projekt-facade.png", alt: "Facade renovation on a private home" },
      service: { label: "See the service", href: "/ydelser/murerarbejde" },
      example: { label: "Example: Facade renovation", href: "/projekter/facadeopgave" },
    },
    {
      title: "Paving and driveway",
      desc: "Driveways, paths and retaining walls with a strong base and correct drainage.",
      image: { src: "/images/cases/projekt-belaegning.png", alt: "Natural-stone paving by a home" },
      service: { label: "See the service", href: "/ydelser/belaegningsarbejde" },
      example: { label: "Example: Paving and groundwork", href: "/projekter/belaegning-ved-bolig" },
    },
  ],
} as const;

export const PRIVATE_PROJECTS_EN = {
  h2: "Selected private projects",
  slugs: ["terrasse-og-haveomraade", "belaegning-ved-bolig", "facadeopgave"],
  ctas: [
    { label: "See all projects", href: "/projekter" },
    { label: "Open the gallery", href: "/galleri" },
  ],
} as const;

export const PRIVATE_FAQ_EN = {
  h2: "Frequently asked questions from private customers",
  items: [
    {
      q: "What does a quote cost?",
      a: "Nothing. You send a short description, we assess the task and give a no-obligation quote.",
    },
    {
      q: "How soon can you start?",
      a: "It depends on the scope and the season. We give a realistic start date together with the quote.",
    },
    {
      q: "Do I have to coordinate the different tradespeople myself?",
      a: "No. We combine the trades in one plan, and you have one contact person all the way.",
    },
    {
      q: "Do you clean up after the work?",
      a: "Yes. Cleanup and disposal are part of the plan, and we review the result together with you at handover.",
    },
  ],
} as const;

export const PRIVATE_CTA_EN = {
  h2: "Ready to get started?",
  text: "Describe your project briefly — we get back with an assessment by the next business day.",
  primary: { label: "Get a private quote", href: "/kontakt" },
  crosslinks: [{ label: "Are you a contractor? See the collaboration model", href: "/entreprenorer" }],
} as const;
