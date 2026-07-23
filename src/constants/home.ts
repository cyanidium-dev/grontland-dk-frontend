/**
 * Home-page copy — Danish, verbatim from the Figma "Главная2" (#1018:77) design
 * and the PDF spec. Images point at /public/images placeholders until the real
 * assets are exported. Section ORDER (per Структура главной страницы.md):
 *   Hero → Services → Audiences → OneTeam → Process → Projects
 */

export const NAV_MENU = [
  { label: "Forside", href: "/" },
  { label: "Private kunder", href: "/private" },
  { label: "Entreprenører", href: "/entreprenorer" },
  { label: "Projekter", href: "/projekter" },
  { label: "Galleri", href: "/galleri" },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

// Client taxonomy (2026-07): facade work is grouped under murerarbejde
// (masonry/brick), and cleaning work (rengøring) is added for private homes.
export const SERVICES_MENU = [
  { label: "Havearbejde", href: "/ydelser/havearbejde" },
  { label: "Belægningsarbejde", href: "/ydelser/belaegningsarbejde" },
  { label: "Murerarbejde", href: "/ydelser/murerarbejde" },
  { label: "Malerservice", href: "/ydelser/malerservice" },
  { label: "Tømrerarbejde", href: "/ydelser/tomrerarbejde" },
  { label: "Totalentreprise", href: "/ydelser/totalentreprise" },
  { label: "Demonteringsarbejde", href: "/ydelser/demonteringsarbejde" },
  { label: "Rengøringsarbejde", href: "/ydelser/rengoringsarbejde" },
] as const;

/* Footer — Figma #3032:171. Services list is footer-only (Facadearbejde → murer). */
export const FOOTER = {
  blurb: "Renovering og byggeopgaver i København",
  menuTitle: "Menu",
  servicesTitle: "Ydelser",
  contactTitle: "Kontakt",
  contact: ["København og Storkøbenhavn", "CVR 45514374"] as const,
  copyright: "© Grønt Land DK",
  credit: {
    by: "Created by",
    name: "Code-site.art",
    href: "https://code-site.art",
  },
  menu: [
    { label: "Forside", href: "/" },
    { label: "Ydelser", href: "/ydelser" },
    { label: "Private kunder", href: "/private" },
    { label: "Entreprenører", href: "/entreprenorer" },
    { label: "Projekter", href: "/projekter" },
    { label: "Galleri", href: "/galleri" },
    { label: "Om os", href: "/om-os" },
    { label: "Kontakt", href: "/kontakt" },
  ] as const,
  // Mirrors SERVICES_MENU (facade folded under murer, so no separate row).
  services: [
    { label: "Havearbejde", href: "/ydelser/havearbejde" },
    { label: "Belægningsarbejde", href: "/ydelser/belaegningsarbejde" },
    { label: "Murerarbejde", href: "/ydelser/murerarbejde" },
    { label: "Malerservice", href: "/ydelser/malerservice" },
    { label: "Tømrerarbejde", href: "/ydelser/tomrerarbejde" },
    { label: "Totalentreprise", href: "/ydelser/totalentreprise" },
    { label: "Demonteringsarbejde", href: "/ydelser/demonteringsarbejde" },
    { label: "Rengøringsarbejde", href: "/ydelser/rengoringsarbejde" },
  ] as const,
} as const;

export const HERO = {
  h1: "Komplet renovering og byggearbejde i København",
  sub: "Grønt Land DK hjælper private boligejere og entreprenører med renovering, facadearbejde, belægning, tømrerarbejde, murerarbejde, malerarbejde og havearbejde i København og Storkøbenhavn.",
  ctaPrimary: { label: "Få et tilbud", href: "/kontakt" },
  ctaSecondary: { label: "Se ydelser", href: "/ydelser" },
  // Large full-bleed image on the right side of the hero.
  image: { src: "/images/hero/hero-main.png", alt: "Anlagt have med stenbed og beplantning" },
  // Bottom-left auto image slider (3 overlapping landscape photos).
  slider: [
    { src: "/images/hero/hero-photo-1.png", alt: "Klippede hække og beplantning i anlagt have" },
    { src: "/images/hero/hero-photo-2.png", alt: "Belægning og haveanlæg ved bolig" },
    { src: "/images/hero/hero-photo-3.png", alt: "Haveområde med beplantning og sten" },
  ],
} as const;

export const AUDIENCES = {
  h2: "Hvem hjælper vi?",
  cards: [
    {
      title: "For private kunder",
      text: "Til boligejere, der har brug for renovering, terrasse, facade, belægning, havearbejde eller andre opgaver omkring boligen.",
      cta: { label: "Se løsninger for private kunder", href: "/private" },
      image: "/images/cases/havearbejde-private.png",
      imageAlt: "Plejet have med græsplæne og beplantning",
      dark: false,
    },
    {
      title: "For entreprenører",
      text: "Til entreprenører og projektledere, der har brug for et stabilt team til delopgaver, ekstra kapacitet eller praktisk udførelse på byggeprojekter.",
      cta: { label: "Se samarbejde for entreprenører", href: "/entreprenorer" },
      image: "/images/cases/fundament-b2b.png",
      imageAlt: "Armeret fundament klargjort til støbning på byggeplads",
      dark: true,
    },
  ],
} as const;

export const ONETEAM = {
  h2: "Flere fag samlet i én plan",
  intro:
    "Når murerarbejde, tømrerarbejde, maling, belægning og udearealer planlægges samlet, bliver processen lettere for kunden. Du får færre kontaktpersoner, mindre koordinering og en tydeligere vej fra start til aflevering.",
  background: {
    src: "/images/cases/oneteam-bg.jpg",
    alt: "Anlagt græsplæne med stenbelægning og beplantning",
  },
  cards: [
    { title: "Én kontaktperson", desc: "Du ved, hvem der har ansvar for projektet." },
    { title: "Mindre koordinering", desc: "Du slipper for at styre flere håndværkere separat." },
    { title: "Samlet tidsplan", desc: "Arbejdet planlægges på tværs af fag fra starten." },
    { title: "Bedre aflevering", desc: "Fagene arbejder efter samme standard og samme mål." },
  ],
} as const;

// Full service set. Facade work is folded into Murerarbejde, and
// Rengøringsarbejde (cleaning, private homes) is added — per client.
// Some card images are reused where a dedicated Figma asset doesn't exist.
export const SERVICES = {
  h2: "Vores ydelser",
  sub: "Vi udfører både indvendige og udvendige opgaver - fra havearbejde og belægning til facade, maling, tømrerarbejde, murerarbejde og totalentreprise.",
  cta: { label: "Se alle ydelser", href: "/ydelser" },
  // Card items come from CMS service docs (getServiceCards).
} as const;

/* Project cases live in constants/projects.ts (listing + detail + home cards). */

export const PROCESS = {
  h2: "Sådan foregår arbejdet",
  cta: { label: "Start med en kort besked", href: "/kontakt" },
  steps: [
    {
      title: "Du sender en forespørgsel",
      desc: "Du beskriver opgaven, lokationen og kan sende billeder, hvis det er relevant.",
    },
    {
      title: "Vi vurderer opgaven",
      desc: "Vi afklarer omfang, materialer, adgang, tidsramme og nødvendige fag.",
    },
    { title: "Du får et tilbud", desc: "Du får en tydelig ramme for pris, proces og næste skridt." },
    {
      title: "Vi udfører arbejdet",
      desc: "Teamet arbejder efter den aftalte plan med løbende kommunikation.",
    },
    { title: "Vi afleverer projektet", desc: "Opgaven gennemgås, og resultatet afleveres ordentligt." },
  ],
} as const;

export const MARQUEE_WORDS = [
  "GRØNT LAND DK",
  "RENOVERING",
  "BYGGEARBEJDE",
  "KØBENHAVN",
] as const;

// Photo archive → links to the standalone /galleri page. Photos + filter
// taxonomy come from CMS galleryCategory docs (see lib/sanity/queries).
export const GALLERY = {
  h2: "Galleri fra udførte opgaver",
  sub: "Se billeder fra facade, belægning, renovering, havearbejde, tømrerarbejde og andre opgaver.",
  cta: { label: "Åbn galleri", href: "/galleri" },
} as const;

export const ABOUT = {
  h2: "Om Grønt Land DK",
  text: "Grønt Land DK arbejder med renovering, byggeopgaver og udearealer i København og Storkøbenhavn. Teamet samler flere fag under én plan, så kunden får en mere enkel proces, tydeligere ansvar og bedre sammenhæng fra start til aflevering.",
  facts: [
    { label: "Arbejdsområde", value: "København og Storkøbenhavn" },
    { label: "Kundetyper", value: "private kunder og entreprenører" },
    { label: "Fokus", value: "renovering, facade, belægning, havearbejde og totalentreprise" },
    { label: "Princip", value: "klare aftaler og ordentlig aflevering" },
  ],
  team: {
    h3: "Et team med ansvar på pladsen",
    text: "Hos Grønt Land DK møder du fagpersoner, der forstår både planlægning og praktisk udførelse. Teamet dækker flere fagområder og arbejder efter en samlet plan.",
    trades: ["Murerarbejde", "Tømrerarbejde", "Malerarbejde", "Belægning", "Havearbejde"],
  },
  cta: { label: "Læs mere om os", href: "/om-os" },
  image: "/images/cases/projekt-terrasse.png",
  imageAlt: "Bærende konstruktion til træterrasse under opbygning",
} as const;

// Short, natural SEO block placed just before the FAQ (per PDF spec: ~120-180
// words, not a separate SEO wall).
export const SEOTEXT = {
  h2: "Renovering og byggeopgaver i København",
  text: "Grønt Land DK er en entreprenørvirksomhed, der udfører renovering og byggeopgaver i København og Storkøbenhavn — for både private boligejere og entreprenører. Vi arbejder med havearbejde, belægningsarbejde, facadearbejde, malerservice, tømrerarbejde, murerarbejde, demonteringsarbejde og totalentreprise, hvor flere fag samles i én plan med én ansvarlig kontakt. Uanset om opgaven er en ny terrasse, en renoveret facade, ny belægning i indkørslen eller en samlet renovering af boligen, planlægger vi arbejdet fra start til aflevering med en tydelig tidsramme og en klar aftale. Entreprenører bruger os som et stabilt team til delopgaver og ekstra kapacitet på byggeprojekter. Send en kort beskrivelse af din opgave — så vurderer vi den og vender tilbage med næste skridt.",
  image: "/images/cases/havearbejde-private.png",
  imageAlt: "Plejet have med græsplæne og beplantning",
} as const;

export const FAQ = {
  h2: "Ofte stillede spørgsmål",
  items: [
    {
      q: "Arbejder I både for private og entreprenører?",
      a: "Ja, Grønt Land DK hjælper både private boligejere og entreprenører med renovering, byggeopgaver og udearealer.",
    },
    { q: "Hvilke områder dækker I?", a: "Vi arbejder i København og Storkøbenhavn." },
    {
      q: "Hvilke typer arbejde udfører I?",
      a: "Vi udfører blandt andet havearbejde, belægningsarbejde, facadearbejde, malerservice, tømrerarbejde, murerarbejde og totalentreprise.",
    },
    {
      q: "Kan I håndtere flere fag i samme projekt?",
      a: "Ja, flere fag kan samles i én plan, så processen bliver lettere at styre for kunden.",
    },
    {
      q: "Hvordan får jeg et tilbud?",
      a: "Send en kort beskrivelse af opgaven. Hvis det er relevant, kan du også sende billeder. Herefter vurderer vi opgaven og vender tilbage med næste skridt.",
    },
    {
      q: "Kan I hjælpe som samarbejdspartner for entreprenører?",
      a: "Ja, Grønt Land DK kan hjælpe entreprenører med delopgaver, ekstra kapacitet og praktisk udførelse på byggeprojekter.",
    },
  ],
} as const;

// Final lead form. View-only shell (no submit handling yet), same as the other
// SHELL sections; fields match the PDF spec.
export const QUOTE_FORM = {
  h2: "Få et tilbud på dit projekt",
  h2Lines: ["Få et tilbud på dit", "projekt"] as const,
  sub: "Send en kort beskrivelse af opgaven, så vender vi tilbage med næste skridt.",
  fields: { name: "Navn", phone: "Telefon", email: "E-mail" },
  whoLabel: "Jeg er:",
  whoOptions: ["Privatkunde", "Entreprenør / virksomhed"],
  taskLabel: "Hvilken type opgave?",
  taskPlaceholder: "Vælg opgavetype",
  taskOptions: [
    "Havearbejde",
    "Belægningsarbejde",
    "Facadearbejde",
    "Malerservice",
    "Tømrerarbejde",
    "Murerarbejde",
    "Totalentreprise",
    "Andet",
  ],
  message: "Besked",
  upload: "Upload billeder",
  uploadHint: "Træk billeder hertil, eller klik for at vælge",
  button: "Send forespørgsel",
  micro: "Vi vender tilbage med en klar næste handling.",
  cta: { label: "Kontakt os" },
  image: "/images/cases/quote-cta-band.jpg",
  imageAlt: "Nybelagte betontrin foran bolig med hvid balustrade",
  reassurance: [
    { label: "Svar", value: "Vi svarer inden 24 timer" },
    { label: "Område", value: "København og Storkøbenhavn" },
    { label: "CVR", value: "45514374" },
  ],
} as const;

/* ---------------------------------------------------------------------------
 * English copy (local pages keep their copy in constants per client decision;
 * sections pick da/en via the request locale). Structure mirrors the da
 * consts above.
 * ------------------------------------------------------------------------ */

export const NAV_MENU_EN = [
  { label: "Home", href: "/" },
  { label: "Private customers", href: "/private" },
  { label: "Contractors", href: "/entreprenorer" },
  { label: "Projects", href: "/projekter" },
  { label: "Gallery", href: "/galleri" },
  { label: "About us", href: "/om-os" },
  { label: "Contact", href: "/kontakt" },
] as const;

export const SERVICES_MENU_EN = [
  { label: "Garden work", href: "/ydelser/havearbejde" },
  { label: "Paving", href: "/ydelser/belaegningsarbejde" },
  { label: "Masonry", href: "/ydelser/murerarbejde" },
  { label: "Painting", href: "/ydelser/malerservice" },
  { label: "Carpentry", href: "/ydelser/tomrerarbejde" },
  { label: "Turnkey renovation", href: "/ydelser/totalentreprise" },
  { label: "Demolition & strip-out", href: "/ydelser/demonteringsarbejde" },
  { label: "Cleaning", href: "/ydelser/rengoringsarbejde" },
] as const;

export const FOOTER_EN = {
  blurb: "Renovation and construction work in Copenhagen",
  menuTitle: "Menu",
  servicesTitle: "Services",
  contactTitle: "Contact",
  contact: ["Copenhagen and Greater Copenhagen", "CVR 45514374"] as const,
  copyright: "© Grønt Land DK",
  credit: {
    by: "Created by",
    name: "Code-site.art",
    href: "https://code-site.art",
  },
  menu: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/ydelser" },
    { label: "Private customers", href: "/private" },
    { label: "Contractors", href: "/entreprenorer" },
    { label: "Projects", href: "/projekter" },
    { label: "Gallery", href: "/galleri" },
    { label: "About us", href: "/om-os" },
    { label: "Contact", href: "/kontakt" },
  ] as const,
  services: SERVICES_MENU_EN,
} as const;

