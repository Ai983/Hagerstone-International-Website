import { useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ContentArticle from "@/templates/ContentArticle";
import { getContentByPath } from "@/lib/contentModules";
import { getContentBodySync } from "@/lib/contentModules.server";

// SSR counterpart to ContentPage.
//
// Identical output, but the MDX body is resolved synchronously — renderToString
// cannot await a lazy import, so a Suspense boundary would prerender as an empty
// shell and ship blank HTML to crawlers.
//
// Imported only by ServerApp, keeping the eager glob out of the client bundle.

const ContentPageServer = () => {
  const { pathname } = useLocation();
  const entry = getContentByPath(pathname);
  if (!entry) return <NotFound />;

  const Body = getContentBodySync(entry);
  if (!Body) return <NotFound />;

  return <ContentArticle entry={entry} Body={Body} />;
};

export default ContentPageServer;
