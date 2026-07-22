/** /private — audience landing for homeowners. Restructured per
 *  docs/private-page-restructure-mapping.md (9 sections). Copy da+en. */

export const PRIVATE_META = {
  title: "Renovering for private boligejere i Storkøbenhavn — Grønt Land DK",
  description:
    "Boligrenovering, facade, terrasse, belægning og havearbejde med ét team, én plan og én ansvarlig kontakt. Få en projektvurdering — vi svarer senest næste hverdag.",
} as const;

// § 1 — Hero
export const PRIVATE_HERO = {
  h1: "Renovering og udendørsprojekter for boligejere i Storkøbenhavn",
  sub: "Fra boligrenovering og facader til terrasser, belægning og havearbejde — ét team, én plan og én ansvarlig kontakt fra start til aflevering.",
  ctas: [
    { label: "Få en projektvurdering", modal: true },
    { label: "Se private projekter", href: "/projekter" },
  ],
  trustChips: [
    "Storkøbenhavn",
    "Svar inden for én hverdag",
    "Én kontakt for alle fag",
    "CVR 45514374",
  ],
  image: {
    src: "/images/cases/havearbejde-private.png",
    alt: "Plejet have med græsplæne og beplantning",
  },
} as const;

// § 2 — Services (cards come from CMS service docs; only heading/sub here)
export const PRIVATE_SERVICES = {
  h2: "Hvad kan vi hjælpe dig med?",
  sub: "Fra enkeltopgaver til komplet renovering med flere fag — Grønt Land DK klarer både indvendige og udvendige projekter i København og Storkøbenhavn.",
} as const;

// § 3 — Completed projects (data from CMS by slug)
export const PRIVATE_PROJECTS = {
  h2: "Se, hvad vi har udført for andre boligejere",
  slugs: [
    "terrasse-og-haveomraade",
    "belaegning-ved-bolig",
    "facadeopgave",
    "betontrappe-hellerup",
  ],
  ctas: [
    { label: "Se alle projekter", href: "/projekter" },
    { label: "Åbn galleriet", href: "/galleri" },
  ],
} as const;

// § 4 — Why one contractor (problem + solution bullets)
export const PRIVATE_ONE_TEAM = {
  h2: "Ét team i stedet for flere separate håndværkere",
  problem:
    "Renovering kræver ofte murer, tømrer, maler og en specialist i udearbejde. Hyrer du dem hver for sig, står du selv med tidsplanen, kommunikationen og med at finde den skyldige, når noget bliver forsinket.",
  intro: "Med Grønt Land DK får du i stedet:",
  // Figma 3067:319 background — byte-identical to the existing om-cta photo.
  background: {
    src: "/images/om/om-cta.jpg",
    alt: "Havesti med fliser mellem stedsegrønne buske og beplantning",
  },
  items: [
    { title: "Én ansvarlig kontakt", desc: "Én person holder styr på hele projektet." },
    { title: "Fælles plan for alle fag", desc: "Alle specialister arbejder efter samme plan." },
    { title: "Koordineret tidsplan", desc: "Faserne planlægges, så de passer sammen." },
    { title: "Færre pauser mellem faser", desc: "Mindre spildtid mellem etaperne." },
    { title: "Samlet kvalitetskontrol", desc: "Én standard for hele arbejdet." },
    { title: "Fælles gennemgang", desc: "Vi tjekker resultatet sammen ved aflevering." },
  ],
} as const;

// § 6 — Process (private variant of the shared Process block)
export const PRIVATE_PROCESS = {
  h2: "En klar proces fra første besked til aflevering",
  steps: [
    { title: "Du beskriver projektet", desc: "Du sender en beskrivelse, adresse og fotos." },
    {
      title: "Vi vurderer omfanget",
      desc: "Vi fastlægger de nødvendige arbejder, materialer og fag.",
    },
    { title: "Du får plan og tilbud", desc: "Du modtager pris, omfang og en foreløbig tidsplan." },
    {
      title: "Teamet udfører arbejdet",
      desc: "Én kontakt holder dig opdateret og koordinerer fagene.",
    },
    {
      title: "Gennemgang og aflevering",
      desc: "Vi tjekker resultatet sammen med dig og afleverer projektet.",
    },
  ],
  cta: { label: "Få en projektvurdering", href: "/kontakt" },
} as const;

