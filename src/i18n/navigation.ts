import { createNavigation } from "next-intl/navigation";
import type { ComponentProps } from "react";
import { createElement } from "react";

import { isDemoDisabled } from "@/lib/nav/demoDisabled";
import { routing } from "./routing";

/* Locale-aware navigation. `Link` prefixes internal paths with the active
   locale (/en/… when en, unprefixed for da via localePrefix "as-needed");
   external and tel:/mailto: hrefs pass through untouched. */
const nav = createNavigation(routing);

export const { redirect, usePathname, useRouter, getPathname } = nav;

/* Ungated locale-aware Link. Use ONLY where the href is the current path
   regardless of route (e.g. the language switcher) so it is never affected
   by the DEMO-DISABLED gate below. */
export const LocalizedLink = nav.Link;

type LinkProps = ComponentProps<typeof nav.Link>;

/**
 * DEMO-DISABLED gate: the shared `Link` renders any href to a demo-disabled
 * route (see src/lib/nav/demoDisabled.ts) as a muted, non-navigating <span>
 * instead of a working link. Re-enable everything by emptying
 * DEMO_DISABLED_ROUTE_PREFIXES. Every link on the site flows through here, so
 * this one gate covers nav, footer, dropdown, cards, CTAs and crosslinks.
 */
export function Link({ href, children, className, ...rest }: LinkProps) {
  if (typeof href === "string" && isDemoDisabled(href)) {
    return createElement(
      "span",
      {
        // DEMO-DISABLED link — find via data attribute in the DOM.
        // Rendered visually identical to a live link (no muting/cursor
        // change); it just doesn't navigate.
        "data-demo-disabled": "true",
        "aria-disabled": true,
        className,
      },
      children,
    );
  }
  return createElement(nav.Link, { href, className, ...rest }, children);
}
