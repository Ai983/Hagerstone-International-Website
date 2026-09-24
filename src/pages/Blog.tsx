import { Link, useSearchParams } from "react-router-dom";
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
import { blogPosts as postsData, getFeaturedPost } from "@/data/blogPosts";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import {
  buildSchemaGraph,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

// 3 columns × 4 rows. Pagination is derived purely from postsData.length, so
// every future post just extends the page count — nothing here is hardcoded
// to today's post count.
const POSTS_PER_PAGE = 12;

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

// Blog listing page
const Blog = () => {
  const featuredPost = getFeaturedPost() ?? postsData[0];

  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(postsData.length / POSTS_PER_PAGE));
  const requestedPage = Number(searchParams.get("page")) || 1;
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const pagePosts = postsData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setSearchParams(page === 1 ? {} : { page: String(page) });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const canonicalUrl =
    currentPage === 1 ? `${SITE_URL}/blog` : `${SITE_URL}/blog?page=${currentPage}`;

  const categories = [
    "All", "Cost & Planning", "Design Guide", "Case Study", "Trends", "Technical", "Sustainability", "Hospitality"
  ];

  return (
    <div className="min-h-screen bg-background">

      <SEOHead
        title={
          currentPage === 1
            ? "Interior Design Blog & Ideas | Hagerstone International"
            : `Interior Design Blog & Ideas — Page ${currentPage} | Hagerstone International`
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

      {/* Featured Post — only on page 1, so it isn't repeated on every page */}
      {currentPage === 1 && (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in">Featured Article</h2>
          </div>
          <Link to={`/blog/${featuredPost.slug}`}>
            <Card className="bg-gradient-card border-0 shadow-luxury hover:shadow-hover transition-all duration-500 hover:scale-[1.02] animate-scale-in overflow-hidden cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
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

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-muted hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in">Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagePosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card 
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    aria-disabled={currentPage === 1}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(currentPage - 1);
                    }}
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
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          goToPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    aria-disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(currentPage + 1);
                    }}
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
