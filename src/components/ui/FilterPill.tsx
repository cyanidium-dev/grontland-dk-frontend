import { cn } from "@/util/cn";

/** Selectable filter pill (gallery / project category filters). Presentational —
 *  wire `active` + `onClick` from a parent to build a filter group. Without
 *  `onClick`, renders a non-interactive chip (not a button). */
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
  const classes = cn(
    "rounded-full border px-5 py-2.5 text-[12px] font-semibold uppercase leading-[20px] transition-colors duration-200",
    active
      ? "border-pine bg-pine text-white"
      : "border-line bg-white text-pine",
    onClick && !active && "cursor-pointer hover:border-pine/40",
    !onClick && "cursor-default",
    className,
  );

  if (!onClick) {
    return <span className={classes}>{label}</span>;
  }

  return (
    <button type="button" onClick={onClick} aria-pressed={active} className={classes}>
      {label}
    </button>
  );
}
