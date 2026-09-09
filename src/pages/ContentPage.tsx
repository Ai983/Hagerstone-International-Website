import { Suspense, lazy, useMemo } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ContentArticle from "@/templates/ContentArticle";
import { getContentByPath, loadContentBody } from "@/lib/contentModules";

// Client route for every MDX-backed page.
//
// One component serves all content collections — /insights/:slug,
// /glossary/:slug and the rest all land here, and the entry is resolved from
// the current path. That is what keeps the router flat: content grows by
// hundreds of files while the route table stays at one entry per collection.

const ContentPage = () => {
  const { pathname } = useLocation();
  const entry = getContentByPath(pathname);

  // Resolved by path, so an unpublished or unknown slug is a genuine 404
  // rather than an empty shell.
  const Body = useMemo(() => {
    if (!entry) return null;
    const loader = loadContentBody(entry);
    return loader ? lazy(loader) : null;
  }, [entry]);

  if (!entry || !Body) return <NotFound />;

  return (
    <Suspense
      fallback={<div className="min-h-screen bg-background pt-24" aria-busy="true" />}
    >
      <ContentArticle entry={entry} Body={Body} />
    </Suspense>
  );
};

export default ContentPage;
