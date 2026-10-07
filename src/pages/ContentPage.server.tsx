import { useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ContentArticle from "@/templates/ContentArticle";
import { getContentBodySync, getFullContentByPath } from "@/lib/contentModules.server";

// SSR counterpart to ContentPage.
//
// Identical output, but the MDX body and the entry's details are resolved
// synchronously — renderToString cannot await a lazy import, so a Suspense
// boundary would prerender as an empty shell and ship blank HTML to crawlers.
//
// Imported only by ServerApp, keeping the eager globs out of the client bundle.

const ContentPageServer = () => {
  const { pathname } = useLocation();
  const entry = getFullContentByPath(pathname);
  if (!entry) return <NotFound />;

  const Body = getContentBodySync(entry);
  if (!Body) return <NotFound />;

  return <ContentArticle entry={entry} Body={Body} />;
};

export default ContentPageServer;
