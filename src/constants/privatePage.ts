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
    layout: "side",
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
