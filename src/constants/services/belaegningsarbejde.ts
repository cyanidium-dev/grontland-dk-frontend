import type { ServiceContent } from "./types";

/**
 * /ydelser/belaegningsarbejde — sources: old grontland.dk /belaegning
 * (3-10 arbejdsdage), chat-export Brolægning-tekst (beton/granit, trapper,
 * støttemure), Roskilde- og ARC-casene samt prislisten (600/800 kr/m²).
 */
export const BELAEGNINGSARBEJDE: ServiceContent = {
  slug: "belaegningsarbejde",
  nav: "Belægningsarbejde",
  metaTitle: "Belægningsarbejde i København — fast pris | Grønt Land DK",
  metaDescription:
    "Belægning i København: indkørsler fra 800 kr./m², terrasser fra 600 kr./m². Beton, granit og sandsten med korrekt bundopbygning. Få et tilbud inden 24 timer.",
  h1: "Belægning i København: indkørsler, terrasser og trapper der ligger fast",
  heroSub:
    "Vi lægger indkørsler, terrasser, stier og trapper i beton, granit og sandsten, og vi bygger bunden korrekt op, så belægningen ligger plant år efter år. Typisk udførelse: 3-10 arbejdsdage.",
  heroImage: {
    src: "/images/gallery/belaegning-3.jpg",
    alt: "Teglbelægning i sildebensmønster ved indgang",
  },
  trustChips: ["Fast pris før opstart", "Korrekt bundopbygning", "3-10 arbejdsdage typisk"],
  scope: {
    h2: "Hvad lægger vi?",
    items: [
      {
        title: "Indkørsler",
        desc: "Slidstærk belægning i beton- eller granitprodukter, dimensioneret til bilens vægt.",
      },
      {
        title: "Terrasser og gangarealer",
        desc: "Flisebelægning i sandsten, beton eller klinker med korrekt fald væk fra huset.",
      },
      {
        title: "Trapper og støttemure",
        desc: "Trapper og støttemure i betonelementer og granit, også hvor terrænet har niveauforskelle.",
      },
      {
        title: "Brolægning",
        desc: "Brostensarbejde i granit til kanter, bede og hele arealer.",
      },
      {
        title: "Afvanding og dræn",
        desc: "Linjedræn, drænrender og brønde, så overfladevandet ledes væk fra belægning og bolig.",
      },
      {
        title: "Græsarmering",
        desc: "Kørefaste, grønne arealer hvor græs og belægning skal arbejde sammen.",
      },
    ],
  },
  prices: {
    h2: "Hvad koster belægning?",
    note: "Vejledende fra-priser ekskl. moms. Du får altid en fast pris, før vi går i gang.",
    rows: [
      { label: "Terrasse", value: "fra 600 kr./m²" },
      { label: "Indkørsel", value: "fra 800 kr./m²" },
    ],
  },
  process: {
    h2: "Sådan foregår belægningsarbejdet",
    steps: [
      {
        title: "Opmåling og bundforhold",
        desc: "Vi ser på arealet, jordbunden og hvor vandet skal ledes hen.",
      },
      {
        title: "Fast pris og materialevalg",
        desc: "Du vælger materiale ud fra brug og budget og får en samlet pris med tidsplan.",
      },
      {
        title: "Bundopbygning",
        desc: "Udgravning, stabilgrus og afretning med korrekt fald; det er bunden, der afgør, om belægningen holder.",
      },
      {
        title: "Belægning og afslutning",
        desc: "Fliser, sten eller brosten lægges, fuges og komprimeres, og arealet afleveres fejet og klar til brug.",
      },
    ],
  },
  processImage: {
    src: "/images/gallery/belaegning-2.jpg",
    alt: "Sandstensbelægning og græsarmering ved bolig nær vandet",
  },
  ctaImage: {
    src: "/images/gallery/belaegning-1.jpg",
    alt: "Ny belægning med granittrappe og støttemur",
  },
  caseSlugs: ["belaegning-ved-bolig", "belaegning-arc-amager"],
  galleryFilter: "belaegning",
  faq: {
    h2: "Spørgsmål om belægning",
    items: [
      {
        q: "Hvad koster ny belægning i indkørslen?",
        a: "Indkørsler starter ved 800 kr./m² ekskl. moms og terrasser ved 600 kr./m². Prisen afhænger af materiale og bundforhold, og du får en fast pris, før vi går i gang.",
      },
      {
        q: "Hvor lang tid tager belægningsarbejde?",
        a: "Typisk 3-10 arbejdsdage afhængigt af areal og terræn. Tidsplanen ligger fast, inden vi starter.",
      },
      {
        q: "Hvad gør I ved regnvand og afvanding?",
        a: "Belægningen lægges med korrekt fald, og vi etablerer linjedræn eller drænrender, hvor det er nødvendigt. I Roskilde løste vi fx et helt udeareal med niveauforskelle og direkte nærhed til vand.",
      },
      {
        q: "Hvilke materialer arbejder I med?",
        a: "Betonprodukter, granit, sandsten, klinker og brosten. Vi rådgiver om, hvad der passer til opgaven, huset og budgettet.",
      },
      {
        q: "Hvorfor synker belægninger, og hvordan undgår I det?",
        a: "Næsten altid på grund af dårlig bundopbygning. Vi graver ud, opbygger med stabilgrus og komprimerer i lag, så overfladen bliver stående plant.",
      },
    ],
  },
  seoText: {
    h2: "Belægningsarbejde i København og Storkøbenhavn",
    images: [
      {
        src: "/images/cases/projekt-belaegning.png",
        alt: "Nyanlagt flisebelægning ved privat bolig",
      },
      {
        src: "/images/gallery/belaegning-5.jpg",
        alt: "Gangsti med støttemur og linjedræn",
      },
    ],
    text: "Grønt Land DK udfører alle former for belægnings- og brolæggeropgaver i København og Storkøbenhavn: indkørsler, terrasser, gangarealer, trapper og støttemure i beton- og granitprodukter. Vi arbejder for private boligejere og deltager som underentreprenør på større projekter, fx belægning og afvanding ved ARC Amager Ressourcecenter. Afvanding er en fast del af opgaven; med korrekt fald, linjedræn og brønde ledes vandet væk, før det bliver et problem for hus eller belægning. En terrasse starter ved 600 kr./m² og en indkørsel ved 800 kr./m², begge ekskl. moms, og de fleste opgaver er udført på 3-10 arbejdsdage. Skal belægningen spille sammen med haven, kan vi planlægge havearbejde og belægning i én samlet plan. Send os et billede af arealet, så vender vi tilbage inden 24 timer med en vurdering.",
  },
};
