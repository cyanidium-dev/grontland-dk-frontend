import type { MetadataRoute } from "next";

import { PROJECTS } from "@/constants/projects";
import { SERVICES_PAGES } from "@/constants/services";

const BASE = "https://grontland.dk";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const services = SERVICES_PAGES.map((s) => ({
    url: `${BASE}/ydelser/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projects = PROJECTS.map((p) => ({
    url: `${BASE}/projekter/${p.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...statics, ...services, ...projects];
}
