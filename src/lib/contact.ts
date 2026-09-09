// Single source of truth for Hagerstone's public contact details.
//
// These values were previously hardcoded across eight files (Footer,
// HoveringNavbar, Contact page, seo.ts, locationSchema.ts). Changing the sales
// number meant hunting through all of them. Import from here instead so it is
// a one-line change.

/**
 * WhatsApp destination for every chat CTA on the site.
 *
 * Digits only, with country code and no "+" — this is the wa.me link format.
 *
 * TODO(hagerstone): pending final confirmation of which number sales answers.
 * Defaults to the number already published in the footer, navbar, contact page
 * and schema markup, so it is consistent with the rest of the site today.
 * To change the sales line, edit this constant and nothing else.
 *
 * Two things to verify with the business:
 *  1. that this number is WhatsApp-enabled, and
 *  2. that it matches the Maytapi sender used for auto-replies — otherwise the
 *     visitor gets the acknowledgement from one number and chats on another.
 */
export const SALES_WHATSAPP = "918882979328";

/** Dial target for tel: links. */
export const SALES_PHONE = "+918882979328";

/** Human-readable phone number for display. */
export const SALES_PHONE_DISPLAY = "+91 88829 79328";

/** General enquiries inbox. */
export const SALES_EMAIL = "ea@hagerstone.com";
