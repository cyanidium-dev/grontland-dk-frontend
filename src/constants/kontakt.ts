/** /kontakt — copy per docs/content/kontakt.md (DA). Form fields reuse QUOTE_FORM. */

export const KONTAKT_META = {
  title: "Kontakt Grønt Land DK — få et tilbud på renovering i København",
  description:
    "Send en kort beskrivelse af din opgave og få svar senest næste hverdag. Renovering, belægning, facade, havearbejde og totalentreprise i København og Storkøbenhavn.",
} as const;

export const KONTAKT_HERO = {
  label: "Kontakt",
  h1: "Kontakt os — få et tilbud på din opgave",
  sub: "Beskriv din opgave kort — så vurderer vi den og vender tilbage senest næste hverdag, ofte hurtigere. Det er gratis og uforpligtende.",
  cta: { label: "Ring 91 70 01 03", href: "tel:+4591700103" },
  // Same photo as the quote CTA bands (home + projekter) — the "få et tilbud" visual.
  image: {
    src: "/images/cases/quote-cta-band.png",
    alt: "Nybelagte betontrin foran bolig med hvid balustrade",
  },
} as const;

export const KONTAKT_FORM = {
  h2: "Få et tilbud på dit projekt",
} as const;

export const KONTAKT_INFO = {
  h2: "Direkte kontakt",
  items: [
    {
      label: "Telefon",
      value: "91 70 01 03",
      href: "tel:+4591700103",
      hint: "Mandag–fredag 8:00–17:00",
    },
    {
      label: "E-mail",
      value: "grontlanddk@gmail.com",
      href: "mailto:grontlanddk@gmail.com",
      hint: "Vi svarer senest næste hverdag",
    },
    { label: "Arbejdsområde", value: "København og Storkøbenhavn" },
    { label: "Virksomhed", value: "Grønt Land DK · CVR 45514374" },
  ],
  note: "Lørdag efter aftale. Søndag lukket.",
} as const;

export const KONTAKT_STEPS = {
  h2: "Hvad sker der, når du har skrevet?",
  steps: [
    {
      title: "Vi vurderer opgaven",
      desc: "Vi afklarer omfang, materialer, adgang og tidsramme — og ringer, hvis vi har spørgsmål.",
    },
    { title: "Du får et tilbud", desc: "En tydelig ramme for pris, proces og næste skridt." },
    { title: "Vi aftaler opstart", desc: "Arbejdet planlægges, og du ved, hvem der har ansvaret." },
  ],
} as const;

export const KONTAKT_AUDIENCES = {
  h2: "Vil du vide mere, før du skriver?",
  cards: [
    {
      title: "For private kunder",
      text: "Se hvordan vi arbejder med renovering, terrasser, facader og udearealer for boligejere.",
      cta: { label: "Se løsninger for private", href: "/private" },
      // Mirrors the home AUDIENCES private card.
      image: { src: "/images/cases/havearbejde-private.png", alt: "Plejet have med græsplæne og beplantning" },
    },
    {
      title: "For entreprenører",
      text: "Se hvordan vi indgår som fast team på delentrepriser og større projekter.",
      cta: { label: "Se samarbejde for entreprenører", href: "/entreprenorer" },
      // Mirrors the home AUDIENCES B2B card.
      image: { src: "/images/cases/fundament-b2b.png", alt: "Armeret fundament klargjort til støbning på byggeplads" },
    },
  ],
  links: [
    { label: "Se vores projekter", href: "/projekter" },
    { label: "Åbn galleriet", href: "/galleri" },
  ],
} as const;

/* English copy (docs/content/kontakt.md EN) — sections pick da/en by locale. */

export const KONTAKT_META_EN = {
  title: "Contact Grønt Land DK — get a quote for renovation in Copenhagen",
  description:
    "Send a short description of your project and get a reply by the next business day. Renovation, paving, facades, garden work and turnkey contracting in Greater Copenhagen.",
} as const;

export const KONTAKT_HERO_EN = {
  label: "Contact",
  h1: "Contact us — get a quote for your project",
  sub: "Describe your project briefly — we assess it and get back to you by the next business day, often sooner. Free and without obligation.",
  cta: { label: "Call 91 70 01 03", href: "tel:+4591700103" },
  image: {
    src: "/images/cases/quote-cta-band.png",
    alt: "New concrete steps with a white balustrade",
  },
} as const;

export const KONTAKT_FORM_EN = {
  h2: "Get a quote for your project",
} as const;

export const KONTAKT_INFO_EN = {
  h2: "Direct contact",
  items: [
    {
      label: "Phone",
      value: "91 70 01 03",
      href: "tel:+4591700103",
      hint: "Monday–Friday 8:00–17:00",
    },
    {
      label: "Email",
      value: "grontlanddk@gmail.com",
      href: "mailto:grontlanddk@gmail.com",
      hint: "We reply by the next business day",
    },
    { label: "Service area", value: "Copenhagen and Greater Copenhagen" },
    { label: "Company", value: "Grønt Land DK · CVR 45514374" },
  ],
  note: "Saturday by appointment. Sunday closed.",
} as const;

export const KONTAKT_STEPS_EN = {
  h2: "What happens after you write?",
  steps: [
    {
      title: "We assess the project",
      desc: "We clarify scope, materials, access and timeline — and call if we have questions.",
    },
    { title: "You get a quote", desc: "A clear frame for price, process and next steps." },
    { title: "We agree on a start date", desc: "The work is planned, and you know who is responsible." },
  ],
} as const;

export const KONTAKT_AUDIENCES_EN = {
  h2: "Want to know more before you write?",
  cards: [
    {
      title: "For private customers",
      text: "See how we handle renovation, terraces, facades and outdoor areas for homeowners.",
      cta: { label: "See solutions for private customers", href: "/private" },
      image: { src: "/images/cases/havearbejde-private.png", alt: "A well-kept garden with lawn and planting" },
    },
    {
      title: "For contractors",
      text: "See how we join projects as a stable team for sub-contracts and larger builds.",
      cta: { label: "See collaboration for contractors", href: "/entreprenorer" },
      image: { src: "/images/cases/fundament-b2b.png", alt: "Reinforced foundation ready for casting on a construction site" },
    },
  ],
  links: [
    { label: "See our projects", href: "/projekter" },
    { label: "Open the gallery", href: "/galleri" },
  ],
} as const;
