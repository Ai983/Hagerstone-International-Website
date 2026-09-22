import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  SITE_URL,
  buildSchemaGraph,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/locationSchema";
import { COLLECTION_BASE_PATH, type Collection } from "@/content/schema";
import type { ContentEntry } from "@/content/types";

// Listing page for one content collection.
//
// One template serves every collection — the entries come from the generated
// index, so a new article appears here automatically. Without this, published
// content would be reachable only by knowing the URL, and orphaned pages with
// no internal links are exactly what Google declines to index.

export interface CollectionCta {
  heading: string;
  body: string;
  href: string;
  label: string;
}

interface ContentIndexProps {
  collection: Collection;
  heading: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  entries: ContentEntry[];
  cta?: CollectionCta;
}

const ContentIndex = ({
  collection,
  heading,
  intro,
  metaTitle,
  metaDescription,
  entries,
  cta,
}: ContentIndexProps) => {
  const canonical = `${SITE_URL}${COLLECTION_BASE_PATH[collection]}`;

  // Glossary reads best alphabetically; everything else newest-first.
  const ordered =
    collection === "glossary"
      ? [...entries].sort((a, b) => a.title.localeCompare(b.title))
      : entries;

  // Image-led collections (design studies) read as cards; text collections
  // (glossary, materials) read better as a dense scannable list. The content
  // decides the layout, so no collection needs its own template.
  const useCards = ordered.some((entry) => entry.heroImage);

  return (
    <div className="min-h-screen bg-background pt-24">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "CollectionPage",
            name: heading,
            url: canonical,
            description: metaDescription,
          },
          {
            "@type": "ItemList",
            itemListElement: ordered.map((entry, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: entry.title,
              url: `${SITE_URL}${entry.path}`,
              ...(entry.heroImage ? { image: `${SITE_URL}${entry.heroImage}` } : {}),
            })),
          },
          buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: heading, url: canonical },
          ]),
        ])}
      />

      <div className="mx-auto max-w-4xl px-6 pb-20 md:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">{heading}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        </header>

        {ordered.length === 0 ? (
          <p className="text-muted-foreground">Nothing published here yet.</p>
        ) : useCards ? (
          <div className="grid gap-8 sm:grid-cols-2">
            {ordered.map((entry) => (
              <Link
                key={entry.path}
                to={entry.path}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent hover:shadow-md"
              >
                {entry.heroImage && (
                  <img
                    src={entry.heroImage}
                    alt={entry.heroImageAlt ?? ""}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  {entry.collection === "design" && (
                    <span className="mb-3 self-start rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {entry.designStage === "delivered" ? "Delivered" : "Concept study"}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold leading-snug text-foreground group-hover:text-accent">
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {entry.definition ?? entry.metaDescription}
                  </p>
                  <span className="mt-4 text-sm font-medium text-accent">
                    Read the study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {ordered.map((entry) => (
              <li key={entry.path} className="py-5">
                <Link to={entry.path} className="group block">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
                    {entry.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.definition ?? entry.metaDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {cta && (
          <section className="mt-16 rounded-xl border border-border bg-muted/30 p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">{cta.heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{cta.body}</p>
            <Link
              to={cta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {cta.label}
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

export default ContentIndex;
