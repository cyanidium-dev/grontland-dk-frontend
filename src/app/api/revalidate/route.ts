import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/* Sanity publish webhook → on-demand revalidation.

   CMS reads keep a 6 h `revalidate` only as a fallback (short timers burn
   the Vercel Hobby ISR-writes quota). Fresh content comes from here:
   Sanity → API → Webhooks: URL https://grontland.dk/api/revalidate, POST,
   trigger on create/update/delete, drafts off,
   secret = SANITY_REVALIDATE_SECRET (Vercel env).

   Every CMS read carries the "sanity" tag (see lib/sanity/fetch.ts); the
   layout path reset also expires the prerendered pages right away. */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    console.error("[api/revalidate] SANITY_REVALIDATE_SECRET is not set");
    return NextResponse.json({ message: "Revalidate secret is not configured" }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    revalidateTag("sanity", "max");
    revalidatePath("/", "layout");

    return NextResponse.json({ revalidated: true, type: body?._type ?? null, now: Date.now() });
  } catch (err) {
    console.error("[api/revalidate]", err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