export const HERO_EN = {
  h1: "Complete renovation and construction work in Copenhagen",
  sub: "Grønt Land DK helps homeowners and contractors with renovation, façade work, paving, carpentry, masonry, painting and garden work in Copenhagen and Greater Copenhagen.",
  ctaPrimary: { label: "Get a quote", href: "/kontakt" },
  ctaSecondary: { label: "See services", href: "/ydelser" },
  image: { src: "/images/hero/hero-main.png", alt: "Landscaped garden with stone bed and planting" },
  slider: [
    { src: "/images/hero/hero-photo-1.png", alt: "Trimmed hedges and planting in a landscaped garden" },
    { src: "/images/hero/hero-photo-2.png", alt: "Paving and garden landscaping by a home" },
    { src: "/images/hero/hero-photo-3.png", alt: "Garden area with planting and stone" },
  ],
} as const;

export const AUDIENCES_EN = {
  h2: "Who do we help?",
  cards: [
    {
      title: "For private customers",
      text: "For homeowners who need renovation, a deck, a facade, paving, garden work or other jobs around the home.",
      cta: { label: "See solutions for private customers", href: "/private" },
      image: "/images/cases/havearbejde-private.png",
      imageAlt: "A well-kept garden with lawn and planting",
      dark: false,
    },
    {
      title: "For contractors",
      text: "For contractors and project managers who need a stable team for work packages, extra capacity or practical execution on construction projects.",
      cta: { label: "See collaboration for contractors", href: "/entreprenorer" },
      image: "/images/cases/fundament-b2b.png",
      imageAlt: "Reinforced foundation ready for casting on a construction site",
      dark: true,
    },
  ],
} as const;

