import { cn } from "@/util/cn";

const SIZES = {
  sm: { dot: "size-3", gap: "gap-1.5" },
  md: { dot: "size-[18px]", gap: "gap-1.5" },
} as const;

/** Three brand dots (leaf → moss → pine) used as a heading eyebrow. */
export function Dots({
  className = "",
  size = "sm",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  const { dot, gap } = SIZES[size];
  return (
    <span aria-hidden className={cn("flex", gap, className)}>
      <span className={cn("rounded-full bg-leaf", dot)} />
      <span className={cn("rounded-full bg-moss", dot)} />
      <span className={cn("rounded-full bg-pine", dot)} />
    </span>
  );
}
