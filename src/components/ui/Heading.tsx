import type { ElementType, ReactNode } from "react";

import { cn } from "@/util/cn";

const SIZES = {
  hero: "text-[36px] leading-none xl:text-[52px]",
  section: "text-[28px] leading-none xl:text-[52px]",
  card: "text-[22px] leading-none xl:text-[32px]",
} as const;

export type HeadingSize = keyof typeof SIZES;

/** Shared display heading — Manrope bold uppercase. Used across all sections
 *  so the big-title style lives in one place. */
export function Heading({
  as: Tag = "h2",
  size = "section",
  className = "",
  children,
}: {
  as?: ElementType;
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("font-display font-bold uppercase text-pine", SIZES[size], className)}>
      {children}
    </Tag>
  );
}
