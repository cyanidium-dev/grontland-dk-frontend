import type { ReactNode } from "react";

import { cn } from "@/util/cn";

/** Centered content column. Design content width is 1280px (max-w-7xl). */
export function Container({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 xl:px-8", className)}>
      {children}
    </div>
  );
}
