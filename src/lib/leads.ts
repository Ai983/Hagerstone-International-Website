import { supabase } from "@/integrations/supabase/client";
import { trackLeadSubmit } from "@/integrations/ga";

// Single entry point for every lead capture surface on the site.
//
// Before this existed, each form spoke to Supabase its own way — LeadPopupForm
// hand-rolled a fetch() with the URL and anon key pasted inline, and the
// contact form did not talk to Supabase at all. Routing everything through
// submitLead() means one place to fix, one place to add attribution, and one
// place to hook up internal alerts when we want them.

export type LeadSourceType = "contact" | "popup" | "quiz" | "calculator";

export interface LeadInput {
  name: string;
  /** Required by the contact form; optional so WhatsApp-only surfaces can reuse this later. */
  email?: string;
  phone: string;
  company?: string;
  projectType?: string;
  city?: string;
  subject?: string;
  message?: string;
  /** Which surface captured this lead. */
  sourceType: LeadSourceType;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

/** Campaign attribution from the current URL, plus the referring page. */
const readAttribution = () => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source_path: window.location.pathname,
    referrer: document.referrer || null,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };
};

/**
 * Fire-and-forget courtesy reply to the person who enquired.
 *
 * Deliberately never throws: a Maytapi outage must not turn a successfully
 * saved lead into a visible error. The lead is already safe in the database
 * by the time this runs.
 */
const sendCustomerAcknowledgement = async (phone: string) => {
  try {
    await supabase.functions.invoke("send-whatsapp", {
      body: {
        to_number: phone,
        message:
          "Thank you for reaching out to Hagerstone. Our design & build team will connect with you shortly.",
      },
    });
  } catch (error) {
    console.error("[leads] WhatsApp acknowledgement failed:", error);
  }
};

/**
 * Notify the sales team that a lead has arrived.
 *
 * Intentionally a no-op right now — internal alerting was deferred, so leads
 * are read from the Supabase dashboard. The hook exists so switching alerts on
 * later is a change here alone, not a change to every form. Revisit when the
 * calculators ship and lead volume rises.
 */
const notifySales = async (_lead: LeadInput) => {
  /* no-op by design — see doc comment above */
};

/**
 * Persist a lead, then run the follow-up side effects.
 *
 * Returns a result rather than throwing so callers can show an honest error.
 * The save is the only thing that can fail the submission; acknowledgement and
 * notification are best-effort.
 */
export const submitLead = async (input: LeadInput): Promise<LeadResult> => {
  const { error } = await supabase.from("leads").insert({
    name: input.name.trim(),
    email: input.email?.trim() || null,
    number: input.phone.trim(),
    company: input.company?.trim() || null,
    project_type: input.projectType?.trim() || null,
    city: input.city?.trim() || null,
    subject: input.subject?.trim() || null,
    message: input.message?.trim() || null,
    source_type: input.sourceType,
    ...readAttribution(),
  });

  if (error) {
    console.error("[leads] insert failed:", error);
    return { ok: false, error: error.message };
  }

  trackLeadSubmit(
    input.sourceType,
    typeof window !== "undefined" ? window.location.pathname : "",
  );

  await Promise.allSettled([
    sendCustomerAcknowledgement(input.phone),
    notifySales(input),
  ]);

  return { ok: true };
};
