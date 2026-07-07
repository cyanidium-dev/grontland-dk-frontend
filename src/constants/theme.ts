/**
 * Grontland DK design tokens (source: Figma "GrøntLand DK" + preview v2.1).
 * CSS consumes these via the @theme block in globals.css; this file exposes
 * the same values to TS/JS (inline styles, canvas, chart libs, etc.).
 */

export const COLORS = {
  pine: "#1f3d2e", // Everglade — primary dark green
  leaf: "#7ab547", // Sushi — accent green
  moss: "#2f6f57", // Amazon — mid green
  mist: "#f7faf8", // near-white section background
  line: "#e3eae4", // Gray Nurse — hairline borders
  white: "#ffffff",
  black: "#201f23",
} as const;

export const FONTS = {
  /** Body + headings. */
  manrope: "var(--font-manrope)",
  /** Stat/label/chip text. */
  montserrat: "var(--font-montserrat)",
} as const;

/** Type scale from the design (px). Headings use Manrope Bold uppercase. */
export const FONT_SIZE = {
  h1: 52,
  h2: 52,
  h2Sm: 32,
  h3: 24,
  body: 16,
  bodyLg: 18,
  label: 14,
  chip: 12,
} as const;

export type ColorToken = keyof typeof COLORS;
