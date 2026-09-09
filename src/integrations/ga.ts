// GA4 measurement ID.
//
// This previously read 'G-K7C5BQ01CF' while index.html loaded and configured
// 'G-SMHY0ZN0XR'. Because `send_to` targeted the other property, every SPA
// route-change page_view was attributed to a property that gtag had never
// configured — and on a prerendered SPA most navigations are route changes, so
// the bulk of traffic data was going nowhere.
//
// Kept in sync with the gtag snippet in index.html. If you change one, change
// the other. VITE_GA_ID allows overriding per environment without a code edit.
export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_ID as string | undefined) ?? 'G-SMHY0ZN0XR';

type GtagParams = Record<string, unknown>;

/** gtag() is installed by the snippet in index.html; absent during SSR. */
const gtag = (...args: unknown[]): void => {
  if (typeof window === 'undefined') return;
  const fn = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  fn?.(...args);
};

export function sendPageView(path: string) {
  if (typeof window === 'undefined') return;
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}

/** Custom event helper. Always targets the configured property. */
export function sendEvent(name: string, params: GtagParams = {}) {
  gtag('event', name, { ...params, send_to: GA_MEASUREMENT_ID });
}

// Conversion events worth watching once traffic grows. Kept as named helpers
// so event names stay consistent across every capture surface.

export const trackLeadSubmit = (sourceType: string, sourcePath: string) =>
  sendEvent('lead_submit', { source_type: sourceType, source_path: sourcePath });

export const trackWhatsAppClick = (sourcePath: string) =>
  sendEvent('whatsapp_click', { source_path: sourcePath });
