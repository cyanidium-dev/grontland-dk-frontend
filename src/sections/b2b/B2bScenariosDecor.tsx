/* Decor for the collaboration-formats band (Figma 3067:180 mockup).

   The rings SVG holds the *unrotated* artwork (viewBox 243.8x295.78) but the
   design places it with a 377.32x380.52 bounding box — that difference is the
   rotation. Solving w*cos + h*sin = 377.32 / w*sin + h*cos = 380.52 gives
   42.5deg at a render size of 242x294, which reproduces the bbox to within
   0.03px. Anchored 129px right of centre so it tracks the (centred) container,
   and left behind the content — it must never sit over card text.

   Pinned to the section's bottom, not its top: the design places the rings
   relative to the cards, and the heading wraps to a different height per locale
   (da 2 lines, en 3), which would otherwise drift the overlap. The cards are the
   last element, so bottom-209px holds the intended 268px card offset for both. */
export function B2bScenariosDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-b2b-scenarios.svg"
        alt=""
        className="absolute bottom-[209px] left-[calc(50%+129px)] h-[294px] w-[242px] max-w-none rotate-[42.5deg]"
      />
    </div>
  );
}

/* Three dots echoing the card palette, right-aligned against the heading
   (Figma 3067:229 — 18px circles, 6px apart). */
export function B2bScenariosDots() {
  return (
    <div aria-hidden className="hidden shrink-0 gap-[6px] xl:flex">
      <span className="size-[18px] rounded-full bg-leaf" />
      <span className="size-[18px] rounded-full bg-moss" />
      <span className="size-[18px] rounded-full bg-pine" />
    </div>
  );
}
