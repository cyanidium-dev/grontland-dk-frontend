/**
 * Locale copy resolvers for the "local" pages (home, om-os, kontakt, private,
 * entreprenorer) whose copy stays in constants per client decision. Pure —
 * takes the locale as an argument, so both server components (getLocale) and
 * client components (useLocale) can call it. CMS-driven pages don't use this;
 * they localize in GROQ (lib/sanity/queries.ts).
 */
import * as home from "@/constants/home";
import * as om from "@/constants/om";
import * as kontakt from "@/constants/kontakt";
import * as privateC from "@/constants/privatePage";
import * as b2b from "@/constants/b2b";
import {
  PROJECTS_LIST,
  PROJECTS_LIST_EN,
  PROJECT_CATEGORY_LABEL,
  PROJECT_CATEGORY_LABEL_EN,
} from "@/constants/projects";

type Locale = string;
const isEn = (l: Locale) => l === "en";

export function homeCopy(locale: Locale) {
  const en = isEn(locale);
  return {
    NAV_MENU: en ? home.NAV_MENU_EN : home.NAV_MENU,
    SERVICES_MENU: en ? home.SERVICES_MENU_EN : home.SERVICES_MENU,
    FOOTER: en ? home.FOOTER_EN : home.FOOTER,
    HERO: en ? home.HERO_EN : home.HERO,
    AUDIENCES: en ? home.AUDIENCES_EN : home.AUDIENCES,
    ONETEAM: en ? home.ONETEAM_EN : home.ONETEAM,
    SERVICES: en ? home.SERVICES_EN : home.SERVICES,
    PROCESS: en ? home.PROCESS_EN : home.PROCESS,
    MARQUEE_WORDS: en ? home.MARQUEE_WORDS_EN : home.MARQUEE_WORDS,
    GALLERY: en ? home.GALLERY_EN : home.GALLERY,
    ABOUT: en ? home.ABOUT_EN : home.ABOUT,
    SEOTEXT: en ? home.SEOTEXT_EN : home.SEOTEXT,
    FAQ: en ? home.FAQ_EN : home.FAQ,
    QUOTE_FORM: en ? home.QUOTE_FORM_EN : home.QUOTE_FORM,
  };
}

export function omCopy(locale: Locale) {
  const en = isEn(locale);
  return {
    OM_META: en ? om.OM_META_EN : om.OM_META,
    OM_HERO: en ? om.OM_HERO_EN : om.OM_HERO,
    OM_INTRO: en ? om.OM_INTRO_EN : om.OM_INTRO,
    OM_VALUES: en ? om.OM_VALUES_EN : om.OM_VALUES,
    OM_TEAM: en ? om.OM_TEAM_EN : om.OM_TEAM,
    OM_ONEPLAN: en ? om.OM_ONEPLAN_EN : om.OM_ONEPLAN,
    OM_GALLERY: en ? om.OM_GALLERY_EN : om.OM_GALLERY,
    OM_CTA: en ? om.OM_CTA_EN : om.OM_CTA,
  };
}

export function kontaktCopy(locale: Locale) {
  const en = isEn(locale);
  return {
    KONTAKT_META: en ? kontakt.KONTAKT_META_EN : kontakt.KONTAKT_META,
    KONTAKT_HERO: en ? kontakt.KONTAKT_HERO_EN : kontakt.KONTAKT_HERO,
    KONTAKT_FORM: en ? kontakt.KONTAKT_FORM_EN : kontakt.KONTAKT_FORM,
    KONTAKT_INFO: en ? kontakt.KONTAKT_INFO_EN : kontakt.KONTAKT_INFO,
    KONTAKT_STEPS: en ? kontakt.KONTAKT_STEPS_EN : kontakt.KONTAKT_STEPS,
    KONTAKT_AUDIENCES: en ? kontakt.KONTAKT_AUDIENCES_EN : kontakt.KONTAKT_AUDIENCES,
  };
}

