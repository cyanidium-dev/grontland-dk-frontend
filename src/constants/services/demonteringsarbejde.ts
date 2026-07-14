import type { ServiceContent } from "./types";

/**
 * /ydelser/demonteringsarbejde — NY tekst (ingen gammel side, intet
 * chat-export-materiale ud over ydelsesnavnet). Rammen er kundens egen
 * formulering fra forsiden: "Nedtagning og forberedende arbejde før
 * renovering eller ny opbygning." Ingen priser eller varigheder er lovet.
 */
export const DEMONTERINGSARBEJDE: ServiceContent = {
  slug: "demonteringsarbejde",
  nav: "Demonteringsarbejde",
  metaTitle: "Demontering og nedrivning i København | Grønt Land DK",
  metaDescription:
    "Demonteringsarbejde i København: kontrolleret nedtagning af køkkener, badeværelser, vægge og udekonstruktioner før renovering. Få et tilbud inden 24 timer.",
  h1: "Demonteringsarbejde i København: nedtagning før renovering",
  heroSub:
    "En renovering starter sjældent med at bygge noget op; først skal det gamle ned, og det skal ske kontrolleret, uden skader på det, der bliver stående. Vi river ned, sorterer og gør klar til næste fag.",
  heroImage: {
    src: "/images/cases/fundament-b2b.png",
    alt: "Armeret fundament klargjort til støbning på byggeplads",
  },
  trustChips: ["Kontrolleret nedtagning", "Afdækning og oprydning", "Klar til næste fag"],
  scope: {
    h2: "Hvad tager vi ned?",
    items: [
      {
        title: "Indvendig nedtagning",
        desc: "Køkkener, badeværelser, skillevægge, gulve og lofter fjernes som forberedelse til renovering.",
      },
      {
        title: "Udvendige konstruktioner",
        desc: "Gamle terrasser, skure og belægninger tages op, før det nye anlægges.",
      },
      {
        title: "Afdækning og støvbegrænsning",
        desc: "Tilstødende rum og overflader dækkes af, så nedrivningen ikke breder sig til resten af boligen.",
      },
      {
        title: "Sortering og bortkørsel",
        desc: "Affaldet sorteres og køres væk, så pladsen står ryddet, når næste fag møder ind.",
      },
      {
        title: "Klargøring til opbygning",
        desc: "Underlag og tilslutninger efterlades klar, ofte som første led i en samlet renovering hos os.",
      },
    ],
  },
  process: {
    h2: "Sådan foregår demonteringen",
    steps: [
      {
        title: "Gennemgang af opgaven",
        desc: "Vi ser på, hvad der skal ned, hvad der skal bevares, og hvordan adgangsforholdene er.",
      },
      {
        title: "Aftale og tidsplan",
        desc: "Du får en fast pris og en plan, der tager højde for naboer, adgang og bortkørsel.",
      },
      {
        title: "Afdækning og nedtagning",
        desc: "Der afdækkes, og nedtagningen udføres kontrolleret, så bærende dele og tilstødende rum ikke tager skade.",
      },
      {
        title: "Oprydning og aflevering",
        desc: "Affald sorteres og køres væk, og arealet afleveres ryddet og klar til opbygning.",
      },
    ],
  },
  processImage: {
    src: "/images/gallery/belaegning-6.jpg",
    alt: "Dræn- og afvandingsarbejde på byggeplads",
  },
  ctaImage: {
    src: "/images/gallery/murer-4.jpg",
    alt: "Murerarbejde med ny overligger i teglvæg",
  },
  caseSlugs: ["belaegning-arc-amager"],
  galleryFilter: "totalentreprise",
  faq: {
    h2: "Spørgsmål om demontering og nedrivning",
    items: [
      {
        q: "Hvad dækker demonteringsarbejde?",
        a: "Nedtagning og forberedende arbejde før renovering eller ny opbygning: køkkener, badeværelser, vægge, gulve og udekonstruktioner som gamle terrasser og belægninger.",
      },
      {
        q: "Fjerner I også affaldet?",
        a: "Ja. Affaldet sorteres og køres væk som en del af opgaven, så du ikke selv skal stå med containere og bortkørsel.",
      },
      {
        q: "Kan I nøjes med nedrivningen, hvis andre skal bygge op?",
        a: "Ja, demontering kan bestilles som selvstændig opgave. Mange kunder lader os dog også stå for opbygningen, så nedtagning og renovering ligger i én plan.",
      },
      {
        q: "Hvordan undgår I støvskader i resten af boligen?",
        a: "Vi afdækker tilstødende rum, gulve og inventar, før vi går i gang, og begrænser støvet ved kilden, så nedrivningen bliver ved med at være et lokalt indgreb.",
      },
      {
        q: "Hvad koster demonteringsarbejde?",
        a: "Prisen afhænger af omfang, materialer og adgangsforhold, så der findes ingen fast kvadratmeterpris. Send billeder af det, der skal ned, så får du en fast pris inden opstart.",
      },
    ],
  },
  seoText: {
    h2: "Nedrivning og demontering i København og Storkøbenhavn",
    images: [
      {
        src: "/images/cases/projekt-terrasse.png",
        alt: "Udeareal under omlægning",
      },
      {
        src: "/images/gallery/murer-1.jpg",
        alt: "Renoveret udvendig trappe med nye klinker",
      },
    ],
    text: "Grønt Land DK udfører demonteringsarbejde i København og Storkøbenhavn som forberedelse til renovering og ny opbygning. Vi tager køkkener, badeværelser, skillevægge, gulve og lofter ned indvendigt og fjerner gamle terrasser, skure og belægninger udenfor. Nedtagningen udføres kontrolleret: tilstødende rum afdækkes, støvet begrænses, og bærende konstruktioner røres ikke, før forholdene er afklaret. Affaldet sorteres og køres væk, så pladsen er ryddet, når mureren, tømreren eller belægningsholdet møder ind. Netop dér ligger fordelen ved at samle opgaven hos os; demontering er i praksis første led i de fleste af vores totalentrepriser, og når samme team planlægger nedtagning og opbygning, undgår du ventetid mellem fagene. Beskriv hvad der skal ned, gerne med et par billeder, så vender vi tilbage inden 24 timer med en fast pris.",
  },
};
