import { cn } from "@/util/cn";

/** Three brand dots (leaf → moss → pine) used as a heading eyebrow. */
export function Dots({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={cn("flex gap-1.5", className)}>
      <span className="size-3 rounded-full bg-leaf" />
      <span className="size-3 rounded-full bg-moss" />
      <span className="size-3 rounded-full bg-pine" />
    </span>
  );
}
