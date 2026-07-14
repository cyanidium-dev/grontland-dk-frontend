/**
 * /galleri page copy — Danish. Photos + filter taxonomy come from
 * constants/gallery.ts (same catalog as the home Gallery section).
 */

export const GALLERI_PAGE = {
  metaTitle: "Galleri — udførte opgaver i København | Grønt Land DK",
  metaDescription:
    "Se billeder fra udførte opgaver: belægning, træterrasser, facader, malerarbejde og totalrenovering i København og Storkøbenhavn. Få et tilbud på din opgave.",
  hero: {
    label: "Galleri",
    h1: "Galleri fra udførte opgaver",
    sub: "Billederne her er fra vores egne opgaver i København og Storkøbenhavn: terrasser, facader, belægning, malerarbejde og hele renoveringer. Brug filtrene og se det fag, du overvejer.",
    image: {
      src: "/images/gallery/belaegning-1.jpg",
      alt: "Ny belægning med granittrappe og støttemur",
    },
  },
  seoText: {
    h2: "Billeder fra rigtige opgaver",
    text: "Alle billeder i galleriet stammer fra opgaver, Grønt Land DK selv har udført; her er ingen arkivfotos. Du kan se belægning i sandsten og granit, træterrasser i hårdttræ, facadepuds, malerarbejde og komplette renoveringer som villaen i Skodsborg. Leder du efter noget bestemt, fx ny belægning i indkørslen eller fliser i badeværelset, så filtrér efter fag. Ligner en af løsningerne din opgave? Send os et par billeder og en kort beskrivelse, så vender vi tilbage inden 24 timer med en vurdering og næste skridt.",
  },
  cta: {
    h2: "Skal vi kigge på din opgave?",
    text: "Send en kort beskrivelse og gerne et par billeder. Vi vurderer opgaven og vender tilbage inden 24 timer.",
    primary: { label: "Få et tilbud", href: "/kontakt" },
    crosslinks: [
      { label: "Se projekter", href: "/projekter" },
      { label: "Se ydelser", href: "/ydelser" },
    ],
  },
} as const;