// § 7 — Reviews. PLACEHOLDER data seeded from the old grontland.dk
// "Det siger kunderne" quotes (anonymized: no real names/links).
// TODO(client): replace with real, verifiable reviews (name + link).
export const PRIVATE_REVIEWS = {
  h2: "Hvad boligejere siger om at arbejde med os",
  placeholder: true,
  items: [
    {
      quote: "God kommunikation hele vejen, og arbejdet blev afleveret som aftalt.",
      name: "Kunde (placeholder)",
      city: "Tårnby",
      service: "Terrasseprojekt",
      href: null,
    },
    {
      quote: "Vi fik en klar plan og kunne stole på tidsplanen.",
      name: "Kunde (placeholder)",
      city: "Kastrup",
      service: "Renovering",
      href: null,
    },
    {
      quote: "Professionelt forløb uden unødvendige overraskelser.",
      name: "Kunde (placeholder)",
      city: "København",
      service: "Projekt",
      href: null,
    },
  ],
} as const;

// § 8 — FAQ (9 questions)
export const PRIVATE_FAQ = {
  h2: "Spørgsmål før du går i gang med renoveringen",
  items: [
    {
      q: "Er den første vurdering gratis?",
      a: "Ja. Du sender en kort beskrivelse, og vi vurderer opgaven uforpligtende og gratis.",
    },
    { q: "Hvilke områder dækker I?", a: "København og Storkøbenhavn." },
    {
      q: "Hvordan beregnes den endelige pris?",
      a: "Ud fra opgavens omfang, materialer og adgangsforhold. Du får en fast ramme, før arbejdet går i gang.",
    },
    {
      q: "Kan I klare flere fag i ét projekt?",
      a: "Ja. Vi samler fagene i én plan med én ansvarlig kontakt.",
    },
    {
      q: "Hvem køber og leverer materialerne?",
      a: "Det gør vi som udgangspunkt, medmindre du selv ønsker at levere bestemte materialer.",
    },
    {
      q: "Hvor hurtigt kan I gå i gang?",
      a: "Det afhænger af omfang og sæson. Vi giver en realistisk opstartsdato sammen med tilbuddet.",
    },
    {
      q: "Rydder I op og fjerner byggeaffald?",
      a: "Ja. Oprydning og bortskaffelse er en del af planen.",
    },
    {
      q: "Hvordan godkendes ændringer undervejs?",
      a: "Ændringer aftales med dig — både omfang og pris — før de udføres.",
    },
    {
      q: "Hvad sker der, hvis der findes fejl efter aflevering?",
      a: "Kontakt os, så udbedrer vi fejl, der skyldes udførelsen.",
    },
  ],
} as const;

// § 9 — Final CTA (phone comes from CMS siteSettings via CtaBand)
export const PRIVATE_CTA = {
  h2: "Fortæl os om dit projekt",
  text: "Send en kort beskrivelse og et par billeder. Vi vurderer projektet og kontakter dig senest næste hverdag.",
  primary: { label: "Få en projektvurdering", href: "/kontakt" },
  crosslinks: [],
  // Figma 3067:369
  image: {
    src: "/images/cases/cta-private.jpg",
    alt: "Anlægsgartner i færd med havearbejde ved plæne og staudebed",
  },
} as const;

/* ------------------------------------------------------------------ English */

export const PRIVATE_META_EN = {
  title: "Renovation for homeowners in Greater Copenhagen — Grønt Land DK",
  description:
    "Home renovation, façades, terraces, paving and garden work with one team, one plan and one responsible contact. Get a project assessment — we reply by the next business day.",
} as const;

export const PRIVATE_HERO_EN = {
  h1: "Renovation and outdoor projects for homeowners in Greater Copenhagen",
  sub: "From home renovation and façades to terraces, paving and garden work — one team, one plan and one responsible contact from start to handover.",
  ctas: [
    { label: "Get a project assessment", modal: true },
    { label: "View private projects", href: "/projekter" },
  ],
  trustChips: [
    "Greater Copenhagen",
    "Reply within one business day",
    "One contact for all trades",
    "CVR 45514374",
  ],
  image: {
    src: "/images/cases/havearbejde-private.png",
    alt: "A well-kept garden with lawn and planting",
  },
} as const;

export const PRIVATE_SERVICES_EN = {
  h2: "What can we help you with?",
  sub: "From individual jobs to complete renovation involving several trades — Grønt Land DK handles both indoor and outdoor projects in Copenhagen and Greater Copenhagen.",
} as const;

