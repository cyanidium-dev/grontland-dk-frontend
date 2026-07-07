import { cn } from "@/util/cn";
import { Star, type StarVariant } from "./Star";
import { InfoBox, type InfoBoxVariant } from "./InfoBox";

/** Star badge + short uppercase label inside an InfoBox. */
export function StarChip({
  text,
  boxVariant = "light",
  starVariant = "leaf",
  className = "",
  textSize = "xl",
}: {
  text: string;
  boxVariant?: InfoBoxVariant;
  starVariant?: StarVariant;
  className?: string;
  textSize?: "sm" | "xl";
}) {
  return (
    <InfoBox
      variant={boxVariant}
      className={cn("flex items-center gap-4 p-[18px] xl:gap-5 xl:py-6", className)}
    >
      <Star variant={starVariant} />
      <p
        className={cn(
          "text-[12px] font-semibold uppercase leading-tight",
          textSize === "xl" && "xl:text-[16px]",
        )}
      >
        {text}
      </p>
    </InfoBox>
  );
}
