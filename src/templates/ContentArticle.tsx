import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import {
  BRAND_NAME,
  SITE_URL,
  authorSchema,
  buildFaqSchema,
  buildImageGallerySchema,
  buildSchemaGraph,
  organizationSchema,
} from "@/lib/seo";
import ContentGallery from "@/components/content/ContentGallery";
import { buildBreadcrumbSchema } from "@/lib/locationSchema";
import { COLLECTION_BASE_PATH } from "@/content/schema";
import type { ContentEntry } from "@/content/types";
import { getRelated } from "@/lib/contentModules";

// Shared layout for every MDX-backed page.
//
// The client and server routes resolve the body differently (lazy vs eager
// import), but both render through here — so SEO tags, structured data, the FAQ
// block and the visible layout are defined exactly once.

const COLLECTION_LABEL: Record<string, string> = {
  insights: "Insights",
  glossary: "Glossary",
  compliance: "Compliance",
  materials: "Materials",
  compare: "Comparisons",
  cost: "Costs",
  guides: "Guides",
  architects: "For Architects",
  calculators: "Calculators",
  // Sub-service collections sit under an existing service page, so the
  // breadcrumb names that service rather than the internal collection key.
  facade: "Facade & Glazing",
  interiors: "Interior Fit-Out",
  mep: "MEP",
  peb: "PEB Structures",
  civil: "Construction",
  estates: "Business Districts & Estates",
  industries: "Industries",
  design: "Design Studies",
};

interface ContentArticleProps {
  entry: ContentEntry;
  /** The compiled MDX body. */
  Body: ComponentType;
}

const ContentArticle = ({ entry, Body }: ContentArticleProps) => {
  const collectionLabel = COLLECTION_LABEL[entry.collection] ?? entry.collection;
  const collectionPath = COLLECTION_BASE_PATH[entry.collection];
  const canonical = `${SITE_URL}${entry.path}`;
  const related = getRelated(entry);

  const absolute = (src: string) => `${SITE_URL}${src}`;
  // Hero first, then gallery images: Google treats the order as significance.
  const articleImages = [
    ...(entry.heroImage ? [absolute(entry.heroImage)] : []),
    ...entry.gallery.slice(0, 3).map((image) => absolute(image.src)),
  ];
  const isConcept = entry.collection === "design" && entry.designStage === "concept";

  const schema = buildSchemaGraph(
    [
      organizationSchema,
      {
        "@type": "Article",
        headline: entry.title,
        description: entry.metaDescription,
        datePublished: entry.publishedOn,
        dateModified: entry.updatedOn ?? entry.publishedOn,
        author: authorSchema,
        publisher: { "@type": "Organization", name: BRAND_NAME, url: SITE_URL },
        mainEntityOfPage: canonical,
        ...(articleImages.length > 0 ? { image: articleImages } : {}),
        // Says in the markup what the page says in words: this is a design
        // proposal, not a record of completed work.
        ...(isConcept ? { creativeWorkStatus: "Concept design" } : {}),
      },
      entry.gallery.length > 0
        ? buildImageGallerySchema({
            id: `${canonical}#gallery`,
            name: `${entry.title} — layouts and views`,
            url: canonical,
            images: entry.gallery.map((image) => ({
              contentUrl: absolute(image.src),
              alt: image.alt,
              caption: image.caption,
              width: image.width,
              height: image.height,
            })),
          })
        : null,
      buildBreadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: collectionLabel, url: `${SITE_URL}${collectionPath}` },
        { name: entry.title, url: canonical },
      ]),
      // Only emit FAQPage when questions are actually rendered below — marking
      // up answers that aren't visible on the page is a Google violation.
      entry.faqs.length > 0 ? buildFaqSchema(entry.faqs) : null,
    ].filter(Boolean) as Array<Record<string, unknown>>,
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      <SEOHead
        title={entry.metaTitle}
        description={entry.metaDescription}
        canonical={canonical}
        keywords={entry.keywords.join(", ")}
        ogType="article"
        // og:image must be absolute; a relative path silently falls back to the
        // site default on most scrapers.
        ogImage={entry.heroImage ? absolute(entry.heroImage) : undefined}
        ogImageAlt={entry.heroImageAlt}
        structuredData={schema}
      />

      <article className="mx-auto max-w-3xl px-6 pb-20 md:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={collectionPath} className="hover:text-foreground">{collectionLabel}</Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {entry.title}
          </h1>

          {entry.definition && (
            // The short answer, above the fold for both readers and AI answer
            // engines. Required on glossary; used by design studies too.
            <p className="mt-6 border-l-4 border-accent bg-muted/50 p-4 text-lg text-foreground">
              {entry.definition}
            </p>
          )}

          {isConcept && (
            // Decks are client proposals. Saying so on the page is the whole
            // reason this collection can be published without a reviewer.
            <p className="mt-6 rounded-md border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Concept design study.</strong> The layouts
              and views below are design proposals produced by Hagerstone's design team. They
              are not a record of a completed project, and the client is not identified.
            </p>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            By {entry.author} ·{" "}
            <time dateTime={entry.publishedOn}>
              {new Date(entry.publishedOn).toLocaleDateString("en-IN", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
            {" · "}{entry.readingMinutes} min read
            {entry.reviewedBy && <> · Reviewed by {entry.reviewedBy}</>}
          </p>
        </header>

        {entry.heroImage && (
          <img
            src={entry.heroImage}
            alt={entry.heroImageAlt ?? ""}
            className="mb-10 w-full rounded-lg"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:scroll-mt-28 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-accent prose-a:underline prose-a:underline-offset-4 prose-table:text-sm">
          <Body />
        </div>

        {/* Outside the prose wrapper so Typography does not restyle the figures. */}
        <ContentGallery groups={entry.galleryGroups} images={entry.gallery} />

        {entry.citations.length > 0 && (
          <section className="mt-12 rounded-lg border border-border p-6">
            <h2 className="text-base font-semibold text-foreground">Standards referenced</h2>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {entry.citations.map((citation) => (
                <li key={`${citation.label}-${citation.clause ?? ""}`}>
                  <span className="font-medium text-foreground">{citation.label}</span>
                  {citation.clause && <> — {citation.clause}</>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {entry.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Frequently asked</h2>
            <Accordion type="single" collapsible>
              {entry.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Related</h2>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-accent hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
};

export default ContentArticle;
