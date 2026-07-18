/**
 * ============================================================================
 * DEMO-DISABLED — TEMPORARY: links to the unfinished pages are switched off
 * for the client demo and must be RE-ENABLED afterwards.
 * ============================================================================
 *
 * What this does: the shared navigation `Link` (src/i18n/navigation.ts) checks
 * every href against the prefixes below. Any link to one of these routes is
 * rendered as a non-navigating, muted span instead of a working link — so no
 * demo click leads to a not-ready page. The target pages themselves still
 * exist and work by direct URL; only the *links* to them are disabled.
 *
 * TO RE-ENABLE AFTER THE DEMO: empty the array below (set
 * `DEMO_DISABLED_ROUTE_PREFIXES = []`) — that instantly restores every link.
 * Then delete this file, the gate in src/i18n/navigation.ts, and the
 * `LocalizedLink` shim if no longer needed. Grep the codebase for
 * "DEMO-DISABLED" to find every touch point.
 *
 * Disabled route groups: projects (/projekter), services (/ydelser),
 * private customers (/private), contractors/B2B (/entreprenorer).
 */
export const DEMO_DISABLED_ROUTE_PREFIXES = [
  "/projekter",
  "/ydelser",
  "/private",
  "/entreprenorer",
] as const;

/** True when `href` points at a demo-disabled route (root or any sub-path). */
export function isDemoDisabled(href: string): boolean {
  return DEMO_DISABLED_ROUTE_PREFIXES.some(
    (prefix) => href === prefix || href.startsWith(`${prefix}/`),
  );
}
