import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/* Locale-aware navigation. With DA-only routing, paths stay unprefixed
   (localePrefix "as-needed"); external and tel:/mailto: hrefs pass through. */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
