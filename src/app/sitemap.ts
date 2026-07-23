import type { MetadataRoute } from "next";

import { getProjectSlugs, getServiceSlugs } from "@/lib/sanity/queries";
import { SITE_URL } from "@/lib/seo/meta";

const BASE = SITE_URL;

/* Emit each route once per locale. da is unprefixed (localePrefix
   "as-needed"), en lives under /en; both paths cross-reference via
   alternates.languages for hreflang. Region-qualified codes + x-default match
   the page-level <link> set exactly — mixed da vs da-DK annotations would be
   conflicting signals and Google drops conflicting hreflang pairs. */
function entry(path: string, priority: number, changeFrequency: "monthly" | "yearly") {
  const da = `${BASE}${path}`;
  const en = `${BASE}/en${path === "" ? "" : path}`;
  const languages = { "da-DK": da || BASE, "en-DK": en, "x-default": da || BASE };
  return [
    { url: da || BASE, changeFrequency, priority, alternates: { languages } },
    { url: en, changeFrequency, priority: priority * 0.9, alternates: { languages } },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [serviceSlugs, projectSlugs] = await Promise.all([
    getServiceSlugs(),
    getProjectSlugs(),
  ]);

  const statics = [
    "",
    "/ydelser",
    "/private",
    "/entreprenorer",
    "/projekter",
    "/galleri",
    "/om-os",
    "/kontakt",
  ].flatMap((path) => entry(path, path === "" ? 1 : 0.8, "monthly"));

  const services = serviceSlugs.flatMap((slug) => entry(`/ydelser/${slug}`, 0.9, "monthly"));
  const projects = projectSlugs.flatMap((slug) => entry(`/projekter/${slug}`, 0.6, "yearly"));

  return [...statics, ...services, ...projects];
}
