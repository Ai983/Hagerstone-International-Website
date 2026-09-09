import { useLocation } from "react-router-dom";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWhatsAppUrl, labelFromPath } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/integrations/ga";

// Floating WhatsApp button for desktop.
//
// Sits at bottom-24 rather than bottom-6 so it stacks above the AIAssistant
// launcher (fixed bottom-6 right-6, h-14) instead of covering it.
//
// Hidden below md; phones get StickyMobileCTA instead.

const WhatsAppBubble = () => {
  const location = useLocation();

  const whatsAppUrl = buildWhatsAppUrl({
    intent: "I'd like a quote for a project",
    page: labelFromPath(location.pathname) ?? "Home",
  });

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location.pathname)}
      aria-label="Chat with Hagerstone on WhatsApp"
      title="Chat with us on WhatsApp"
      className="cursor-hover fixed bottom-24 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppBubble;
