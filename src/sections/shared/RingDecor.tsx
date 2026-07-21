import { cn } from "@/util/cn";

/* Shared ring decor (Figma 3067:257/283/321/344 — one piece of artwork, the
   four exports are pixel-identical).

   `/svg/decor-rings.svg` holds the *unrotated* art (viewBox 243.796x295.781);
   the design places each instance at a rotated bounding box, so the angle is
   derived per placement by solving w*cos + h*sin = W' / w*sin + h*cos = H'.
   That fixes the magnitude but NOT the sign — θ and θ-180 give the same box,
   mirrored — so every angle here was confirmed against the Figma render, not
   just against its measured box. All instances read "open rings upper-right,
   spout curling lower-left". See docs/figma-mcp-workflow.md.

   Rendered at 242x294 in every placement; only the angle and offsets differ.
   Sits at z-0 so section content (z-10) always paints over it. */
export function RingDecor({ rotate, className }: { rotate: number; className: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings.svg"
        alt=""
        className={cn("absolute h-[294px] w-[242px] max-w-none", className)}
        style={{ rotate: `${rotate}deg` }}
      />
    </div>
  );
}
