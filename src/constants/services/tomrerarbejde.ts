import type { ServiceContent } from "./types";

/**
 * /ydelser/tomrerarbejde — sources: chat-export tømrerbullets ("fra kælder
 * til kvist": tag, gulve, køkkener, døre/vinduer, garager/carporte/terrasser),
 * old grontland.dk /toemrerarbejde (1-4 uger), Jatoba-casen (Gentofte) og
 * prislisten (træterrasse 1.200 kr/m²).
 */
export const TOMRERARBEJDE: ServiceContent = {
  slug: "tomrerarbejde",
  nav: "Tømrerarbejde",
  metaTitle: "Tømrer i København — fra terrasse til tag | Grønt Land DK",
  metaDescription:
    "Tømrerarbejde i København: træterrasser fra 1.200 kr./m², tag, gulve, køkkener, døre og vinduer. Typisk opgave 1-4 uger. Få et tilbud inden 24 timer.",
  h1: "Tømrerarbejde i København fra kælder til kvist",
  heroSub:
    "Træterrasser, tagarbejde, gulve, køkkenmontering, døre og vinduer, som selvstændig opgave eller som del af en renovering. Konstruktionen skal være i orden, før detaljerne kan blive det.",
  heroImage: {
    src: "/images/gallery/tomrer-1.jpg",
    alt: "Færdig træterrasse i hårdttræ ved privat bolig",
  },
  trustChips: ["Én kontaktperson", "Fast pris før opstart", "1-4 uger typisk"],
  scope: {
    h2: "Tømreropgaver, vi udfører",
    items: [
      {
        title: "Træterrasser",
        desc: "Opbygning af bærende konstruktion, nivellering og montering, også i hårdttræ som Jatoba, der kræver nøjagtig udførelse.",
      },
      {
        title: "Tagarbejde",
        desc: "Tagkonstruktion og reparationer som del af renovering eller selvstændig opgave.",
      },
      {
        title: "Gulvlægning",
        desc: "Nye trægulve og gulve i massiv træ, lagt plant og med korrekte afslutninger.",
      },
      {
        title: "Køkkener og interiør",
        desc: "Montering af køkkener og andet interiør, hvor præcision i tilpasningen er det halve arbejde.",
      },
      {
        title: "Døre og vinduer",
        desc: "Udskiftning og montering af døre og vinduer med tætte fuger og rene lysninger.",
      },
      {
        title: "Garager, carporte og skure",
        desc: "Konstruktion af garager, carporte og skure fra fundament til færdig beklædning.",
      },
    ],
  },
  prices: {
    h2: "Hvad koster det?",
    note: "Vejledende fra-pris ekskl. moms. Du får altid en fast pris, før vi går i gang.",
    rows: [{ label: "Montering af træterrasse", value: "fra 1.200 kr./m²" }],
  },
  process: {
    h2: "Sådan foregår tømrerarbejdet",
    steps: [
      {
        title: "Opgaven afklares",
        desc: "Du beskriver, hvad der skal bygges eller skiftes, og vi vurderer konstruktion og materialer.",
      },
      {
        title: "Fast pris og tegning af løsningen",
        desc: "Du får pris, materialevalg og tidsplan, typisk 1-4 uger afhængigt af omfang.",
      },
      {
        title: "Konstruktion først",
        desc: "Bærende dele, nivellering og fundament udføres korrekt, før overflader og detaljer monteres.",
      },
      {
        title: "Detaljer og aflevering",
        desc: "Præcis tilpasning og afslutning, gennemgang af det færdige arbejde sammen med dig.",
      },
    ],
  },
  processImage: {
    src: "/images/gallery/tomrer-4.jpg",
    alt: "Opbygning af terrasse med bærende konstruktion",
  },
  ctaImage: {
    src: "/images/gallery/tomrer-2.jpg",
    alt: "Ny træterrasse under opbygning ved moderne villa",
  },
  caseSlugs: ["terrasse-og-haveomraade"],
  galleryFilter: "tomrerarbejde",
  faq: {
    h2: "Spørgsmål om tømrerarbejde",
    items: [
      {
        q: "Hvad koster en træterrasse i København?",
        a: "Montering af træterrasse inklusive konstruktion starter ved 1.200 kr./m² ekskl. moms. Træsort og terræn påvirker prisen, og du får en fast pris, før vi bygger.",
      },
      {
        q: "Hvor lang tid tager en tømreropgave?",
        a: "Typisk 1-4 uger afhængigt af omfang. En terrasse er hurtigere end et tagprojekt, og tidsplanen aftales, før vi starter.",
      },
      {
        q: "Arbejder I i hårdttræ som Jatoba?",
        a: "Ja. I Gentofte byggede vi en terrasse i Jatoba, et hårdt og slidstærkt træ, der kræver nøjagtig montering og korrekt afstand for at holde stabilt i mange år.",
      },
      {
        q: "Monterer I køkkener og skifter døre og vinduer?",
        a: "Ja, vi monterer køkkener og andet interiør og udskifter døre og vinduer, både som enkeltopgave og som del af en større renovering.",
      },
      {
        q: "Bygger I carporte og skure?",
        a: "Ja, garager, carporte og skure hører til faget, fra bærende konstruktion til færdig beklædning.",
      },
    ],
  },
  seoText: {
    h2: "Tømrer i København og Storkøbenhavn",
    images: [
      {
        src: "/images/hero/hero-card-terrasse.png",
        alt: "Træterrasse i Jatoba under opbygning",
      },
      {
        src: "/images/gallery/tomrer-3.jpg",
        alt: "Nyslebet og behandlet trægulv i bolig",
      },
    ],
    text: "Grønt Land DK tilbyder tømrerarbejde i København og Storkøbenhavn, der tager hele byggeriet i betragtning, fra kælder til kvist: tagarbejde, gulvlægning, montering af køkkener og interiør, døre og vinduer samt konstruktion af garager, carporte, skure og terrasser. Terrasser er en af de opgaver, vi bygger flest af. Ved en privat bolig i Gentofte opførte vi fx en træterrasse i Jatoba med bærende konstruktion, nivellering og præcis tilpasning; hårdttræ tilgiver ikke sjusk, så udførelsen skal være nøjagtig. Montering af træterrasse starter ved 1.200 kr./m² ekskl. moms, og de fleste tømreropgaver er afsluttet på 1-4 uger. Indgår tømrerarbejdet i en større renovering, planlægges det sammen med murer og maler i én samlet plan. Beskriv din opgave i en kort besked, så vender vi tilbage inden 24 timer.",
  },
};
