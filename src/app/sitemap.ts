import type { MetadataRoute } from "next";

import { getProjectSlugs, getServiceSlugs } from "@/lib/sanity/queries";

const BASE = "https://grontland.dk";

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
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const services = serviceSlugs.map((slug) => ({
    url: `${BASE}/ydelser/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projects = projectSlugs.map((slug) => ({
    url: `${BASE}/projekter/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...statics, ...services, ...projects];
}
