import { Fragment, type ReactNode } from "react";

import { cn } from "@/util/cn";
import { StarIcon } from "@/components/icons";

/** Infinite horizontal marquee. Duplicates its items so the loop is seamless
 *  (the track translates -50%). Pauses on hover. Pure CSS, no dependency. */
export function Marquee({
  items,
  durationSec = 22,
  separator = <StarIcon className="mx-6 size-3 shrink-0 text-leaf" />,
  className = "",
  itemClassName = "",
}: {
  items: ReactNode[];
  durationSec?: number;
  separator?: ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const sequence = [...items, ...items];
  return (
    <div className={cn("marquee w-full overflow-hidden", className)}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${durationSec}s` } as React.CSSProperties}
      >
        {sequence.map((item, i) => (
          <Fragment key={i}>
            <span className={cn("inline-flex items-center", itemClassName)}>{item}</span>
            {separator}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
