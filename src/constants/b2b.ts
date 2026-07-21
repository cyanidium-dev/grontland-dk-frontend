/** /entreprenorer — copy per Contractors.md (DA). B2B landing.
 *  Order: hero → formats → services → capabilities → projects → process → CTA.
 *  No testimonials by design — the authentic ARC Amager case carries the proof. */

export const B2B_META = {
  title: "Underentreprenør for entreprenører — stabilt team i København",
  description:
    "Grønt Land DK indgår som underentreprenør eller holdforstærkning på byggeprojekter i Storkøbenhavn. Fast kontaktperson, løbende status og dokumenteret aflevering.",
} as const;

export const B2B_HERO = {
  label: "For entreprenører",
  h1: "Underentreprenør for entreprenører i København",
  sub: "Grønt Land DK støtter entreprenører og projektledere med ekstra byggehold, afgrænsede arbejdspakker og koordinerede løsninger på tværs af fag i København og Storkøbenhavn.",
  ctas: [
    { label: "Tjek holdets tilgængelighed", modal: true },
    { label: "Se underentreprise-projekter", href: "#projekter", variant: "leaf" },
  ],
  trustChips: [
    "Svar inden for 24 timer",
    "København og Storkøbenhavn",
    "Én operationel kontakt",
    "Ugentlige statusopdateringer",
  ],
  image: { src: "/images/cases/fundament-b2b.png", alt: "Armeret fundament klargjort til støbning på byggeplads" },
} as const;

export const B2B_SCENARIOS = {
  h2: "Fleksibel underentreprise og holdforstærkning",
  intro:
    "Vi kan forstærke jeres eksisterende hold, tage ansvar for en afgrænset underentreprise-pakke eller koordinere flere fag under én operationel kontakt.",
  items: [
    {
      title: "Holdforstærkning",
      desc: "Ekstra faglærte hold i spidsbelastning eller i en kritisk fase af projektet — uden at I skal rekruttere.",
    },
    {
      title: "Afgrænset underentreprise-pakke",
      desc: "Et aftalt arbejdsomfang med tydelige ansvarsgrænser og klare krav til aflevering.",
    },
    {
      title: "Underentreprise på tværs af fag",
      desc: "Flere fagområder samlet under én fælles plan og én ansvarlig kontakt.",
    },
  ],
} as const;

export const B2B_SERVICES = {
  h2: "Byggefag og underentreprise-ydelser",
  sub: "Brug Grønt Land DK til et enkelt byggefag — eller kombinér flere fag i én koordineret underentreprise-pakke.",
} as const;

export const B2B_WHY = {
  h2: "Pålidelig kapacitet og koordinering",
  intro:
    "Holdets størrelse tilpasses projektets fase og planlagte milepæle. Arbejdet styres med ugentlige produktionsmål, løbende statusopdateringer og dokumenteret kvalitetssikring.",
  items: [
    { title: "Skalerbare byggehold", desc: "Bemandingen tilpasses projektets fase og milepæle." },
    { title: "Kontakt med beslutningskraft", desc: "Én ansvarlig, der kan træffe beslutninger i driften." },
    { title: "Ugentlige status- og risikoopdateringer", desc: "Fremdrift og risici meldes i fast rytme." },
    { title: "Dokumenteret kvalitetssikring", desc: "KS og fotodokumentation som en del af udførelsen." },
    { title: "Hurtig håndtering af afvigelser", desc: "Afvigelser meldes og løses med det samme." },
    { title: "Stabilt hold hele vejen", desc: "Samme hold gennem projektet — ikke skiftende ansigter." },
  ],
  image: {
    src: "/images/cases/kapacitet-b2b.jpg",
    alt: "Anlagt bed med stauder og buske langs en flisebelagt gangsti",
  },
} as const;

export const B2B_PROJECTS = {
  h2: "Underentreprise-projekter i København",
  sub: "Se, hvordan Grønt Land DK støtter entreprenører med belægning, dræn, bundopbygning, ekstra byggekapacitet og koordinerede arbejdspakker.",
  slugs: ["belaegning-arc-amager", "belaegning-ved-bolig", "facadeopgave"],
  ctas: [
    { label: "Se ARC-projektet", href: "/projekter/belaegning-arc-amager" },
    { label: "Se alle projekter", href: "/projekter" },
  ],
} as const;

export const B2B_MODEL = {
  h2: "Sådan foregår vores underentreprise-samarbejde",
  steps: [
    { title: "Afklaring af omfang", desc: "Vi modtager arbejdsomfang, tegninger, kvalitetskrav og nødvendige tidsfrister." },
    { title: "Hold- og produktionsplan", desc: "Vi fastlægger holdets sammensætning, ansvarsområder og en ugentlig plan." },
    {
      title: "Udførelse og statusrapportering",
      desc: "Vi udfører arbejdet, kontrollerer kvaliteten og rapporterer løbende om fremdrift og risici.",
    },
    { title: "Gennemgang og aflevering", desc: "Vi gennemgår resultatet, udbedrer mangler og overdrager den nødvendige dokumentation." },
  ],
} as const;

