/** /entreprenorer — copy per docs/content/entreprenorer.md (DA). B2B landing.
 *  No testimonials by design — the authentic ARC Amager case carries the proof. */

export const B2B_META = {
  title: "Samarbejde for entreprenører — stabilt team i København",
  description:
    "Grønt Land DK indgår som underentreprenør eller holdforstærkning på byggeprojekter i Storkøbenhavn. Fast kontaktperson, løbende status og dokumenteret aflevering.",
} as const;

export const B2B_HERO = {
  label: "For entreprenører",
  h1: "Et stabilt team, der overholder planen",
  sub: "Grønt Land DK indgår på entrepriser med krav om tempo, kvalitet og sikker aflevering — som underentreprenør, delentreprise eller ekstra kapacitet i spidsbelastning.",
  ctas: [
    { label: "Få team-tilgængelighed", href: "/kontakt" },
    { label: "Ring 91 70 01 03", href: "tel:+4591700103" },
  ],
  image: { src: "/images/cases/fundament-b2b.png", alt: "Armeret fundament klargjort til støbning på byggeplads" },
} as const;

export const B2B_SCENARIOS = {
  h2: "Tre måder at samarbejde på",
  items: [
    {
      title: "Holdforstærkning i spidsbelastning",
      desc: "Ekstra faglærte hold i kritiske faser, så jeres milepæle holder — uden at I skal rekruttere.",
    },
    {
      title: "Selvstændig delentreprise",
      desc: "En afgrænset pakke med tydeligt omfang, eget ansvar og dokumenteret aflevering.",
    },
    {
      title: "Komplet pakke under hovedentreprenør",
      desc: "Flere fag samlet under én operationel kontakt, koordineret med pladsens øvrige hold.",
    },
  ],
} as const;

export const B2B_EXPECTATIONS = {
  h2: "Det kan I forvente af os",
  items: [
    {
      title: "Fast kontaktperson med beslutningskraft",
      desc: "Én person, der kan træffe beslutninger i den daglige drift — ikke et mellemled.",
    },
    {
      title: "Løbende status",
      desc: "Fast rytme for statusopdateringer, så fremdriften er synlig uden ekstra møder.",
    },
    {
      title: "Dokumenteret kvalitetssikring",
      desc: "KS og fotodokumentation som en del af udførelsen, ikke en eftertanke.",
    },
    {
      title: "Hurtig eskalering",
      desc: "Afvigelser bliver meldt og håndteret med det samme — internt, uden placering af skyld.",
    },
  ],
} as const;

export const B2B_WHY = {
  h2: "Hvorfor én integreret partner?",
  intro: "Færre koordineringsmøder. Ingen skyldplacering mellem fag, når noget opstår.",
  items: [
    { title: "Fuld faglig dybde", desc: "Murer, tømrer, maler, belægning og anlæg — ikke ét enkelt fag." },
    { title: "Eget ansvar", desc: "Vi ejer vores del af opgaven, ikke kun timerne." },
    { title: "Integreret koordinering", desc: "Fagene arbejder efter samme plan og standard." },
    { title: "Stabil bemanding", desc: "Samme hold gennem projektet — ikke skiftende ansigter." },
    { title: "Effektiv problemløsning", desc: "Uforudsete forhold løses internt uden eksterne forsinkelser." },
  ],
  link: { label: "Mød teamet bag", href: "/om-os" },
} as const;

export const B2B_MODEL = {
  h2: "Sådan forløber et samarbejde",
  steps: [
    { title: "Kickoff", desc: "Omfang, grænseflader, tegninger og rammer for opstart afklares." },
    { title: "Mobilisering", desc: "Holdet sammensættes, produktionsplan og ansvarsmatrix lægges fast." },
    { title: "Udførelse", desc: "Fast status, kvalitetskontrol og håndtering af afvigelser undervejs." },
    { title: "Aflevering", desc: "Dokumentation, gennemgang og ordentlig afslutning af entreprisen." },
  ],
  cta: { label: "Book en kickoff-snak", href: "/kontakt" },
} as const;

export const B2B_CASE = {
  h2: "Case: Belægning og afvanding — ARC Amager Ressourcecenter",
  text: "Som underentreprenør på et større projekt ved ARC etablerede vi dræn- og afvandingssystemer, monterede linjedræn og brønde, forberedte bundopbygning og udlagde betonbelægning — i tæt samarbejde med hovedentreprenøren og pladsens øvrige faggrupper. Vi deltog både i udførelsen og den løbende koordinering, så arbejdet blev afleveret korrekt og uden forsinkelser.",
  slug: "belaegning-arc-amager",
  ctas: [
    { label: "Se projektet", href: "/projekter/belaegning-arc-amager" },
    { label: "Se alle projekter", href: "/projekter" },
  ],
} as const;

export const B2B_TRADES = {
  h2: "Fag vi dækker",
  links: [
    { label: "Murerarbejde", href: "/ydelser/murerarbejde" },
    { label: "Tømrerarbejde", href: "/ydelser/tomrerarbejde" },
    { label: "Malerservice", href: "/ydelser/malerservice" },
    { label: "Belægningsarbejde", href: "/ydelser/belaegningsarbejde" },
    { label: "Havearbejde", href: "/ydelser/havearbejde" },
    { label: "Demonteringsarbejde", href: "/ydelser/demonteringsarbejde" },
    { label: "Totalentreprise", href: "/ydelser/totalentreprise" },
  ],
} as const;

