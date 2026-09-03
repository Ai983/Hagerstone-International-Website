import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/data/blogPosts";

interface RelatedArticlesProps {
  posts: BlogPost[];
  heading?: string;
  className?: string;
}

// Shared "Related Articles" card grid — each card shows the linked post's own
// image, category, title, date, and read time so readers get a visual preview
// instead of a bare text link.
export default function RelatedArticles({
  posts,
  heading = "Related Articles",
  className = "",
}: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className={`py-16 bg-muted/30 border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-10">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="group bg-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
