import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SITE_URL } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/locationSchema";

// One breadcrumb trail, used in place of the "Home / Services / MEP" text that
// pages used to hand-write. The visible trail and its BreadcrumbList schema are
// built from the same list, so the two cannot disagree.

export type Crumb = { name: string; path: string };

type BreadcrumbsProps = {
  /** From the root to the current page. The last item is rendered unlinked. */
  items: Crumb[];
  /** "onDark" for placement over a dark hero, where the default greys vanish. */
  tone?: "default" | "onDark";
  className?: string;
};

export function Breadcrumbs({ items, tone = "default", className = "" }: BreadcrumbsProps) {
  const linkClass =
    tone === "onDark" ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground";
  const currentClass = tone === "onDark" ? "text-white" : "text-foreground";
  const separatorClass = tone === "onDark" ? "text-white/60" : "";

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className={tone === "onDark" ? "text-white/80" : ""}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={item.path}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className={currentClass}>{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild className={linkClass}>
                    <Link to={item.path}>{item.name}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className={separatorClass} />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/** The BreadcrumbList schema node for the same trail, with absolute URLs. */
export const breadcrumbSchema = (items: Crumb[]) =>
  buildBreadcrumbSchema(
    items.map((item) => ({ name: item.name, url: `${SITE_URL}${item.path === "/" ? "/" : item.path}` })),
  );

export default Breadcrumbs;
