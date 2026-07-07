import { cn } from "@/util/cn";

/** Selectable filter pill (gallery / project category filters). Presentational —
 *  wire `active` + `onClick` from a parent to build a filter group. */
export function FilterPill({
  label,
  active = false,
  onClick,
  className = "",
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-full border px-5 py-2 text-[12px] font-semibold uppercase leading-[20px] transition-colors duration-200",
        active
          ? "border-pine bg-pine text-white"
          : "border-line bg-white text-pine hover:border-pine/40",
        className,
      )}
    >
      {label}
    </button>
  );
}