export function privateCopy(locale: Locale) {
  const en = isEn(locale);
  return {
    PRIVATE_META: en ? privateC.PRIVATE_META_EN : privateC.PRIVATE_META,
    PRIVATE_HERO: en ? privateC.PRIVATE_HERO_EN : privateC.PRIVATE_HERO,
    PRIVATE_SERVICES: en ? privateC.PRIVATE_SERVICES_EN : privateC.PRIVATE_SERVICES,
    PRIVATE_PROJECTS: en ? privateC.PRIVATE_PROJECTS_EN : privateC.PRIVATE_PROJECTS,
    PRIVATE_ONE_TEAM: en ? privateC.PRIVATE_ONE_TEAM_EN : privateC.PRIVATE_ONE_TEAM,
    PRIVATE_PROCESS: en ? privateC.PRIVATE_PROCESS_EN : privateC.PRIVATE_PROCESS,
    PRIVATE_REVIEWS: en ? privateC.PRIVATE_REVIEWS_EN : privateC.PRIVATE_REVIEWS,
    PRIVATE_FAQ: en ? privateC.PRIVATE_FAQ_EN : privateC.PRIVATE_FAQ,
    PRIVATE_CTA: en ? privateC.PRIVATE_CTA_EN : privateC.PRIVATE_CTA,
  };
}

export function b2bCopy(locale: Locale) {
  const en = isEn(locale);
  return {
    B2B_META: en ? b2b.B2B_META_EN : b2b.B2B_META,
    B2B_HERO: en ? b2b.B2B_HERO_EN : b2b.B2B_HERO,
    B2B_SCENARIOS: en ? b2b.B2B_SCENARIOS_EN : b2b.B2B_SCENARIOS,
    B2B_SERVICES: en ? b2b.B2B_SERVICES_EN : b2b.B2B_SERVICES,
    B2B_WHY: en ? b2b.B2B_WHY_EN : b2b.B2B_WHY,
    B2B_PROJECTS: en ? b2b.B2B_PROJECTS_EN : b2b.B2B_PROJECTS,
    B2B_MODEL: en ? b2b.B2B_MODEL_EN : b2b.B2B_MODEL,
    B2B_CTA: en ? b2b.B2B_CTA_EN : b2b.B2B_CTA,
  };
}

export function projectsCopy(locale: Locale) {
  const en = isEn(locale);
  return {
    PROJECTS_LIST: en ? PROJECTS_LIST_EN : PROJECTS_LIST,
    PROJECT_CATEGORY_LABEL: en ? PROJECT_CATEGORY_LABEL_EN : PROJECT_CATEGORY_LABEL,
  };
}

/* Fixed UI labels for the CMS-driven pages (service + project detail) and the
   shared CtaBand phone button — strings that live in code, not the CMS. */
const UI = {
  da: {
    callPrefix: "Ring",
    servicesLabel: "Ydelser",
    getQuote: "Få et tilbud",
    seeProjects: "Se projekter",
    startMessage: "Start med en kort besked",
    serviceCasesH2: "Det har vi lavet",
    galleryStripH2: "Billeder fra opgaverne",
    openGallery: "Åbn hele galleriet",
    allServices: "Alle ydelser",
    serviceCtaH2: "Skal vi give et tilbud på din opgave?",
    serviceCtaText:
      "Send en kort beskrivelse og gerne et par billeder. Vi vurderer opgaven og vender tilbage inden 24 timer.",
    projectAboutH2: "Om projektet",
    projectWorkH3: "Opgaven omfattede",
    projectResultH2: "Resultat",
    projectFocusH3: "Fokus i udførelsen",
    projectGalleryH2: "Galleri",
    projectRelatedH2: "Andre projekter",
  },
  en: {
    callPrefix: "Call",
    servicesLabel: "Services",
    getQuote: "Get a quote",
    seeProjects: "See projects",
    startMessage: "Start with a short message",
    serviceCasesH2: "What we've done",
    galleryStripH2: "Photos from the work",
    openGallery: "Open the full gallery",
    allServices: "All services",
    serviceCtaH2: "Shall we quote for your job?",
    serviceCtaText:
      "Send a short description and a few photos if you have them. We assess the job and reply within 24 hours.",
    projectAboutH2: "About the project",
    projectWorkH3: "The job included",
    projectResultH2: "Result",
    projectFocusH3: "Focus in the work",
    projectGalleryH2: "Gallery",
    projectRelatedH2: "Other projects",
  },
} as const;

export function ui(locale: Locale) {
  return isEn(locale) ? UI.en : UI.da;
}
