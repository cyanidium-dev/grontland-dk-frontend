import type { ReactNode } from "react";

import { cn } from "@/util/cn";

const VARIANTS = {
  light: "bg-white text-pine",
  mist: "bg-mist text-pine",
  leaf: "bg-leaf text-white",
  pine: "bg-pine text-white",
} as const;

export type InfoBoxVariant = keyof typeof VARIANTS;

/** Rounded surface card — base for chips, stat boxes, service tiles. */
export function InfoBox({
  variant = "light",
  className = "",
  children,
}: {
  variant?: InfoBoxVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("rounded-[18px]", VARIANTS[variant], className)}>
      {children}
    </div>
  );
}
