/**
 * Home-page copy — Danish, verbatim from the Figma "Главная2" (#1018:77) design
 * and the PDF spec. Images point at /public/images placeholders until the real
 * assets are exported. Section ORDER (per Figma y-position in #1018:77):
 *   Hero → Services → Audiences → OneTeam → Projects → Process
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
  // Glass "PROJEKT" cards overlaid on the bottom of the right-side image.
  overlayCards: [
    {
      label: "Projekt",
      image: { src: "/images/hero/hero-card-terrasse.png", alt: "Træterrasse i Jatoba under opbygning" },
      caption:
        "Vi udførte opbygning og montering af en træterrasse i Jatoba ved en privat bolig i Gentofte.",
    },
    {
      label: "Projekt",
      image: { src: "/images/hero/hero-card-facade.png", alt: "Facadearbejde på privat bolig i Nordsjælland" },
      caption: "Vi udførte facadearbejde på en privat bolig i Nordsjælland.",
    },
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
  items: [
    {
      name: "Havearbejde",
      desc: "Terrasser, havezoner og udearealer planlagt efter brug, holdbarhed og et færdigt udtryk.",
      href: "/ydelser/havearbejde",
      image: "/images/carousel/carousel-1.png",
      imageAlt: "Anlagt have med belægning og beplantning",
    },
    {
      name: "Belægningsarbejde",
      desc: "Indkørsler, stier og adgangsarealer med stærkt underlag, pæn finish og lang levetid.",
      href: "/ydelser/belaegningsarbejde",
      image: "/images/carousel/carousel-2.png",
      imageAlt: "Belægning i natursten ved bolig",
    },
    {
      name: "Murerarbejde",
      desc: "Murer- og facadearbejde til renovering, fliser og konstruktioner med fokus på stabilitet, styrke og finish.",
      href: "/ydelser/murerarbejde",
      image: "/images/carousel/carousel-3.png",
      imageAlt: "Facade på privat bolig med beplantning",
    },
    {
      name: "Malerservice",
      desc: "Malerarbejde med korrekt forberedelse, ren finish og præcis afslutning.",
      href: "/ydelser/malerservice",
      image: "/images/carousel/carousel-4.png",
      imageAlt: "Nymalet indvendigt rum",
    },
    {
      name: "Tømrerarbejde",
      desc: "Tømreropgaver fra konstruktion til detaljer, udført som del af renovering eller som selvstændig opgave.",
      href: "/ydelser/tomrerarbejde",
      image: "/images/hero/hero-card-terrasse.png",
      imageAlt: "Træterrasse under opbygning",
    },
    {
      name: "Totalentreprise",
      desc: "Samlet renovering med flere fag, én plan og én ansvarlig kontakt fra start til aflevering.",
      href: "/ydelser/totalentreprise",
      image: "/images/cases/fundament-b2b.png",
      imageAlt: "Byggeplads med armeret fundament under opbygning",
    },
    {
      name: "Demonteringsarbejde",
      desc: "Nedtagning og forberedende arbejde før renovering eller ny opbygning.",
      href: "/ydelser/demonteringsarbejde",
      image: "/images/cases/projekt-terrasse.png",
      imageAlt: "Udeareal under omlægning",
    },
    {
      name: "Rengøringsarbejde",
      desc: "Rengøring efter renovering og byggeopgaver samt praktisk rengøring i private hjem.",
      href: "/ydelser/rengoringsarbejde",
      image: "/images/cases/havearbejde-private.png",
      imageAlt: "Plejet privat bolig og have",
    },
  ],
} as const;

export const PROJECTS = {
  h2: "Udvalgte projekter",
  sub: "Se eksempler på renovering, belægning, facade, havearbejde og andre opgaver udført for private og erhverv.",
  cta: { label: "Se projekter", href: "/projekter" },
  linkLabel: "Se projekt",
  cards: [
    {
      title: "Terrasse og haveområde",
      category: "Havearbejde / terrasse",
      desc: "Et nyt udeareal skabt med fokus på funktion, brug og et færdigt visuelt udtryk.",
      href: "/projekter/terrasse-og-haveomraade",
      image: "/images/cases/terrasse-jatoba.jpg",
      imageAlt: "Færdig træterrasse i hårdttræ ved hvid villa",
    },
    {
      title: "Belægning ved bolig",
      category: "Belægningsarbejde",
      desc: "Adgangsareal og belægning udført med fokus på stabilitet og en pæn afslutning.",
      href: "/projekter/belaegning-ved-bolig",
      image: "/images/cases/belaegning-kyst.jpg",
      imageAlt: "Ny belægning og terrænarbejde ved bolig",
    },
    {
      title: "Facadeopgave",
      category: "Facadearbejde",
      desc: "Vedligeholdelse og forbedring af facade med fokus på bygningens udtryk og holdbarhed.",
      href: "/projekter/facadeopgave",
      image: "/images/cases/facade-trappe.jpg",
      imageAlt: "Nyrenoveret trappe og pudset facade ved etageejendom",
    },
  ],
} as const;

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
