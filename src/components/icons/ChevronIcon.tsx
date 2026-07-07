import type { IconProps } from "./types";

/** Chevron for dropdowns / accordions. Points down by default; rotate via className. */
export function ChevronIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`.trim()}
      aria-hidden
    >
      <path
        d="M1 1.5 6 6.5l5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
