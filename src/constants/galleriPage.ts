/**
 * /galleri page copy — Danish. Photos + filter taxonomy come from
 * constants/gallery.ts (same catalog as the home Gallery section).
 * Page body is Nbyg-style: one section per service (GALLERY_SECTIONS).
 */

import type { GalleryServiceId } from "@/constants/gallery";

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
    image: {
      src: "/images/cases/belaegning-kyst.jpg",
      alt: "Sandstensbelægning ved bolig nær kysten",
    },
    crosslinks: [
      { label: "Se projekter", href: "/projekter" },
      { label: "Se ydelser", href: "/ydelser" },
    ],
  },
} as const;

export type GallerySectionDef = {
  id: GalleryServiceId; // anchor id + photo filter
  title: string;
  description: string; // 1-2 sentences, right-aligned on desktop
  cta: { label: string; href: string }; // link to the matching service page
};

// NOTE the id→slug mismatch for belægning: gallery id "belaegning",
// service slug "belaegningsarbejde". All other ids equal their slug.
export const GALLERY_SECTIONS: readonly GallerySectionDef[] = [
  {
    id: "havearbejde",
    title: "Havearbejde",
    description:
      "Anlagte bede, græsplæner, støttemure og havezoner fra private haver i København og omegn.",
    cta: { label: "Læs om havearbejde", href: "/ydelser/havearbejde" },
  },
  {
    id: "belaegning",
    title: "Belægning",
    description:
      "Indkørsler, gangarealer og trapper i beton, granit og sandsten, inklusive dræn og afvanding.",
    cta: { label: "Læs om belægningsarbejde", href: "/ydelser/belaegningsarbejde" },
  },
  {
    id: "murerarbejde",
    title: "Murerarbejde",
    description:
      "Facadepuds, fliser, tegltag og renoverede trapper, både ude og inde.",
    cta: { label: "Læs om murerarbejde", href: "/ydelser/murerarbejde" },
  },
  {
    id: "malerservice",
    title: "Malerservice",
    description:
      "Malerarbejde med ren finish: vægge, paneler, tapet og udvendige overflader.",
    cta: { label: "Læs om malerservice", href: "/ydelser/malerservice" },
  },
  {
    id: "tomrerarbejde",
    title: "Tømrerarbejde",
    description:
      "Træterrasser, gulve, køkkenmontering og konstruktioner, fra bærende dele til detaljer.",
    cta: { label: "Læs om tømrerarbejde", href: "/ydelser/tomrerarbejde" },
  },
  {
    id: "totalentreprise",
    title: "Totalentreprise",
    description:
      "Uddrag fra samlede renoveringer, blandt andet villaen i Skodsborg med snedkerløsninger og vinkælder.",
    cta: { label: "Læs om totalentreprise", href: "/ydelser/totalentreprise" },
  },
];
