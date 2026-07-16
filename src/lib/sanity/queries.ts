/**
 * CMS reads — every query projects documents into the site's existing
 * TypeScript shapes (da locale flattened; images as {src, alt} URLs), so
 * sections/components keep their props and only the data source changes.
 */
import { sanityFetch } from "./fetch";

/* Shared projection snippets */
const IMG = `{"src": asset->url, "alt": alt.da}`;
const CTA = `{"label": label.da, href}`;

// ---------------------------------------------------------------------------
// siteSettings
// ---------------------------------------------------------------------------
export type SiteSettings = {
  phone: string;
  phoneHref: string;
  email: string;
  cvr: string;
  area: string;
  hours: string | null;
  replyPromise: string | null;
  footerBlurb: string | null;
  copyright: string | null;
};

export function getSiteSettings(): Promise<SiteSettings> {
  return sanityFetch<SiteSettings>(
    `*[_id == "siteSettings"][0]{
      phone, phoneHref, email, cvr,
      "area": area.da, "hours": hours.da, "replyPromise": replyPromise.da,
      "footerBlurb": footerBlurb.da, copyright
    }`,
  );
}
