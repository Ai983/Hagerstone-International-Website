import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { Phone, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SALES_PHONE, SALES_PHONE_DISPLAY } from "@/lib/contact";
import { buildWhatsAppUrl, labelFromPath } from "@/lib/whatsapp";
import { submitLead } from "@/lib/leads";
import { trackWhatsAppClick } from "@/integrations/ga";

// The call-to-action band that sits above the footer on every page.
//
// Until this existed, the 330 content pages (guides, materials, glossary,
// insights, comparisons…) ended with FAQs and related links and no way to
// enquire short of finding the floating WhatsApp button. Rendering it once in
// the shared layout (App.tsx and ServerApp.tsx) puts it on every route,
// including the prerendered HTML, without touching a single page.
//
// Three ways in, cheapest first: WhatsApp, a call, or a two-field callback
// form. The form goes through submitLead() like every other surface, so the
// lead reaches the Hub CRM and the sales WhatsApp alert within about two
// minutes (n8n workflow "Website Leads -> Hub CRM").
//
// Deliberately plain React state, not react-hook-form + zod: this component is
// in the entry chunk on every page, and those libraries were moved out of it.

/** Routes that already are a lead form; a second form there is noise. */
const HIDDEN_ON = new Set(["/contact"]);

type Status = "idle" | "submitting" | "sent" | "error";

const digitCount = (value: string) => value.replace(/\D/g, "").length;

const PageCTA = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  if (HIDDEN_ON.has(pathname)) return null;

  const pageLabel = labelFromPath(pathname) ?? "Home";
  const whatsAppUrl = buildWhatsAppUrl({
    intent: "I'd like to discuss a project",
    page: pageLabel,
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim().length < 2) {
      setFieldError("Please enter your name.");
      return;
    }
    const digits = digitCount(phone);
    if (digits < 10 || digits > 15 || !/^[0-9+\s()-]+$/.test(phone.trim())) {
      setFieldError("Please enter a valid phone number, e.g. 98765 43210.");
      return;
    }

    setFieldError(null);
    setStatus("submitting");

    const result = await submitLead({
      name,
      phone,
      message: requirement || undefined,
      subject: `Callback request from ${pageLabel}`,
      sourceType: "cta",
    });

    // Never fake success: the form only clears when the lead is really saved.
    setStatus(result.ok ? "sent" : "error");
  };

  return (
    <section
      aria-labelledby="page-cta-heading"
      className="bg-muted/40 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2
            id="page-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-foreground"
          >
            Planning an office or commercial project?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Tell us what you are planning. Message our team on WhatsApp, call
            us, or leave your number and we will call you back.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(pathname)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${SALES_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SALES_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          {status === "sent" ? (
            <div className="flex items-start gap-3" role="status">
              <CheckCircle2 className="h-6 w-6 text-[#25D366] flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Thank you, we have your request.</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our team will call you shortly. For a faster reply,{" "}
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(pathname)}
                    className="font-medium text-foreground underline underline-offset-2"
                  >
                    message us on WhatsApp
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <p className="font-semibold text-foreground">Request a callback</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="page-cta-name">Name</Label>
                  <Input
                    id="page-cta-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="page-cta-phone">Phone / WhatsApp</Label>
                  <Input
                    id="page-cta-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="page-cta-requirement">
                  What do you need? <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                  id="page-cta-requirement"
                  name="requirement"
                  placeholder="e.g. 8,000 sq ft office fit-out in Noida"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  maxLength={300}
                />
              </div>

              {fieldError && (
                <p className="text-sm text-destructive" role="alert">
                  {fieldError}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  That did not send. Please try again, or call us on {SALES_PHONE_DISPLAY}.
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Call me back"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
