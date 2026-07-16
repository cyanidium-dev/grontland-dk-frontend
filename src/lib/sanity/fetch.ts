import { client } from "./client";

/* All CMS reads go through here: hourly time-based revalidation site-wide
   plus the shared "sanity" tag, so a future webhook route can
   revalidateTag("sanity") for instant updates. */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate: 3600, tags: ["sanity"] },
  });
}
