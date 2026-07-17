import { Link } from "@/i18n/navigation";

import { cn } from "@/util/cn";

/** Wordmark — "Grønt Land" (pine/white) + "DK" (leaf). Text-based per the Figma. */
export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const brand = variant === "onDark" ? "text-white" : "text-pine";
  return (
    <Link
      href="/"
      aria-label="Grønt Land DK — forside"
      className={cn(
        "font-display text-[18px] font-extrabold leading-[28px] tracking-[-0.025em]",
        className,
      )}
    >
      <span className={brand}>Grønt Land </span>
      <span className="text-leaf">DK</span>
    </Link>
  );
}
