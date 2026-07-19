import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/* Locale-aware navigation. `Link` prefixes internal paths with the active
   locale (/en/… when en, unprefixed for da via localePrefix "as-needed");
   external and tel:/mailto: hrefs pass through untouched. */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
