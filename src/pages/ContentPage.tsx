import { Suspense, lazy, useMemo } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ContentArticle from "@/templates/ContentArticle";
import { getContentByPath, loadContentBody, loadContentDetails } from "@/lib/contentModules";

// Client route for every MDX-backed page.
//
// One component serves all content collections — /insights/:slug,
// /glossary/:slug and the rest all land here, and the entry is resolved from
// the current path. That is what keeps the router flat: content grows by
// hundreds of files while the route table stays at one entry per collection.
//
// The body and the entry's details (FAQs, sources, gallery) load together, in
// parallel, behind the same Suspense boundary the body alone used to have.

const ContentPage = () => {
  const { pathname } = useLocation();
  const entry = getContentByPath(pathname);

  // Resolved by path, so an unpublished or unknown slug is a genuine 404
  // rather than an empty shell.
  const Article = useMemo(() => {
    if (!entry) return null;
    const loadBody = loadContentBody(entry);
    const loadDetails = loadContentDetails(entry);
    if (!loadBody || !loadDetails) return null;
    return lazy(async () => {
      const [body, details] = await Promise.all([loadBody(), loadDetails()]);
      const full = { ...entry, ...details };
      return { default: () => <ContentArticle entry={full} Body={body.default} /> };
    });
  }, [entry]);

  if (!entry || !Article) return <NotFound />;

  return (
    <Suspense
      fallback={<div className="min-h-screen bg-background pt-24" aria-busy="true" />}
    >
      <Article />
    </Suspense>
  );
};

export default ContentPage;
