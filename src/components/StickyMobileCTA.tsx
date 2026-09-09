import { Link, useLocation } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { SALES_PHONE } from "@/lib/contact";
import { buildWhatsAppUrl, labelFromPath } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/integrations/ga";

// Always-visible contact bar pinned to the bottom of the viewport on phones.
//
// Most traffic here is mobile, and until now the only phone number lived in the
// footer — a visitor had to scroll the whole page to find a way to make
// contact. This keeps calling, WhatsApp and the enquiry form one tap away from
// anywhere on the site.
//
// Hidden from md upwards; desktop gets WhatsAppBubble instead.

const StickyMobileCTA = () => {
  const location = useLocation();

  // Name the page in the WhatsApp message so sales knows the context up front.
  const whatsAppUrl = buildWhatsAppUrl({
    intent: "I'd like a quote for a project",
    page: labelFromPath(location.pathname) ?? "Home",
  });

  return (
    <>
      {/*
        Spacer so the fixed bar never covers the end of the page — without it
        the last element of the footer sits underneath the bar.
      */}
      <div className="h-16 md:hidden" aria-hidden="true" />

      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <a
          href={`tel:${SALES_PHONE}`}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(location.pathname)}
          className="flex flex-col items-center justify-center gap-1 border-x border-border py-2.5 text-xs font-medium text-[#25D366] transition-colors hover:bg-muted active:bg-muted"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>

        <Link
          to="/contact"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          Get Quote
        </Link>
      </nav>
    </>
  );
};

export default StickyMobileCTA;
