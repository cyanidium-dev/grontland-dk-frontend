/** /om-os — copy per docs/content/om-os.md (DA). About + Team merged per client. */

export const OM_META = {
  title: "Om Grønt Land DK — entreprenørvirksomhed i København",
  description:
    "Mød teamet bag Grønt Land DK. Vi samler murer-, tømrer-, maler-, belægnings- og havearbejde i én plan — med klare aftaler og ordentlig aflevering i København og Storkøbenhavn.",
} as const;

// H1 rewritten per feedback: "Entreprenørvirksomhed" (21 chars) overflowed the
// copy column; the keyword moved into the sub. No eyebrow label on this hero.
export const OM_HERO = {
  h1: "Entreprenør i København — flere fag under samme tag",
  sub: "Grønt Land DK er en entreprenørvirksomhed, der udfører renovering, byggeopgaver og udearealer i København og Storkøbenhavn — for private boligejere og entreprenører.",
  ctas: [
    { label: "Få et tilbud", href: "/kontakt" },
    { label: "Se vores projekter", href: "/projekter" },
  ],
  // Figma feedback #3035:127 — villa entrance, gate + cobblestone path.
  image: {
    src: "/images/om/om-hero.jpg",
    alt: "Indgang med smedejernslåge, brostensbelagt sti og klippede hække ved hvid villa",
  },
} as const;

export const OM_INTRO = {
  h2: "Hvem er vi?",
  // Figma feedback #3035:130 — polished natural-stone interior wall; the fact
  // chips sit on top of this photo (mirrored home About layout).
  image: {
    src: "/images/om/om-intro.jpg",
    alt: "Vægbeklædning i poleret natursten monteret indendørs",
  },
  text: "Grønt Land DK er en entreprenørvirksomhed, der arbejder med indvendige og udvendige opgaver — fra totalrenovering og murerarbejde til belægning, havearbejde og facader. Hos os får projektet én ansvarlig plan i stedet for flere adskilte håndværkere. Vi tager ejerskab for opgaven, holder tæt dialog undervejs og afleverer til den aftalte tid og pris. Det er den måde, vi ønsker at drive håndværk på: ordentligt arbejde, klare aftaler og et samarbejde, hvor kunden er i centrum.",
  facts: [
    { label: "Arbejdsområde", value: "København og Storkøbenhavn" },
    { label: "Kundetyper", value: "private kunder og entreprenører" },
    { label: "Fag", value: "murer, tømrer, maler, belægning, havearbejde, totalentreprise" },
    { label: "Princip", value: "klare aftaler og ordentlig aflevering" },
  ],
} as const;

export const OM_VALUES = {
  h2: "Det arbejder vi efter",
  items: [
    {
      title: "Kvalitet",
      desc: "Vi går ikke på kompromis med udførelsen. Korrekt forarbejde og ren finish er en del af opgaven — ikke et tilvalg.",
    },
    {
      title: "Samarbejde",
      desc: "Fagene planlægges sammen fra starten. Det giver færre overraskelser og en mere enkel proces for kunden.",
    },
    {
      title: "Kundefokus",
      desc: "Tæt dialog undervejs, én kontaktperson og en aflevering, der bliver gennemgået sammen med dig.",
    },
  ],
} as const;

