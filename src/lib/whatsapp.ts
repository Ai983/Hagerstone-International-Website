import { SALES_WHATSAPP } from "@/lib/contact";

// Builds wa.me deep links with a message already written for the visitor.
//
// The point is context: a bare "Hi" tells the sales team nothing, so every CTA
// prefills what the visitor was looking at. They open WhatsApp already knowing
// the service, the page and any figures the visitor entered.

export interface WhatsAppContext {
  /** What the visitor wants — becomes the opening line. */
  intent?: string;
  /** Human label for where they are, e.g. "Facade & Glazing" or "Gurugram". */
  page?: string;
  /** Extra facts worth sending, e.g. { "Area": "12,000 sq ft" }. */
  details?: Record<string, string | number>;
}

const DEFAULT_INTENT = "I'd like to discuss a project";

/**
 * Turn a page path into a readable label, used when no explicit `page` is given.
 * "/services/facade-glazing" -> "Facade Glazing"
 */
export const labelFromPath = (pathname: string): string | undefined => {
  const segment = pathname.split("/").filter(Boolean).pop();
  if (!segment) return undefined;
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/** Compose the message body a visitor sends when they tap a WhatsApp CTA. */
export const buildWhatsAppMessage = ({ intent, page, details }: WhatsAppContext = {}): string => {
  const lines: string[] = [
    `Hi Hagerstone — ${intent?.trim() || DEFAULT_INTENT}.`,
  ];

  if (page) lines.push(`(Enquiring from: ${page})`);

  if (details) {
    for (const [label, value] of Object.entries(details)) {
      if (value !== "" && value !== undefined && value !== null) {
        lines.push(`${label}: ${value}`);
      }
    }
  }

  return lines.join("\n");
};

/**
 * Full wa.me URL, ready for an anchor href.
 *
 * wa.me works on mobile (opens the app) and desktop (opens WhatsApp Web), so
 * one link serves both without device detection.
 */
export const buildWhatsAppUrl = (context: WhatsAppContext = {}): string =>
  `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage(context))}`;
