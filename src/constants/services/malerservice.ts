import type { ServiceContent } from "./types";

/**
 * /ydelser/malerservice — sources: chat-export malerbullets (fuldspartling,
 * silkecement, tapetsering, alle overflader fra beton til træværk) og old
 * grontland.dk /malerarbejde (ren finish, præcis afgrænsning, 2-7 arbejdsdage).
 */
export const MALERSERVICE: ServiceContent = {
  slug: "malerservice",
  nav: "Malerservice",
  metaTitle: "Malerservice i København — ren finish | Grønt Land DK",
  metaDescription:
    "Malerarbejde i København: indvendig og udvendig maling, fuldspartling, tapetsering og vådrum. Typisk opgave 2-7 arbejdsdage. Få et tilbud inden 24 timer.",
  h1: "Malerservice i København med ren finish og præcis afgrænsning",
  heroSub:
    "Vi maler alle overflader fra beton til træværk, spartler, tapetserer og klarer vådrum med silkecement. Forarbejdet afgør resultatet, så det springer vi aldrig over. Typisk opgave: 2-7 arbejdsdage.",
  heroImage: {
    src: "/images/gallery/maler-6.jpg",
    alt: "Færdigmalet stue i lyse toner med havudsigt",
  },
  trustChips: ["Grundigt forarbejde", "Ren afdækning", "2-7 arbejdsdage typisk"],
  scope: {
    h2: "Maleropgaver, vi udfører",
    items: [
      {
        title: "Indvendig maling",
        desc: "Vægge, lofter, paneler og døre i nybyggeri og renoveringer, fra inderst til yderst.",
      },
      {
        title: "Fuldspartling",
        desc: "Fuldspartling af alle overflader, når væggen skal stå helt glat, før den males.",
      },
      {
        title: "Tapetsering",
        desc: "Opsætning af tapet og glasvæv med præcise samlinger.",
      },
      {
        title: "Vådrum og silkecement",
        desc: "Etablering af silkecement i fx badeværelser, en holdbar og vandfast overflade.",
      },
      {
        title: "Træværk, gulve og kældre",
        desc: "Maling af alle overflader fra beton til træværk, også køkkener, kældre og gulve.",
      },
      {
        title: "Udvendig maling",
        desc: "Facader, skure og udhuse, malet i tørt vejr og med korrekt bund.",
      },
    ],
  },
  process: {
    h2: "Sådan foregår malerarbejdet",
    steps: [
      {
        title: "Gennemgang af overfladerne",
        desc: "Vi ser på stand, tidligere behandlinger og hvad bunden kræver, før farven kan holde.",
      },
      {
        title: "Tilbud og farvevalg",
        desc: "Fast pris og tidsplan, typisk 2-7 arbejdsdage, og rådgivning om maling og glans til rummet.",
      },
      {
        title: "Afdækning og forarbejde",
        desc: "Gulve og inventar dækkes af, og der spartles og slibes, til overfladen er klar.",
      },
      {
        title: "Maling og aflevering",
        desc: "Overfladerne males med præcis afgrænsning, og vi rydder op og gennemgår resultatet med dig.",
      },
    ],
  },
  processImage: {
    src: "/images/gallery/maler-2.jpg",
    alt: "Malerarbejde i trappeopgang med paneler",
  },
  ctaImage: {
    src: "/images/gallery/maler-4.jpg",
    alt: "Nymalet væg med stukloft",
  },
  caseSlugs: ["facadeopgave"],
  galleryFilter: "malerservice",
  faq: {
    h2: "Spørgsmål om malerarbejde",
    items: [
      {
        q: "Hvad koster malerarbejde i København?",
        a: "Prisen afhænger af areal, overfladernes stand og hvor meget spartelarbejde bunden kræver. Du får en fast pris, før vi går i gang, uden overraskelser undervejs.",
      },
      {
        q: "Hvor lang tid tager en maleropgave?",
        a: "Typisk 2-7 arbejdsdage. En enkelt lejlighed er hurtigere end et helt hus, og spartling og tørretid tæller med i planen fra start.",
      },
      {
        q: "Spartler I, før I maler?",
        a: "Ja, altid efter behov, og vi tilbyder fuldspartling af alle overflader, når væggene skal stå helt glatte. Det er forarbejdet, man ser i det færdige resultat.",
      },
      {
        q: "Maler I badeværelser og vådrum?",
        a: "Ja. Vi etablerer blandt andet silkecement i badeværelser, en vandfast overflade uden fliser, og maler vådrum med korrekt behandling.",
      },
      {
        q: "Beskytter I gulve og møbler undervejs?",
        a: "Ja, vi afdækker gulve og inventar, før arbejdet starter, og rydder op efter os, når vi er færdige.",
      },
    ],
  },
  seoText: {
    h2: "Malerarbejde i København og Storkøbenhavn",
    images: [
      {
        src: "/images/carousel/carousel-4.png",
        alt: "Nymalet indvendigt rum",
      },
      {
        src: "/images/gallery/maler-3.jpg",
        alt: "Tapetsering af værelse",
      },
    ],
    text: "Grønt Land DK hjælper med alle slags maleropgaver i København og Storkøbenhavn: maling af vægge, lofter, træværk, gulve, køkkener og kældre, fuldspartling af alle overflader, tapetsering samt silkecement i badeværelser og andre vådrum. Vi maler i både nybyggeri og renoveringer, indvendigt som udvendigt. Et godt malerresultat afgøres, før penslen rammer væggen; derfor bruger vi tiden på spartling, slibning og ren afdækning, og afgrænsningen mod lofter, paneler og karme trækkes skarpt op. De fleste opgaver er afsluttet på 2-7 arbejdsdage med en fast pris aftalt på forhånd. Maler vi som del af en større renovering, koordineres arbejdet med murer og tømrer i én samlet plan, så overfladerne behandles i den rigtige rækkefølge. Send en kort beskrivelse af rummene, gerne med billeder, så vender vi tilbage inden 24 timer.",
  },
};
