import type { ServiceContent } from "./types";

export type { ServiceContent } from "./types";

/* Catalog grows per content batch; order = SERVICES_MENU order. */
export const SERVICES_PAGES: readonly ServiceContent[] = [];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_PAGES.find((s) => s.slug === slug);
}
