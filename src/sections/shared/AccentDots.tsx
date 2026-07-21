/* Three dots echoing the card palette (Figma 3067:229 / 3067:308 — 18px
   circles, 6px apart), right-aligned against a section heading. */
export function AccentDots() {
  return (
    <div aria-hidden className="hidden shrink-0 gap-[6px] xl:flex">
      <span className="size-[18px] rounded-full bg-leaf" />
      <span className="size-[18px] rounded-full bg-moss" />
      <span className="size-[18px] rounded-full bg-pine" />
    </div>
  );
}
