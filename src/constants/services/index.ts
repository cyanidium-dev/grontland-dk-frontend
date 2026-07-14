import type { ServiceContent } from "./types";

import { BELAEGNINGSARBEJDE } from "./belaegningsarbejde";
import { DEMONTERINGSARBEJDE } from "./demonteringsarbejde";
import { HAVEARBEJDE } from "./havearbejde";
import { MALERSERVICE } from "./malerservice";
import { MURERARBEJDE } from "./murerarbejde";
import { RENGORINGSARBEJDE } from "./rengoringsarbejde";
import { TOMRERARBEJDE } from "./tomrerarbejde";
import { TOTALENTREPRISE } from "./totalentreprise";

export type { ServiceContent } from "./types";

/* Order = SERVICES_MENU order (constants/home.ts). */
export const SERVICES_PAGES: readonly ServiceContent[] = [
  HAVEARBEJDE,
  BELAEGNINGSARBEJDE,
  MURERARBEJDE,
  MALERSERVICE,
  TOMRERARBEJDE,
  TOTALENTREPRISE,
  DEMONTERINGSARBEJDE,
  RENGORINGSARBEJDE,
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_PAGES.find((s) => s.slug === slug);
}
