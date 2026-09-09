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
  buildSchemaGraph,
  organizationSchema,
} from "@/lib/seo";
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
        ...(entry.heroImage ? { image: `${SITE_URL}${entry.heroImage}` } : {}),
      },
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
        ogImage={entry.heroImage}
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
            // Glossary pages lead with the definition so the answer is above the
            // fold for both readers and AI answer engines.
            <p className="mt-6 border-l-4 border-accent bg-muted/50 p-4 text-lg text-foreground">
              {entry.definition}
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
          />
        )}

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-accent prose-table:text-sm">
          <Body />
        </div>

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
