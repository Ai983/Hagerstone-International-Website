/**
 * Prerender utilities for Netlify Prerender extension optimization
 * Detects bots/crawlers and signals when content is ready
 */

const BOT_PATTERNS = [
  'prerender',
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'slackbot',
  'whatsapp',
  'discordbot',
  'applebot',
  'headless',
  'crawler',
  'spider',
  'bot'
];

/**
 * Detects if the current request is from a prerender bot or crawler
 */
export const isPrerender = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const userAgent = navigator.userAgent.toLowerCase();
  return BOT_PATTERNS.some(pattern => userAgent.includes(pattern));
};

/**
 * Signals to Netlify Prerender that the page content is ready
 * Call this after critical content has loaded
 */
export const signalPrerenderReady = (): void => {
  if (typeof window !== 'undefined') {
    window.prerenderReady = true;
  }
};