export const ONETEAM_EN = {
  h2: "Several trades in one plan",
  intro:
    "When masonry, carpentry, painting, paving and outdoor areas are planned together, the process gets easier for the client. Fewer contacts, less coordination and a clearer path from start to handover.",
  background: {
    src: "/images/cases/oneteam-bg.jpg",
    alt: "Landscaped lawn with stone paving and planting",
  },
  cards: [
    { title: "One contact person", desc: "You know who is responsible for the project." },
    { title: "Less coordination", desc: "No managing several tradespeople separately." },
    { title: "One schedule", desc: "The work is planned across the trades from the start." },
    { title: "Better handover", desc: "The trades work to the same standard and the same goal." },
  ],
} as const;

export const SERVICES_EN = {
  h2: "Our services",
  sub: "We take on interior and exterior work — from garden work and paving to facades, painting, carpentry, masonry and turnkey renovation.",
  cta: { label: "See all services", href: "/ydelser" },
} as const;

export const PROCESS_EN = {
  h2: "How the work proceeds",
  cta: { label: "Start with a short message", href: "/kontakt" },
  steps: [
    {
      title: "You send an inquiry",
      desc: "Describe the task and location, and attach photos if relevant.",
    },
    {
      title: "We assess the task",
      desc: "We clarify scope, materials, access, timeline and required trades.",
    },
    { title: "You get a quote", desc: "A clear frame for price, process and next steps." },
    {
      title: "We carry out the work",
      desc: "The team follows the agreed plan with ongoing communication.",
    },
    { title: "We hand over the project", desc: "The work is reviewed and handed over properly." },
  ],
} as const;

