import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogImageAlt?: string;
  keywords?: string;
  structuredData?: object | object[];
  appendSiteName?: boolean;
  /** Overrides the date read from the Article node in structuredData. */
  publishedTime?: string;
  /** Overrides the date read from the Article node in structuredData. */
  modifiedTime?: string;
}

const ARTICLE_TYPES = new Set(["Article", "BlogPosting", "NewsArticle"]);

type ArticleDates = { datePublished?: string; dateModified?: string };

// article:published_time / modified_time are read from the Article node already
// in the page's JSON-LD, so the social tags can never disagree with the schema
// and no page has to state its dates twice.
const findArticleDates = (data: unknown): ArticleDates | undefined => {
  if (Array.isArray(data)) {
    for (const item of data) {
      const found = findArticleDates(item);
      if (found) return found;
    }
    return undefined;
  }
  if (!data || typeof data !== "object") return undefined;
  const node = data as Record<string, unknown>;
  if (node["@graph"]) return findArticleDates(node["@graph"]);
  const type = node["@type"];
  const types = Array.isArray(type) ? type : [type];
  if (types.some((t) => typeof t === "string" && ARTICLE_TYPES.has(t))) {
    return {
      datePublished: typeof node.datePublished === "string" ? node.datePublished : undefined,
      dateModified: typeof node.dateModified === "string" ? node.dateModified : undefined,
    };
  }
  return undefined;
};

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://hagerstone.com/hero-images/officeinterior.webp",
  ogType = "website",
  ogImageAlt,
  keywords,
  structuredData,
  appendSiteName = true,
  publishedTime,
  modifiedTime,
}: SEOHeadProps) => {
  // " | Hagerstone" rather than " | Hagerstone International": Google truncates
  // the title around 60 characters, and the longer suffix cost 26 of them. On a
  // site where most titles come from a frontmatter metaTitle capped at 65, that
  // append was pushing a third of all pages past the cut-off — the brand was
  // being shown at the expense of the words someone actually searched for.
  const fullTitle = appendSiteName
    ? title.includes('Hagerstone')
      ? title
      : `${title} | Hagerstone`
    : title;
  const imageAlt = ogImageAlt ?? fullTitle;

  const isArticle = ogType === "article";
  const schemaDates = isArticle ? findArticleDates(structuredData) : undefined;
  const articlePublished = isArticle ? publishedTime ?? schemaDates?.datePublished : undefined;
  const articleModified = isArticle
    ? modifiedTime ?? schemaDates?.dateModified ?? articlePublished
    : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Hagerstone International" />
      <meta property="og:locale" content="en_IN" />
      {articlePublished && <meta property="article:published_time" content={articlePublished} />}
      {articleModified && <meta property="article:modified_time" content={articleModified} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />


      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
