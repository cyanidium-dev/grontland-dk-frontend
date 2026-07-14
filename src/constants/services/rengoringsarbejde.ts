import type { ServiceContent } from "./types";

/**
 * /ydelser/rengoringsarbejde — NY tekst (ydelsen er tilføjet af kunden i
 * 2026-07-taksonomien; ingen gammel side). Rammen er kundens formulering fra
 * forsiden: "Rengøring efter renovering og byggeopgaver samt praktisk
 * rengøring i private hjem." Ingen priser eller varigheder er lovet.
 */
export const RENGORINGSARBEJDE: ServiceContent = {
  slug: "rengoringsarbejde",
  nav: "Rengøringsarbejde",
  metaTitle: "Rengøring efter renovering i København | Grønt Land DK",
  metaDescription:
    "Byggerengøring i København: grundig rengøring efter renovering og byggeopgaver samt praktisk rengøring i private hjem. Få et tilbud inden 24 timer.",
  h1: "Rengøring efter renovering og byggeri i København",
  heroSub:
    "En renovering er først færdig, når støvet er væk. Vi klarer byggerengøringen efter håndværkerne og tilbyder også praktisk rengøring i private hjem, så boligen er klar til brug, ikke bare klar til aflevering.",
  heroImage: {
    src: "/images/carousel/carousel-4.png",
    alt: "Nymalet indvendigt rum",
  },
  trustChips: ["Klar til indflytning", "Del af én samlet plan", "Fast aftale"],
  scope: {
    h2: "Hvad gør vi rent?",
    items: [
      {
        title: "Byggerengøring efter renovering",
        desc: "Byggestøv fjernes fra gulve, flader, skabe og installationer, også dét der lagde sig i naborummene.",
      },
      {
        title: "Vinduer og overflader",
        desc: "Vinduer, karme, fliser og inventar rengøres efter maler-, murer- og tømrerarbejde.",
      },
      {
        title: "Praktisk rengøring i private hjem",
        desc: "Løbende eller enkeltstående rengøring af boligen, efter aftale om omfang og hyppighed.",
      },
      {
        title: "Sidste led i totalentreprisen",
        desc: "Ved samlede renoveringer afleverer vi boligen rengjort, så du kan flytte direkte ind i resultatet.",
      },
    ],
  },
  process: {
    h2: "Sådan foregår rengøringen",
    steps: [
      {
        title: "Du beskriver opgaven",
        desc: "Efter renovering, som fast aftale eller en enkelt grundig omgang; du sætter rammen.",
      },
      {
        title: "Aftale om omfang",
        desc: "Vi aftaler, hvilke rum og flader der indgår, og hvornår arbejdet passer bedst.",
      },
      {
        title: "Rengøringen udføres",
        desc: "Vi arbejder systematisk rum for rum, oppefra og ned, så støvet ikke flyttes rundt.",
      },
      {
        title: "Gennemgang",
        desc: "Du får en bolig, der er klar til brug, og en aftale om næste gang, hvis rengøringen er løbende.",
      },
    ],
  },
  processImage: {
    src: "/images/gallery/total-4.jpg",
    alt: "Totalrenoveret stue med nye plankegulve",
  },
  ctaImage: {
    src: "/images/gallery/maler-6.jpg",
    alt: "Færdigmalet stue i lyse toner med havudsigt",
  },
  caseSlugs: [],
  galleryFilter: "totalentreprise",
  faq: {
    h2: "Spørgsmål om rengøring",
    items: [
      {
        q: "Hvad er byggerengøring?",
        a: "Den grundige rengøring efter en renovering eller byggeopgave: byggestøv på alle flader, pletter fra spartel og maling, beskyttelsesfilm og rester fjernes, så boligen er klar til brug.",
      },
      {
        q: "Tilbyder I fast rengøring i private hjem?",
        a: "Ja, vi tilbyder praktisk rengøring i private hjem, både løbende og som enkeltstående opgaver. Omfang og hyppighed aftales, så det passer til jeres hverdag.",
      },
      {
        q: "Indgår rengøring, når I renoverer for os?",
        a: "Ved totalentrepriser kan rengøringen lægges ind som sidste led i planen, så boligen afleveres rengjort i stedet for fejet. Sig til, når vi laver aftalen, så tager vi det med i prisen.",
      },
      {
        q: "Hvad koster rengøringsarbejde?",
        a: "Prisen afhænger af boligens størrelse og opgavens omfang; byggerengøring kræver mere end almindelig rengøring. Beskriv opgaven kort, så får du en fast pris, før vi starter.",
      },
    ],
  },
  seoText: {
    h2: "Byggerengøring og privat rengøring i København",
    images: [
      {
        src: "/images/gallery/total-1.jpg",
        alt: "Nyt bryggers med specialindrettede skabe",
      },
      {
        src: "/images/gallery/total-6.jpg",
        alt: "Specialdesignede skabe med indbygget lys",
      },
    ],
    text: "Grønt Land DK udfører rengøringsarbejde i København og Storkøbenhavn i to spor: byggerengøring efter renovering og byggeopgaver samt praktisk rengøring i private hjem. Byggestøv er finere end almindeligt husstøv og lægger sig overalt, også i rum, der ikke blev renoveret; derfor rengør vi systematisk, oppefra og ned, rum for rum, til boligen er klar til brug. For kunder, der får udført en samlet renovering hos os, er rengøringen det naturlige sidste led i planen: samme team, samme aftale, og en bolig der afleveres indflytningsklar. Den praktiske rengøring i private hjem aftales i omfang og hyppighed, fra en enkelt grundig omgang til en fast ordning. Send en kort beskrivelse af boligen og opgaven, så vender vi tilbage inden 24 timer med en fast pris.",
  },
};
