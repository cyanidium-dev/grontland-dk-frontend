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