export const B2B_CTA = {
  h2: "Tjek holdets tilgængelighed i København",
  text: "Send os projektets placering, de nødvendige fag, omfanget og den ønskede startdato. Vi gennemgår oplysningerne og svarer inden for 24 timer.",
  primary: { label: "Tjek tilgængelighed" },
  image: {
    src: "/images/cases/belaegning-kyst.jpg",
    alt: "Belægning og afvanding under udførelse ved et kystnært byggeprojekt",
  },
  crosslinks: [{ label: "Privat boligejer? Se løsninger for private", href: "/private" }],
} as const;

/* English copy (Contractors.md EN) — sections pick da/en by locale. */

export const B2B_META_EN = {
  title: "Subcontractor for contractors — a stable team in Copenhagen",
  description:
    "Grønt Land DK joins construction projects in Greater Copenhagen as a subcontractor or team reinforcement. Fixed contact person, ongoing status and documented handover.",
} as const;

export const B2B_HERO_EN = {
  label: "For contractors",
  h1: "Construction subcontractor for contractors in Copenhagen",
  sub: "Grønt Land DK supports contractors and project managers with additional construction crews, defined work packages and coordinated multi-trade solutions in Copenhagen and Greater Copenhagen.",
  ctas: [
    { label: "Check crew availability", modal: true },
    { label: "View subcontracting projects", href: "#projekter", variant: "leaf" },
  ],
  trustChips: [
    "Reply within 24 hours",
    "Copenhagen & Greater Copenhagen",
    "One operational contact",
    "Weekly progress updates",
  ],
  image: { src: "/images/cases/fundament-b2b.png", alt: "Reinforced foundation ready for casting on a construction site" },
} as const;

export const B2B_SCENARIOS_EN = {
  h2: "Flexible subcontracting and construction crew support",
  intro:
    "We can reinforce your existing crew, take responsibility for a defined subcontracting package or coordinate several trades under one operational contact.",
  items: [
    {
      title: "Construction crew reinforcement",
      desc: "Extra skilled crews at peak load or in a critical phase of the project — without you having to recruit.",
    },
    {
      title: "Defined subcontracting package",
      desc: "An agreed scope of work with clear boundaries of responsibility and clear handover requirements.",
    },
    {
      title: "Multi-trade subcontracting",
      desc: "Several disciplines gathered under one shared plan and one responsible contact.",
    },
  ],
} as const;

export const B2B_SERVICES_EN = {
  h2: "Construction trades and subcontracting services",
  sub: "Engage Grønt Land DK for a single construction trade or combine several disciplines into one coordinated subcontracting package.",
} as const;

export const B2B_WHY_EN = {
  h2: "Reliable capacity and coordination",
  intro:
    "Crew size is adjusted to the project phase and planned milestones. Work is managed through weekly production targets, regular progress updates and documented quality assurance.",
  items: [
    { title: "Scalable construction crews", desc: "Crewing adjusts to the project phase and milestones." },
    { title: "Contact with decision-making authority", desc: "One responsible person who can make operational decisions." },
    { title: "Weekly progress and risk updates", desc: "Progress and risks are reported in a fixed rhythm." },
    { title: "Documented quality assurance", desc: "QA and photo documentation as part of the execution." },
    { title: "Fast deviation handling", desc: "Deviations are reported and resolved immediately." },
    { title: "Stable team throughout", desc: "The same crew through the project — not changing faces." },
  ],
  image: {
    src: "/images/cases/kapacitet-b2b.jpg",
    alt: "Planted bed with shrubs alongside a paved walkway",
  },
} as const;

export const B2B_PROJECTS_EN = {
  h2: "Subcontracting projects in Copenhagen",
  sub: "See how Grønt Land DK supports contractors with paving, drainage, groundwork, additional construction capacity and coordinated work packages.",
  slugs: ["belaegning-arc-amager", "belaegning-ved-bolig", "facadeopgave"],
  ctas: [
    { label: "See the ARC project", href: "/projekter/belaegning-arc-amager" },
    { label: "See all projects", href: "/projekter" },
  ],
} as const;

export const B2B_MODEL_EN = {
  h2: "How our subcontracting process works",
  steps: [
    { title: "Project scope review", desc: "We receive the scope, drawings, quality requirements and the necessary deadlines." },
    { title: "Crew and production planning", desc: "We define the crew composition, areas of responsibility and a weekly plan." },
    {
      title: "Construction and progress reporting",
      desc: "We carry out the work, control quality and report regularly on progress and risks.",
    },
    { title: "Inspection and handover", desc: "We review the result, fix any defects and hand over the necessary documentation." },
  ],
} as const;

export const B2B_CTA_EN = {
  h2: "Check construction crew availability in Copenhagen",
  text: "Send us the project location, required trades, scope and preferred start date. We will review the information and reply within 24 hours.",
  primary: { label: "Check availability" },
  image: {
    src: "/images/cases/belaegning-kyst.jpg",
    alt: "Paving and drainage under way at a coastal construction project",
  },
  crosslinks: [{ label: "Homeowner? See solutions for private customers", href: "/private" }],
} as const;