export const PRIVATE_PROJECTS_EN = {
  h2: "See what we have completed for other homeowners",
  slugs: [
    "terrasse-og-haveomraade",
    "belaegning-ved-bolig",
    "facadeopgave",
    "betontrappe-hellerup",
  ],
  ctas: [
    { label: "See all projects", href: "/projekter" },
    { label: "Open the gallery", href: "/galleri" },
  ],
} as const;

export const PRIVATE_ONE_TEAM_EN = {
  h2: "One team instead of several separate contractors",
  problem:
    "Renovation often needs a mason, a carpenter, a painter and an outdoor-work specialist. Hire them separately and you are left managing the schedule, the communication and finding who is at fault when something is delayed.",
  intro: "With Grønt Land DK you get instead:",
  // Figma 3067:319 background — byte-identical to the existing om-cta photo.
  background: {
    src: "/images/om/om-cta.jpg",
    alt: "Garden path with paving between evergreen shrubs and planting",
  },
  items: [
    { title: "One responsible contact", desc: "One person keeps track of the whole project." },
    { title: "A shared plan for all trades", desc: "Every specialist works to the same plan." },
    { title: "A coordinated schedule", desc: "The phases are planned to fit together." },
    { title: "Fewer gaps between phases", desc: "Less downtime between stages." },
    { title: "Single quality control", desc: "One standard across the whole job." },
    { title: "Joint inspection", desc: "We check the result together at handover." },
  ],
} as const;

export const PRIVATE_PROCESS_EN = {
  h2: "A clear process from the first message to handover",
  steps: [
    { title: "You describe the project", desc: "You send a description, address and photos." },
    {
      title: "We assess the scope",
      desc: "We determine the required work, materials and trades.",
    },
    {
      title: "You receive a plan and quote",
      desc: "You get the price, scope and a preliminary schedule.",
    },
    {
      title: "The team carries out the work",
      desc: "One contact keeps you updated and coordinates the trades.",
    },
    {
      title: "Final inspection and handover",
      desc: "We check the result together with you and hand over the project.",
    },
  ],
  cta: { label: "Get a project assessment", href: "/kontakt" },
} as const;

export const PRIVATE_REVIEWS_EN = {
  h2: "What homeowners say about working with us",
  placeholder: true,
  items: [
    {
      quote: "Good communication throughout and the work was delivered as agreed.",
      name: "Customer (placeholder)",
      city: "Tårnby",
      service: "Terrace project",
      href: null,
    },
    {
      quote: "We got a clear plan and could rely on the timeline.",
      name: "Customer (placeholder)",
      city: "Kastrup",
      service: "Renovation",
      href: null,
    },
    {
      quote: "A professional process without unnecessary surprises.",
      name: "Customer (placeholder)",
      city: "Copenhagen",
      service: "Project",
      href: null,
    },
  ],
} as const;

export const PRIVATE_FAQ_EN = {
  h2: "Questions before starting a renovation",
  items: [
    {
      q: "Is the initial assessment free?",
      a: "Yes. You send a short description and we assess the job free and without obligation.",
    },
    { q: "Which areas do you cover?", a: "Copenhagen and Greater Copenhagen." },
    {
      q: "How is the final price calculated?",
      a: "From the scope of the job, materials and access. You get a fixed frame before work begins.",
    },
    {
      q: "Can you handle several trades in one project?",
      a: "Yes. We combine the trades in one plan with one responsible contact.",
    },
    {
      q: "Who purchases and delivers the materials?",
      a: "We do by default, unless you prefer to supply certain materials yourself.",
    },
    {
      q: "How soon can the work begin?",
      a: "It depends on scope and season. We give a realistic start date together with the quote.",
    },
    {
      q: "Do you clean up and remove construction waste?",
      a: "Yes. Cleanup and disposal are part of the plan.",
    },
    {
      q: "How are changes during the project approved?",
      a: "Changes — both scope and price — are agreed with you before they are carried out.",
    },
    {
      q: "What happens if defects are found after handover?",
      a: "Contact us and we put right any defects caused by the workmanship.",
    },
  ],
} as const;

export const PRIVATE_CTA_EN = {
  h2: "Tell us about your project",
  text: "Send a short description and a few photos. We will assess the project and contact you by the next business day.",
  primary: { label: "Get a project assessment", href: "/kontakt" },
  crosslinks: [],
  // Figma 3067:369
  image: {
    src: "/images/cases/cta-private.jpg",
    alt: "Landscaper doing garden work by a lawn and perennial bed",
  },
} as const;
