import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPostBySlug, getRecentPosts, BlogPost as BlogPostType } from "@/data/blogPosts";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import {
  buildSchemaGraph,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = getRecentPosts(4).filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (!post && slug) {
      navigate("/blog", { replace: true });
    }
  }, [post, slug, navigate]);

  if (!post) {
    return null;
  }

  const articleSchema = {
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hagerstone.com/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.metaDescription,
    image: post.image.startsWith("http")
      ? post.image
      : `https://hagerstone.com${post.image}`,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole || "Interior Design Expert",
    },
    publisher: {
      "@type": "Organization",
      name: "Hagerstone International",
      logo: {
        "@type": "ImageObject",
        url: "https://hagerstone.com/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hagerstone.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://hagerstone.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://hagerstone.com/blog/${post.slug}`
      }
    ]
  };

  const shareUrl = `https://hagerstone.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://hagerstone.com/blog/${post.slug}`}
        ogImage={post.image.startsWith("http") ? post.image : `https://hagerstone.com${post.image}`}
        ogType="article"
        keywords={post.tags.join(", ")}
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "WebPage",
            name: post.title,
            url: `${SITE_URL}/blog/${post.slug}`,
            description: post.metaDescription,
          },
          articleSchema,
        ])}
      />

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-accent text-accent-foreground mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
                {post.authorRole && (
                  <span className="text-white/60">• {post.authorRole}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/30 py-4 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Share Buttons - Desktop */}
          <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
            <button
              onClick={() => handleShare("twitter")}
              className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors shadow-md"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors shadow-md"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors shadow-md"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </button>
          </div>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 font-light">
            {post.excerpt}
          </p>

          {/* Main Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground
              prose-ul:my-6 prose-li:text-muted-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-hr:border-border prose-hr:my-10"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="lg:hidden mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Share this article
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => handleShare("twitter")}
                className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 md:p-8 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                {post.authorRole && (
                  <p className="text-muted-foreground text-sm mb-2">{post.authorRole}</p>
                )}
                <p className="text-muted-foreground text-sm">
                  Expert in commercial interior design, corporate office fit-outs, and sustainable workspace solutions. 
                  Part of the Hagerstone International team delivering excellence across India.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10">
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <Card className="group bg-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-3">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your interior design project and bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Helper function to convert markdown-style content to HTML
function formatContent(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^\*\*(.+?)\*\*$/gm, '<p><strong>$1</strong></p>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^---$/gm, '<hr />')
    .replace(/^(?!<[hupola])(.+)$/gm, (match) => {
      if (match.trim() && !match.startsWith('<')) {
        return `<p>${match}</p>`;
      }
      return match;
    })
    .replace(/\n\n/g, '\n')
    .trim();
}

export default BlogPost;
