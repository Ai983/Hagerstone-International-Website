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

interface ContentIndexProps {
  collection: Collection;
  heading: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  entries: ContentEntry[];
}

const ContentIndex = ({
  collection,
  heading,
  intro,
  metaTitle,
  metaDescription,
  entries,
}: ContentIndexProps) => {
  const canonical = `${SITE_URL}${COLLECTION_BASE_PATH[collection]}`;

  // Glossary reads best alphabetically; everything else newest-first.
  const ordered =
    collection === "glossary"
      ? [...entries].sort((a, b) => a.title.localeCompare(b.title))
      : entries;

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
      </div>
    </div>
  );
};

export default ContentIndex;
