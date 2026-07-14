/* Renders one or more JSON-LD blocks. Server component — output is inlined
   in the SSR HTML so crawlers see it without JS. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
