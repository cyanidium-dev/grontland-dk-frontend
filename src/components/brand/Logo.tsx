import Link from "next/link";

import { cn } from "@/util/cn";

/** Wordmark — "Grønt Land" (pine) + "DK" (leaf). Text-based per the Figma. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Grønt Land DK — forside"
      className={cn(
        "font-display text-[18px] font-extrabold leading-[28px] tracking-[-0.025em]",
        className,
      )}
    >
      <span className="text-pine">Grønt Land </span>
      <span className="text-leaf">DK</span>
    </Link>
  );
}