export const OM_TEAM = {
  h2: "Et fast team med klar ansvarsfordeling",
  intro:
    "Vi er et team af specialister inden for forskellige fagområder. Hvert område ledes af en erfaren ansvarlig, der står for kvaliteten fra forberedelse til aflevering.",
  members: [
    {
      name: "Oleg",
      role: "Ansvarlig for finish og tømrerarbejde",
      // Work photos per area (chat-export gallery) until portraits arrive.
      image: { src: "/images/gallery/tomrer-2.jpg", alt: "Ny træterrasse under opbygning ved moderne villa" },
      trades: [
        "Spartling, maling og overflader",
        "Fliser, køkken og bad",
        "Gulve i træ og fliser",
        "Terrasser, hegn og konstruktioner",
      ],
      link: { label: "Se tømrerarbejde", href: "/ydelser/tomrerarbejde" },
    },
    {
      name: "Andrej",
      role: "Ansvarlig for belægning og beton",
      image: { src: "/images/gallery/belaegning-3.jpg", alt: "Teglbelægning i sildebensmønster ved indgang" },
      trades: [
        "Fliser, belægning og natursten",
        "Trapper, stier og indkørsler",
        "Dræn og afvanding",
        "Betonarbejde, murer og isolering",
      ],
      link: { label: "Se belægningsarbejde", href: "/ydelser/belaegningsarbejde" },
    },
    {
      name: "Aleksandr",
      role: "Ansvarlig for landskabsarbejde",
      note: "Over 25 års erfaring",
      image: { src: "/images/gallery/have-3.jpg", alt: "Klippede hække og plejet græsplæne" },
      trades: [
        "Terrænregulering",
        "Græs — såning eller rullegræs",
        "Beplantning og pleje",
        "Design af udearealer",
      ],
      link: { label: "Se havearbejde", href: "/ydelser/havearbejde" },
    },
  ],
} as const;

export const OM_ONEPLAN = {
  h2: "Flere fag — én plan",
  text: "Fordi teamet dækker flere fagområder, kan en opgave planlægges samlet: forberedelse og konstruktion, oprydning og bortskaffelse, og til sidst landskabsarbejdet. Du slipper for selv at finde, koordinere og følge op på flere håndværkere.",
  // Figma feedback #3035:160 — concrete stair + balustrade + stone paving.
  background: {
    src: "/images/om/om-oneplan.jpg",
    alt: "Nystøbt betontrappe med balustrade og naturstensbelægning ved villa",
  },
  ctas: [
    { label: "Sådan foregår arbejdet", href: "#proces" },
    { label: "Se udførte projekter", href: "/projekter" },
  ],
} as const;

// Photos come from CMS galleryCategory docs (2 per service) via OmGallery.
export const OM_GALLERY = {
  h2: "Se resultatet af vores arbejde",
  sub: "Billeder fra facade, belægning, renovering og havearbejde.",
  cta: { label: "Åbn galleriet", href: "/galleri" },
} as const;

export const OM_CTA = {
  h2: "Skal vi kigge på din opgave?",
  text: "Send en kort beskrivelse — så vurderer vi opgaven og vender tilbage senest næste hverdag.",
  primary: { label: "Få et tilbud", href: "/kontakt" },
  // Figma feedback #3035:186 — dark paved garden path along hedges.
  image: {
    src: "/images/om/om-cta.jpg",
    alt: "Havegang i mørk belægning langs klippede hække og bede",
  },
  crosslinks: [
    { label: "For private kunder", href: "/private" },
    { label: "For entreprenører", href: "/entreprenorer" },
  ],
} as const;

/* English copy (docs/content/om-os.md EN) — sections pick da/en by locale. */

export const OM_META_EN = {
  title: "About Grønt Land DK — contracting company in Copenhagen",
  description:
    "Meet the team behind Grønt Land DK. We combine masonry, carpentry, painting, paving and garden work in one plan — with clear agreements and proper handover in Greater Copenhagen.",
} as const;

export const OM_HERO_EN = {
  h1: "Contractor in Copenhagen — several trades under one roof",
  sub: "Grønt Land DK is a contracting company carrying out renovation, construction work and outdoor projects in Greater Copenhagen — for homeowners and contractors.",
  ctas: [
    { label: "Get a quote", href: "/kontakt" },
    { label: "See our projects", href: "/projekter" },
  ],
  image: {
    src: "/images/om/om-hero.jpg",
    alt: "Entrance with wrought-iron gate, cobblestone path and trimmed hedges by a white villa",
  },
} as const;

