import type { MetadataRoute } from "next";

import { getProjectSlugs, getServiceSlugs } from "@/lib/sanity/queries";
import { SITE_URL } from "@/lib/seo/meta";

const BASE = SITE_URL;

/* DA-only sitemap: one URL per path, hreflang da-DK + x-default. */
function entry(path: string, priority: number, changeFrequency: "monthly" | "yearly") {
  const da = `${BASE}${path}`;
  const languages = { "da-DK": da || BASE, "x-default": da || BASE };
  return {
    url: da || BASE,
    changeFrequency,
    priority,
    alternates: { languages },
  };
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
  ].map((path) => entry(path, path === "" ? 1 : 0.8, "monthly"));

  const services = serviceSlugs.map((slug) => entry(`/ydelser/${slug}`, 0.9, "monthly"));
  const projects = projectSlugs.map((slug) => entry(`/projekter/${slug}`, 0.6, "yearly"));

  return [...statics, ...services, ...projects];
}
