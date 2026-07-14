/**
 * /ydelser index copy. Card grid derives from SERVICES_PAGES + the home
 * SERVICES.items descriptions (same taxonomy, already client-approved).
 */

export const YDELSER_INDEX = {
  metaTitle: "Ydelser — renovering og byggeri i København | Grønt Land DK",
  metaDescription:
    "Se alle ydelser: havearbejde, belægning, murer- og facadearbejde, maler, tømrer, totalentreprise, demontering og rengøring i København. Få et tilbud inden 24 timer.",
  hero: {
    label: "Ydelser",
    h1: "Ydelser: renovering og byggeopgaver i København",
    sub: "Vi udfører både indvendige og udvendige opgaver, som enkeltfag eller samlet i én plan med én ansvarlig kontakt. Vælg et fag herunder og se, hvad opgaven typisk omfatter, hvad den koster, og hvordan forløbet ser ud.",
    image: {
      src: "/images/hero/hero-main.png",
      alt: "Anlagt have med stenbed og beplantning",
    },
  },
  cta: {
    h2: "I tvivl om, hvilket fag din opgave hører under?",
    text: "Det behøver du ikke vide. Beskriv opgaven kort, så vurderer vi omfang og fag og vender tilbage inden 24 timer.",
    primary: { label: "Få et tilbud", href: "/kontakt" },
    crosslinks: [
      { label: "Se projekter", href: "/projekter" },
      { label: "Åbn galleri", href: "/galleri" },
    ],
    image: {
      src: "/images/hero/hero-photo-2.png",
      alt: "Belægning og haveanlæg ved bolig",
    },
  },
} as const;
