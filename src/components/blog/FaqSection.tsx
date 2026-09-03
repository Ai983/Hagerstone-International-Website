import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/seo";

interface FaqSectionProps {
  id?: string;
  heading?: string;
  items: FaqItem[];
}

// Renders the visible FAQ block for a blog post. Keep the question/answer
// text passed here identical to the FAQPage structured data built with
// buildFaqSchema() for the same post — search engines expect the two to match.
export default function FaqSection({
  id = "faq",
  heading = "Frequently Asked Questions",
  items,
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="text-3xl font-bold text-primary">
        {heading}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`${id}-item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
