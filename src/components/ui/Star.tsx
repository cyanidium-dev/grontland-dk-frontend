import { cn } from "@/util/cn";
import { StarIcon } from "@/components/icons";

const VARIANTS = {
  leaf: "bg-leaf text-white",
  pine: "bg-pine text-leaf",
  light: "bg-white text-leaf",
  plain: "text-leaf",
} as const;

export type StarVariant = keyof typeof VARIANTS;

/** Round star badge used as a list bullet / chip accent. */
export function Star({
  variant = "leaf",
  className = "",
}: {
  variant?: StarVariant;
  className?: string;
}) {
  const plain = variant === "plain";
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center xl:size-10",
        !plain && "rounded-full p-1.5",
        VARIANTS[variant],
        className,
      )}
    >
      <StarIcon className="h-full w-full" />
    </span>
  );
}
