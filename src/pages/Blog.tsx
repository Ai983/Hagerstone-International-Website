import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SEOHead from "@/components/SEOHead";
import {
  getBlogListItems,
  getFeaturedBlogItem,
  POSTS_PER_PAGE,
} from "@/lib/blogList";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import {
  buildSchemaGraph,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

// Page size and the merged article list live in src/lib/blogList.ts, because
// prerender.js and the sitemap need the same page count this component uses.

// Windowed page-number list with ellipses, so this stays readable even once
// there are many pages (not just the 2 pages the blog has today).
const getPageNumbers = (current: number, total: number): (number | "ellipsis")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "ellipsis")[] = [1];
  if (current > 3) pages.push("ellipsis");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let p = start; p <= end; p++) pages.push(p);
  if (current < total - 2) pages.push("ellipsis");
  pages.push(total);
  return pages;
};

// Filter buttons. These match `category` on the legacy posts, and "Insights" is
// the category every MDX article gets (see src/lib/blogList.ts).
const CATEGORIES = [
  "Cost & Planning",
  "Design Guide",
  "Case Study",
  "Trends",
  "Technical",
  "Sustainability",
  "Hospitality",
  "Insights",
];

const categorySlug = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Blog listing page
const Blog = () => {
  // Both article systems in one list — the legacy .tsx posts and the MDX
  // articles under the `insights` collection. See src/lib/blogList.ts.
  const allPosts = getBlogListItems();
  const featuredPost = getFeaturedBlogItem() ?? allPosts[0];

  // The category filter is a client-side view over the same list, addressed as
  // /blog?category=technical. The prerendered files are always the unfiltered
  // listing, so crawlers still reach every article through path pagination.
  // Production hydrates that static HTML, so the query string is read only
  // after mount; reading it during the first render would not match the server
  // markup and React would discard the prerendered tree.
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const requestedCategory = mounted ? searchParams.get("category") : null;
  const activeCategory =
    CATEGORIES.find((label) => categorySlug(label) === requestedCategory) ?? null;
  const postsData = activeCategory
    ? allPosts.filter((post) => post.category === activeCategory)
    : allPosts;

  // Unfiltered pagination is in the path (/blog, /blog/page/2), not a ?page=
  // query, so every page is a real prerendered file and every article is linked
  // from static HTML. See the note in src/lib/blogList.ts. A filtered view is
  // client-only, so it pages with ?page= instead.
  const { page: pageParam } = useParams();
  const totalPages = Math.max(1, Math.ceil(postsData.length / POSTS_PER_PAGE));
  const requestedPage = Number(activeCategory ? searchParams.get("page") : pageParam) || 1;
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const pagePosts = postsData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const pageHref = (page: number) =>
    activeCategory
      ? `/blog?category=${categorySlug(activeCategory)}${page > 1 ? `&page=${page}` : ""}`
      : page === 1
        ? "/blog"
        : `/blog/page/${page}`;

  // Filtered views all canonicalise to /blog: they are subsets of the same
  // content, and the crawlable version of each page already exists.
  const canonicalUrl = activeCategory ? `${SITE_URL}/blog` : `${SITE_URL}${pageHref(currentPage)}`;

  // In a filtered view, move between pages without a full reload (a reload
  // replays the site's loading splash). The href stays real either way.
  const pagerNav = (href: string) =>
    activeCategory
      ? {
          onClick: (event: MouseEvent<HTMLAnchorElement>) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
            event.preventDefault();
            navigate(href);
          },
        }
      : {};

  // Scroll to the filter bar when the category or page changes, so the result is
  // in view with the buttons still visible above it for the next pick.
  const gridRef = useRef<HTMLElement>(null);
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory, currentPage]);

  return (
    <div className="min-h-screen bg-background">

      <SEOHead
        title={
          activeCategory
            ? `${activeCategory} Articles | Hagerstone International`
            : currentPage === 1
              ? "Interior Design Blog & Ideas | Hagerstone"
              : `Interior Design Blog — Page ${currentPage} | Hagerstone`
        }
        description="Insights from an interior design and build firm covering office design, MEP/HVAC, EPC/PEB construction, and turnkey fit-outs."
        canonical={canonicalUrl}
        keywords="interior design and build companies, hospitality interior design company, international interior designers in India, best interior company in Delhi, corporate office styling, top interior fit out companies in Delhi, interior designers international"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "WebPage",
            name: "Interior Design Blog & Ideas",
            url: `${SITE_URL}/blog`,
            description:
              "Blog featuring office design, interior fit-out, MEP, and construction insights from Hagerstone.",
          },
        ])}
      />


      {/* Hero Section — same deep slate blue as DynamicLoader, so the blog
          hero reads as part of one continuous brand palette. Black is a
          corner vignette, not the base — a diagonal black-to-black gradient
          on a wide, short band left almost the whole thing looking black.
          Top padding is taller than the bottom to offset the fixed
          HoveringNavbar sitting over the first ~80px. */}
      <section className="relative bg-slate-900 text-primary-foreground pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 140% at 0% 0%, black, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, hsl(217 55% 32% / 0.9), transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in text-gold">
            Design Insights
          </h1>
          <div className="w-16 h-0.5 bg-gold/70 rounded-full mx-auto my-6" />
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Stay updated with the latest trends, tips, and insights from the world of interior design
          </p>
        </div>
      </section>

      {/* Featured Post — only on the unfiltered page 1, so it isn't repeated on
          every page or shown above a category it may not belong to */}
      {currentPage === 1 && !activeCategory && (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in">Featured Article</h2>
          </div>
          <Link to={`/blog/${featuredPost.slug}`}>
            <Card className="bg-gradient-card border-0 shadow-luxury hover:shadow-hover transition-all duration-500 hover:scale-[1.02] animate-scale-in overflow-hidden cursor-pointer">
              <div className={featuredPost.image ? "grid lg:grid-cols-2 gap-0" : ""}>
                {/* MDX articles need no hero image, so the card drops to a
                    single column rather than rendering a broken <img>. */}
                {featuredPost.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt || featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                )}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-4 line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="group self-start bg-primary hover:bg-primary/90">
                    Read full article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>
      )}

      {/* Categories — real links, so they work without JS and can be shared as
          /blog?category=technical. "All" goes back to the crawlable /blog. */}
      <section ref={gridRef} className="py-12 bg-muted/30 scroll-mt-20">
        <nav
          aria-label="Filter articles by category"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {["All", ...CATEGORIES].map((category, index) => {
              const isActive = category === "All" ? !activeCategory : category === activeCategory;
              return (
                <Button
                  key={category}
                  asChild
                  variant={isActive ? "default" : "outline"}
                  className="hover:scale-105 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    to={category === "All" ? "/blog" : `/blog?category=${categorySlug(category)}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {category}
                  </Link>
                </Button>
              );
            })}
          </div>
        </nav>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in">
              {activeCategory ? `${activeCategory} Articles` : "Latest Articles"}
            </h2>
            {activeCategory && (
              <p className="text-muted-foreground">
                {postsData.length} {postsData.length === 1 ? "article" : "articles"}
              </p>
            )}
          </div>
          {postsData.length === 0 && (
            <p className="text-muted-foreground">
              No articles in this category yet.{" "}
              <Link to="/blog" className="text-accent underline underline-offset-4">
                View all articles
              </Link>
            </p>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagePosts.map((post, index) => (
              <Link key={post.key} to={`/blog/${post.slug}`}>
                <Card
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* An MDX article may carry no hero image. Rather than render
                      a broken <img>, the card shows its category as a band. */}
                  {post.image ? (
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  ) : (
                  <div className="px-6 pt-6">
                    <Badge className="bg-accent text-accent-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  )}
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-bold text-primary line-clamp-2 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-primary text-sm font-medium group-hover:underline flex items-center">
                        Read more
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                {/* Real hrefs to real prerendered pages, so a crawler follows
                    them. The previous version used href="#" with an onClick,
                    which no crawler fires — every article past page one was
                    unreachable in the static HTML. */}
                <PaginationItem>
                  <PaginationPrevious
                    href={currentPage === 1 ? "#" : pageHref(currentPage - 1)}
                    {...(currentPage === 1 ? {} : pagerNav(pageHref(currentPage - 1)))}
                    rel={currentPage === 1 ? undefined : "prev"}
                    aria-disabled={currentPage === 1}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {getPageNumbers(currentPage, totalPages).map((page, i) =>
                  page === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${i}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href={pageHref(page)}
                        {...pagerNav(pageHref(page))}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href={currentPage === totalPages ? "#" : pageHref(currentPage + 1)}
                    {...(currentPage === totalPages ? {} : pagerNav(pageHref(currentPage + 1)))}
                    rel={currentPage === totalPages ? undefined : "next"}
                    aria-disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>

      {/* Valued Partners */}
      

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in text-gold">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-slide-up">
            Subscribe to our newsletter for the latest design insights and trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-foreground border-0 flex-1"
            />
            <Button 
              size="lg"
              variant="secondary"
              className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
