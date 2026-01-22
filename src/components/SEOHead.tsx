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
}

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
}: SEOHeadProps) => {
  const fullTitle = appendSiteName
    ? title.includes('Hagerstone')
      ? title
      : `${title} | Hagerstone International`
    : title;
  const imageAlt = ogImageAlt ?? fullTitle;
  
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
