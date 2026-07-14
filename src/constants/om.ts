/** /om-os — copy per docs/content/om-os.md (DA). About + Team merged per client. */

export const OM_META = {
  title: "Om Grønt Land DK — entreprenørvirksomhed i København",
  description:
    "Mød teamet bag Grønt Land DK. Vi samler murer-, tømrer-, maler-, belægnings- og havearbejde i én plan — med klare aftaler og ordentlig aflevering i København og Storkøbenhavn.",
} as const;

export const OM_HERO = {
  label: "Om os",
  h1: "Entreprenørvirksomhed med flere fag under samme tag",
  sub: "Grønt Land DK udfører renovering, byggeopgaver og udearealer i København og Storkøbenhavn — for private boligejere og entreprenører.",
  ctas: [
    { label: "Få et tilbud", href: "/kontakt" },
    { label: "Se vores projekter", href: "/projekter" },
  ],
  // Jatoba terrace case photo (chat export) — craft showcase.
  image: {
    src: "/images/cases/terrasse-jatoba.jpg",
    alt: "Færdig træterrasse i Jatoba ved hvid villa i Gentofte",
  },
} as const;

export const OM_INTRO = {
  h2: "Hvem er vi?",
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
  background: {
    src: "/images/cases/oneteam-bg.jpg",
    alt: "Anlagt græsplæne med stenbelægning og beplantning",
  },
  ctas: [
    { label: "Sådan foregår arbejdet", href: "#proces" },
    { label: "Se udførte projekter", href: "/projekter" },
  ],
} as const;

export const OM_GALLERY = {
  h2: "Se resultatet af vores arbejde",
  sub: "Billeder fra facade, belægning, renovering og havearbejde.",
  cta: { label: "Åbn galleriet", href: "/galleri" },
  photos: [
    { src: "/images/gallery/have-2.jpg", alt: "Anlagt have med beplantning og græs" },
    { src: "/images/gallery/murer-2.jpg", alt: "Murerarbejde på facade" },
    { src: "/images/gallery/belaegning-2.jpg", alt: "Belægning i natursten" },
    { src: "/images/gallery/maler-1.jpg", alt: "Nymalet indvendigt rum" },
  ],
} as const;

export const OM_CTA = {
  h2: "Skal vi kigge på din opgave?",
  text: "Send en kort beskrivelse — så vurderer vi opgaven og vender tilbage senest næste hverdag.",
  primary: { label: "Få et tilbud", href: "/kontakt" },
  crosslinks: [
    { label: "For private kunder", href: "/private" },
    { label: "For entreprenører", href: "/entreprenorer" },
  ],
} as const;
