import type { GalleryFilterId } from "@/constants/gallery";

/**
 * Content contract for a /ydelser/[slug] page. The section order on the page
 * is fixed (hero → scope → prices? → process → cases → gallery → FAQ → SEO
 * text → CTA); every field here feeds exactly one section.
 *
 * Copy rules (binding): facts only from the client's chat export or the old
 * grontland.dk site — never invent prices, durations or testimonials. Prices
 * are limited to the four verified rows in the content plan.
 */
export type ServiceContent = {
  slug: string;
  nav: string; // dropdown/footer label
  metaTitle: string; // ≤60 chars
  metaDescription: string; // 140–160 chars, ends in a CTA
  h1: string;
  heroSub: string; // selling outcome line
  heroImage: { src: string; alt: string };
  trustChips: readonly string[]; // 3 chips
  scope: { h2: string; items: readonly { title: string; desc: string }[] };
  prices?: {
    h2: string;
    note: string;
    rows: readonly { label: string; value: string }[];
  };
  process: { h2: string; steps: readonly { title: string; desc: string }[] };
  processImage?: { src: string; alt: string }; // full-bleed photo behind the step cards
  ctaImage?: { src: string; alt: string }; // right-bleed photo in the closing CTA band
  caseSlugs: readonly string[]; // -> constants/projects.ts slugs
  galleryFilter: GalleryFilterId;
  faq: { h2: string; items: readonly { q: string; a: string }[] }; // 4–6, unique
  seoText: {
    h2: string;
    text: string; // 120–180 words
    images: readonly { src: string; alt: string }[]; // 1–2 photos beside the text
  };
};
