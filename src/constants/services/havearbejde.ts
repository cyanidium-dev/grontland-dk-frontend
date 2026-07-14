import type { ServiceContent } from "./types";

/**
 * /ydelser/havearbejde — pilot page. Sources: old grontland.dk /terrasse +
 * /service teasers (forløb 1–3 uger), chat-export Gartner-tekst (stauder,
 * græsplæne, træfældning/rodfræsning, højbede) og prislisten (600/1.200 kr/m²).
 */
export const HAVEARBEJDE: ServiceContent = {
  slug: "havearbejde",
  nav: "Havearbejde",
  metaTitle: "Havearbejde og haveanlæg i København | Grønt Land DK",
  metaDescription:
    "Havearbejde i København og Storkøbenhavn: terrasser, beplantning, græsplæne, træfældning og højbede. Typisk forløb 1-3 uger. Få et tilbud inden 24 timer.",
  h1: "Havearbejde i København: fra ny terrasse til færdig have",
  heroSub:
    "Vi anlægger terrasser, bede og græsplæner, planter stauder, buske og træer og klarer fældning med rodfræsning. Du får en fast plan, én kontaktperson og et typisk forløb på 1-3 uger.",
  heroImage: {
    src: "/images/gallery/have-2.jpg",
    alt: "Havegang med stenbed og ny beplantning",
  },
  trustChips: ["Én kontaktperson", "Fast prisramme", "Typisk forløb 1-3 uger"],
  scope: {
    h2: "Hvad laver vi i haven?",
    items: [
      {
        title: "Terrasser og havezoner",
        desc: "Opbygning af træterrasser og zoner til ophold, planlagt efter brug, sol og husets stil.",
      },
      {
        title: "Beplantning",
        desc: "Vi leverer og planter stauder, buske og træer, så bedet passer til jorden og lyset på stedet.",
      },
      {
        title: "Græsplæne",
        desc: "Nyanlæg eller genopretning af plænen.",
      },
      {
        title: "Træfældning og rodfræsning",
        desc: "Fældning, også hvor pladsen er trang, og fjernelse af stød med rodfræser bagefter.",
      },
      {
        title: "Højbede og støttemure",
        desc: "Anlæg af højbede samt mindre støttemure i granit eller beton, hvor terrænet kræver det.",
      },
      {
        title: "Pleje og vedligeholdelse",
        desc: "Løbende pleje af bede, hække og plæne, hvis du vil have haven holdt efter anlægget.",
      },
    ],
  },
  prices: {
    h2: "Hvad koster det?",
    note: "Vejledende fra-priser ekskl. moms. Du får altid en fast pris, før vi går i gang.",
    rows: [
      { label: "Belægningsterrasse", value: "fra 600 kr./m²" },
      { label: "Træterrasse inkl. konstruktion", value: "fra 1.200 kr./m²" },
    ],
  },
  process: {
    h2: "Sådan foregår et haveprojekt",
    steps: [
      {
        title: "Vi ser på haven",
        desc: "Du sender et par billeder og en kort beskrivelse, eller vi kommer forbi og måler op.",
      },
      {
        title: "Du får pris og plan",
        desc: "Fast pris, forslag til materialer og beplantning samt en dato, du kan regne med.",
      },
      {
        title: "Vi udfører arbejdet",
        desc: "Terrasse, bede og plæne anlægges i den aftalte rækkefølge, og du kan følge med undervejs.",
      },
      {
        title: "Gennemgang og aflevering",
        desc: "Vi gennemgår resultatet sammen, og du får råd om pleje af det nye anlæg.",
      },
    ],
  },
  caseSlugs: ["terrasse-og-haveomraade", "belaegning-ved-bolig"],
  galleryFilter: "havearbejde",
  faq: {
    h2: "Spørgsmål om havearbejde",
    items: [
      {
        q: "Hvad koster havearbejde i København?",
        a: "Det afhænger af opgaven. En belægningsterrasse starter ved 600 kr./m² ekskl. moms, en træterrasse med konstruktion ved 1.200 kr./m². Send et par billeder af haven, så får du en fast pris, før vi starter.",
      },
      {
        q: "Hvor lang tid tager et haveprojekt?",
        a: "De fleste private haveforløb tager 1-3 uger fra opstart. Mindre opgaver som beplantning eller en enkelt fældning er hurtigere; du får en konkret tidsplan sammen med tilbuddet.",
      },
      {
        q: "Planter I også, eller anlægger I kun?",
        a: "Begge dele. Vi leverer og planter stauder, buske og træer, anlægger græsplæner og bygger højbede. Vil du have haven passet bagefter, tilbyder vi løbende pleje og vedligeholdelse.",
      },
      {
        q: "Fælder I træer på små grunde?",
        a: "Ja. Vi fælder træer og fjerner stødet med rodfræsning, også i villakvarterer hvor der står hus, hæk eller carport tæt på.",
      },
      {
        q: "Kan havearbejdet kombineres med belægning eller tømrerarbejde?",
        a: "Ja, og det er ofte den bedste rækkefølge. Fagene er samlet hos os, så ny terrasse, belægning i indkørslen og beplantning kan lægges i én samlet plan med én ansvarlig kontakt.",
      },
    ],
  },
  seoText: {
    h2: "Havearbejde i København og Storkøbenhavn",
    images: [
      {
        src: "/images/cases/havearbejde-private.png",
        alt: "Plejet have med græsplæne og beplantning",
      },
      {
        src: "/images/cases/projekt-terrasse.png",
        alt: "Bærende konstruktion til træterrasse under opbygning",
      },
    ],
    text: "Grønt Land DK udfører havearbejde i København og Storkøbenhavn for private boligejere. Vi anlægger træterrasser og havezoner, planter stauder, buske og træer, etablerer græsplæner og bygger højbede og mindre støttemure. Træfældning med rodfræsning klarer vi også, ligesom løbende pleje og vedligeholdelse efter anlægget. Mange kunder kombinerer flere opgaver, fx en ny terrasse sammen med belægning i indkørslen eller ny beplantning, når facaden alligevel renoveres. Fordi fagene er samlet i ét team, planlægges arbejdet i én rækkefølge med én ansvarlig kontakt — det sparer koordinering og giver et resultat, der hænger sammen. Et typisk privat forløb tager 1-3 uger, og du kender prisen, før vi går i gang. Se fx træterrassen i Jatoba i Gentofte under projekter, eller send en kort beskrivelse af din have, så vender vi tilbage inden 24 timer.",
  },
};