export const OM_INTRO_EN = {
  h2: "Who we are",
  image: {
    src: "/images/om/om-intro.jpg",
    alt: "Polished natural-stone wall cladding fitted indoors",
  },
  text: "Grønt Land DK is a contracting company working on indoor and outdoor projects — from full renovations and masonry to paving, garden work and facades. With us, a project gets one accountable plan instead of several separate tradespeople. We take ownership of the task, keep a close dialogue along the way and hand over at the agreed time and price. That is how we want to run a trade business: proper work, clear agreements and a collaboration with the customer at the centre.",
  facts: [
    { label: "Service area", value: "Greater Copenhagen" },
    { label: "Customer types", value: "private customers and contractors" },
    { label: "Trades", value: "masonry, carpentry, painting, paving, garden work, turnkey" },
    { label: "Principle", value: "clear agreements and proper handover" },
  ],
} as const;

export const OM_VALUES_EN = {
  h2: "What we work by",
  items: [
    {
      title: "Quality",
      desc: "We don't compromise on execution. Correct preparation and a clean finish are part of the job — not an add-on.",
    },
    {
      title: "Teamwork",
      desc: "The trades are planned together from the start. That means fewer surprises and a simpler process for the customer.",
    },
    {
      title: "Customer focus",
      desc: "Close dialogue along the way, one contact person, and a handover we walk through together with you.",
    },
  ],
} as const;

export const OM_TEAM_EN = {
  h2: "A permanent team with clear responsibilities",
  intro:
    "We are a team of specialists across different trades. Each area is led by an experienced manager responsible for quality from preparation to handover.",
  members: [
    {
      name: "Oleg",
      role: "Responsible for finishing and carpentry",
      image: { src: "/images/gallery/tomrer-2.jpg", alt: "New timber deck under construction by a modern villa" },
      trades: [
        "Plastering, painting and surfaces",
        "Tiling, kitchens and bathrooms",
        "Wood and tile flooring",
        "Terraces, fences and structures",
      ],
      link: { label: "See carpentry", href: "/ydelser/tomrerarbejde" },
    },
    {
      name: "Andrej",
      role: "Responsible for paving and concrete",
      image: { src: "/images/gallery/belaegning-3.jpg", alt: "Herringbone brick paving at an entrance" },
      trades: [
        "Tiles, paving and natural stone",
        "Stairs, paths and driveways",
        "Drainage solutions",
        "Concrete work, masonry and insulation",
      ],
      link: { label: "See paving", href: "/ydelser/belaegningsarbejde" },
    },
    {
      name: "Aleksandr",
      role: "Responsible for landscape work",
      note: "Over 25 years of experience",
      image: { src: "/images/gallery/have-3.jpg", alt: "Trimmed hedges and a well-kept lawn" },
      trades: [
        "Site grading",
        "Grass — seeding or turf",
        "Planting and plant care",
        "Outdoor area design",
      ],
      link: { label: "See garden work", href: "/ydelser/havearbejde" },
    },
  ],
} as const;

export const OM_ONEPLAN_EN = {
  h2: "Several trades — one plan",
  text: "Because the team covers several trades, a project can be planned as a whole: preparation and construction, cleanup and disposal, and finally the landscape work. You avoid finding, coordinating and following up on several tradespeople yourself.",
  background: {
    src: "/images/om/om-oneplan.jpg",
    alt: "Newly cast concrete stair with balustrade and natural-stone paving by a villa",
  },
  ctas: [
    { label: "How the work proceeds", href: "#proces" },
    { label: "See completed projects", href: "/projekter" },
  ],
} as const;

export const OM_GALLERY_EN = {
  h2: "See the results of our work",
  sub: "Photos from facades, paving, renovation and garden work.",
  cta: { label: "Open the gallery", href: "/galleri" },
} as const;

export const OM_CTA_EN = {
  h2: "Shall we look at your project?",
  text: "Send a short description — we assess the task and get back to you by the next business day.",
  primary: { label: "Get a quote", href: "/kontakt" },
  image: {
    src: "/images/om/om-cta.jpg",
    alt: "Garden path in dark paving along trimmed hedges and beds",
  },
  crosslinks: [
    { label: "For private customers", href: "/private" },
    { label: "For contractors", href: "/entreprenorer" },
  ],
} as const;