export const B2B_CTA = {
  h2: "Har I brug for ekstra kapacitet?",
  text: "Beskriv projektet og tidsrammen — så vender vi tilbage med holdets tilgængelighed senest næste hverdag.",
  primary: { label: "Få team-tilgængelighed", href: "/kontakt" },
  crosslinks: [{ label: "Privat boligejer? Se løsninger for private", href: "/private" }],
} as const;

/* English copy (docs/content/entreprenorer.md EN) — sections pick da/en by locale. */

export const B2B_META_EN = {
  title: "Collaboration for contractors — a stable team in Copenhagen",
  description:
    "Grønt Land DK joins construction projects in Greater Copenhagen as a subcontractor or team reinforcement. Fixed contact person, ongoing status and documented handover.",
} as const;

export const B2B_HERO_EN = {
  label: "For contractors",
  h1: "A stable team that keeps the schedule",
  sub: "Grønt Land DK joins contracts with demands on pace, quality and reliable handover — as a subcontractor, a defined work package, or extra capacity at peak load.",
  ctas: [
    { label: "Get team availability", href: "/kontakt" },
    { label: "Call 91 70 01 03", href: "tel:+4591700103" },
  ],
  image: { src: "/images/cases/fundament-b2b.png", alt: "Reinforced foundation ready for casting on a construction site" },
} as const;

export const B2B_SCENARIOS_EN = {
  h2: "Three ways to collaborate",
  items: [
    {
      title: "Team reinforcement at peak load",
      desc: "Extra skilled crews in critical phases so your milestones hold — without you having to recruit.",
    },
    {
      title: "Independent work package",
      desc: "A defined package with clear scope, own responsibility and documented handover.",
    },
    {
      title: "Complete package under a main contractor",
      desc: "Several trades gathered under one operational contact, coordinated with the other crews on site.",
    },
  ],
} as const;

export const B2B_EXPECTATIONS_EN = {
  h2: "What you can expect from us",
  items: [
    {
      title: "A fixed contact with decision-making power",
      desc: "One person who can make decisions in daily operations — not an intermediary.",
    },
    {
      title: "Ongoing status",
      desc: "A fixed rhythm of status updates, keeping progress visible without extra meetings.",
    },
    {
      title: "Documented quality assurance",
      desc: "QA and photo documentation as part of the execution, not an afterthought.",
    },
    {
      title: "Fast escalation",
      desc: "Deviations are reported and handled immediately — internally, without blame games.",
    },
  ],
} as const;

export const B2B_WHY_EN = {
  h2: "Why one integrated partner?",
  intro: "Fewer coordination meetings. No blame-shifting between trades when something comes up.",
  items: [
    { title: "Full trade depth", desc: "Masonry, carpentry, painting, paving and groundwork — not a single discipline." },
    { title: "Real ownership", desc: "We own our part of the job, not just the hours." },
    { title: "Integrated coordination", desc: "The trades follow the same plan and the same standard." },
    { title: "Stable crewing", desc: "The same crew through the project — not changing faces." },
    { title: "Efficient problem-solving", desc: "Unforeseen issues are solved internally without external delays." },
  ],
  link: { label: "Meet the team behind", href: "/om-os" },
} as const;

export const B2B_MODEL_EN = {
  h2: "How a collaboration runs",
  steps: [
    { title: "Kickoff", desc: "Scope, interfaces, drawings and the startup frame are clarified." },
    { title: "Mobilization", desc: "The crew is assembled; production plan and responsibility matrix are fixed." },
    { title: "Execution", desc: "Regular status, quality control and deviation handling along the way." },
    { title: "Handover", desc: "Documentation, review and a proper close-out of the contract." },
  ],
  cta: { label: "Book a kickoff talk", href: "/kontakt" },
} as const;

export const B2B_CASE_EN = {
  h2: "Case: Paving and drainage — ARC Amager Resource Center",
  text: "As a subcontractor on a larger project at ARC, we established drainage systems, installed line drains and wells, prepared the base build-up and laid concrete paving — in close cooperation with the main contractor and the other trades on site. We took part in both the execution and the ongoing coordination, so the work was handed over correctly and without delays.",
  slug: "belaegning-arc-amager",
  ctas: [
    { label: "See the project", href: "/projekter/belaegning-arc-amager" },
    { label: "See all projects", href: "/projekter" },
  ],
} as const;

export const B2B_TRADES_EN = {
  h2: "Trades we cover",
  links: [
    { label: "Masonry", href: "/ydelser/murerarbejde" },
    { label: "Carpentry", href: "/ydelser/tomrerarbejde" },
    { label: "Painting", href: "/ydelser/malerservice" },
    { label: "Paving", href: "/ydelser/belaegningsarbejde" },
    { label: "Garden work", href: "/ydelser/havearbejde" },
    { label: "Demolition & strip-out", href: "/ydelser/demonteringsarbejde" },
    { label: "Turnkey renovation", href: "/ydelser/totalentreprise" },
  ],
} as const;

export const B2B_CTA_EN = {
  h2: "Need extra capacity?",
  text: "Describe the project and the timeframe — we get back with the crew's availability by the next business day.",
  primary: { label: "Get team availability", href: "/kontakt" },
  crosslinks: [{ label: "Homeowner? See solutions for private customers", href: "/private" }],
} as const;
