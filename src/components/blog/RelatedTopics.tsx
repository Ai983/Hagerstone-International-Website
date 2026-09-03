import { Badge } from "@/components/ui/badge";

interface RelatedTopicsProps {
  topics: string[];
  className?: string;
}

// "Related Topics" tag list shown at the end of a blog post — reinforces the
// keyword set for the article and gives readers/crawlers a quick topic scan.
export default function RelatedTopics({ topics, className = "" }: RelatedTopicsProps) {
  if (topics.length === 0) return null;

  return (
    <div className={`max-w-4xl mx-auto px-4 pt-8 border-t border-border ${className}`}>
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Related Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge key={topic} variant="secondary" className="px-3 py-1">
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
}
