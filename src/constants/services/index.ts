import type { ServiceContent } from "./types";

import { BELAEGNINGSARBEJDE } from "./belaegningsarbejde";
import { HAVEARBEJDE } from "./havearbejde";
import { MALERSERVICE } from "./malerservice";
import { MURERARBEJDE } from "./murerarbejde";

export type { ServiceContent } from "./types";

/* Catalog grows per content batch; order = SERVICES_MENU order. */
export const SERVICES_PAGES: readonly ServiceContent[] = [
  HAVEARBEJDE,
  BELAEGNINGSARBEJDE,
  MURERARBEJDE,
  MALERSERVICE,
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_PAGES.find((s) => s.slug === slug);
}