export const MARQUEE_WORDS_EN = [
  "GRØNT LAND DK",
  "RENOVATION",
  "CONSTRUCTION",
  "COPENHAGEN",
] as const;

export const GALLERY_EN = {
  h2: "Gallery of completed work",
  sub: "See photos of facades, paving, renovation, garden work, carpentry and more.",
  cta: { label: "Open the gallery", href: "/galleri" },
} as const;

export const ABOUT_EN = {
  h2: "About Grønt Land DK",
  text: "Grønt Land DK works with renovation, construction and outdoor areas in Copenhagen and Greater Copenhagen. The team brings several trades into one plan, so the client gets a simpler process, clearer responsibility and better coherence from start to handover.",
  facts: [
    { label: "Service area", value: "Copenhagen and Greater Copenhagen" },
    { label: "Customer types", value: "private customers and contractors" },
    { label: "Focus", value: "renovation, facades, paving, garden work and turnkey jobs" },
    { label: "Principle", value: "clear agreements and proper handover" },
  ],
  team: {
    h3: "A team that takes responsibility on site",
    text: "At Grønt Land DK you meet tradespeople who understand both planning and practical execution. The team covers several trades and works to one shared plan.",
    trades: ["Masonry", "Carpentry", "Painting", "Paving", "Garden work"],
  },
  cta: { label: "Read more about us", href: "/om-os" },
  image: "/images/cases/projekt-terrasse.png",
  imageAlt: "Load-bearing structure for a timber deck under construction",
} as const;

