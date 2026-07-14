import type { ServiceContent } from "./types";

/**
 * /ydelser/murerarbejde — facadearbejde er foldet ind under murer (kundens
 * taksonomi 2026-07). Sources: chat-export murer-bullets (badeværelser, fuger,
 * fliser, tegltag, tilbyg), old grontland.dk /murerarbejde (3-15 arbejdsdage)
 * + /facaderenovering, Nordsjælland-facadecasen, Hellerup-trappecasen og
 * prislisten (facadepuds 300 kr/m²).
 */
export const MURERARBEJDE: ServiceContent = {
  slug: "murerarbejde",
  nav: "Murerarbejde",
  metaTitle: "Murer- og facadearbejde i København | Grønt Land DK",
  metaDescription:
    "Murerarbejde i København: facaderenovering fra 300 kr./m², badeværelser, fliser, fuger og tegltag. Typisk forløb 3-15 arbejdsdage. Få et tilbud inden 24 timer.",
  h1: "Murer- og facadearbejde i København",
  heroSub:
    "Facaderenovering, badeværelser, fliser, fugearbejde og tegltag, udført for både private og offentlige bygherrer. Murværket skal holde i årtier, så vi går mere op i forarbejdet end i at blive hurtigt færdige.",
  heroImage: {
    src: "/images/gallery/murer-6.jpg",
    alt: "Tagterrasse med nye fliser og pudset værn",
  },
  trustChips: ["Private og offentlige bygherrer", "Fast pris før opstart", "3-15 arbejdsdage typisk"],
  scope: {
    h2: "Murer- og facadeopgaver, vi udfører",
    items: [
      {
        title: "Facaderenovering",
        desc: "Klargøring, pudsning, spartling og maling af facader; korrekt forarbejde er det, der giver holdbarheden.",
      },
      {
        title: "Badeværelser",
        desc: "Vi er specialister i badeværelser, fra vådrumssikring til flise- og klinkearbejde.",
      },
      {
        title: "Flise- og klinkearbejde",
        desc: "Gulve og vægge i fliser, klinker og natursten, ude som inde.",
      },
      {
        title: "Fugearbejde",
        desc: "Udkradsning og nyfugning af murværk, der er utæt eller nedslidt.",
      },
      {
        title: "Tegltag",
        desc: "Reparation og nylægning af tegltag.",
      },
      {
        title: "Nybyg, ombyg og tilbyg",
        desc: "Murerarbejde i renoveringer, tilbygninger og modernisering, også reparation og løbende vedligeholdelse.",
      },
    ],
  },
  prices: {
    h2: "Hvad koster det?",
    note: "Vejledende fra-pris ekskl. moms. Du får altid en fast pris, før vi går i gang.",
    rows: [{ label: "Pudsning af facade", value: "fra 300 kr./m²" }],
  },
  process: {
    h2: "Sådan foregår murerarbejdet",
    steps: [
      {
        title: "Besigtigelse af murværket",
        desc: "Vi vurderer stand, skader og forarbejdets omfang, det kan sjældent ses på et foto alene.",
      },
      {
        title: "Tilbud med fast ramme",
        desc: "Du får pris, materialer og tidsplan på skrift, typisk 3-15 arbejdsdage afhængigt af opgaven.",
      },
      {
        title: "Forarbejde og beskyttelse",
        desc: "Vinduer, døre og omgivelser afdækkes, og underlaget klargøres, før der pudses, fuges eller fliselægges.",
      },
      {
        title: "Udførelse og aflevering",
        desc: "Arbejdet udføres med fokus på rene linjer og ensartet overflade og gennemgås sammen med dig ved aflevering.",
      },
    ],
  },
  processImage: {
    src: "/images/gallery/murer-4.jpg",
    alt: "Murerarbejde med ny overligger i teglvæg",
  },
  ctaImage: {
    src: "/images/cases/projekt-facade.png",
    alt: "Renoveret facade på privat bolig",
  },
  caseSlugs: ["facadeopgave", "betontrappe-hellerup"],
  galleryFilter: "murerarbejde",
  faq: {
    h2: "Spørgsmål om murer- og facadearbejde",
    items: [
      {
        q: "Hvad koster facaderenovering i København?",
        a: "Pudsning af facade starter ved 300 kr./m² ekskl. moms. Den samlede pris afhænger af facadens stand og forarbejdet, og du får en fast pris efter besigtigelse.",
      },
      {
        q: "Renoverer I badeværelser?",
        a: "Ja, badeværelser er et af vores specialer. Vi står for vådrumssikring, fliser, klinker og fuger, og kan tage maler- og tømrerdelen med i samme plan.",
      },
      {
        q: "Hvor lang tid tager murerarbejde?",
        a: "De fleste opgaver ligger på 3-15 arbejdsdage. En facaderenovering som den, vi udførte på en privat bolig i Nordsjælland, planlægges så beboerne generes mindst muligt undervejs.",
      },
      {
        q: "Laver I også mindre reparationer?",
        a: "Ja, revner, løse fuger, enkelte fliser eller et beskadiget hjørne. Små opgaver får samme forarbejde som store.",
      },
      {
        q: "Hvorfor ligger facadearbejde under murerarbejde hos jer?",
        a: "Fordi det fagligt er samme håndværk: puds, spartling og murværk. Én ansvarlig murer på både facade og øvrigt murerarbejde giver et mere ensartet resultat.",
      },
    ],
  },
  seoText: {
    h2: "Facaderenovering og murerarbejde i København",
    images: [
      {
        src: "/images/cases/facade-trappe.jpg",
        alt: "Renoveret facade og udvendig trappe",
      },
      {
        src: "/images/gallery/murer-2.jpg",
        alt: "Nylagte gulvfliser i naturstenslook",
      },
    ],
    text: "Grønt Land DK udfører alle former for murerarbejde i København og Storkøbenhavn for private og offentlige bygherrer: facaderenovering, badeværelser, flise- og klinkearbejde, fugearbejde, tegltag samt nybyg, ombyg og tilbyg. Facadearbejdet er en kerneopgave; vi klargør, pudser, spartler og maler, og vi beskytter vinduer, døre og omgivelser undervejs, som ved facaderenoveringen af en privat bolig i Nordsjælland. Betonopgaver hører også til faget. I Hellerup genopbyggede vi en nedslidt betontrappe med ny forskalling, støbning og ens trinmål. Pudsning af facade starter ved 300 kr./m² ekskl. moms, og de fleste murerforløb tager 3-15 arbejdsdage. Skal facaden males eller badeværelset også have nyt træværk, samler vi fagene i én plan med én ansvarlig kontakt. Send et par billeder af opgaven, så vender vi tilbage inden 24 timer.",
  },
};