export const SEOTEXT_EN = {
  h2: "Renovation and construction work in Copenhagen",
  text: "Grønt Land DK is a contracting company carrying out renovation and construction work in Copenhagen and Greater Copenhagen — for homeowners and contractors alike. We work with garden work, paving, facades, painting, carpentry, masonry, strip-out and turnkey renovation, where several trades come together in one plan with one responsible contact. Whether the job is a new deck, a renovated facade, new paving for the driveway or a full renovation of the home, we plan the work from start to handover with a clear timeline and a clear agreement. Contractors use us as a stable team for work packages and extra capacity on construction projects. Send a short description of your job — we assess it and come back with the next step.",
  image: "/images/cases/havearbejde-private.png",
  imageAlt: "A well-kept garden with lawn and planting",
} as const;

export const FAQ_EN = {
  h2: "Frequently asked questions",
  items: [
    {
      q: "Do you work for both homeowners and contractors?",
      a: "Yes, Grønt Land DK helps both private homeowners and contractors with renovation, construction work and outdoor areas.",
    },
    { q: "Which areas do you cover?", a: "We work in Copenhagen and Greater Copenhagen." },
    {
      q: "What kinds of work do you do?",
      a: "Garden work, paving, facade work, painting, carpentry, masonry and turnkey renovation, among others.",
    },
    {
      q: "Can you handle several trades in one project?",
      a: "Yes, several trades can go into one plan, which makes the process much easier to manage for the client.",
    },
    {
      q: "How do I get a quote?",
      a: "Send a short description of the job — with photos if relevant. We assess the task and come back with the next step.",
    },
    {
      q: "Can you support contractors as a partner?",
      a: "Yes, Grønt Land DK helps contractors with work packages, extra capacity and practical execution on construction projects.",
    },
  ],
} as const;

export const QUOTE_FORM_EN = {
  h2: "Get a quote for your project",
  h2Lines: ["Get a quote for", "your project"] as const,
  sub: "Send a short description of the job, and we come back with the next step.",
  fields: { name: "Name", phone: "Phone", email: "Email" },
  whoLabel: "I am:",
  whoOptions: ["A private customer", "A contractor / business"],
  taskLabel: "What kind of job?",
  taskPlaceholder: "Select job type",
  taskOptions: [
    "Garden work",
    "Paving",
    "Facade work",
    "Painting",
    "Carpentry",
    "Masonry",
    "Turnkey renovation",
    "Other",
  ],
  message: "Message",
  upload: "Upload photos",
  uploadHint: "Drag photos here, or click to choose",
  button: "Send inquiry",
  micro: "We reply with a clear next step.",
  cta: { label: "Contact us" },
  image: "/images/cases/quote-cta-band.jpg",
  imageAlt: "New concrete steps with a white balustrade",
  reassurance: [
    { label: "Reply", value: "We reply within 24 hours" },
    { label: "Area", value: "Copenhagen and Greater Copenhagen" },
    { label: "CVR", value: "45514374" },
  ],
} as const;
