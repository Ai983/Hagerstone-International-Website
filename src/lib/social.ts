// The company's public profiles — one place, read by the footer, the navbar, the
// contact page, the Organization schema's `sameAs`, and llms.txt.
//
// They used to be typed out separately in each of those files and had drifted
// into four different LinkedIn URLs. Two of them — the footer's and the contact
// page's — pointed at LinkedIn's *admin* view of the page, which only works for
// someone signed in as a page admin; every visitor who clicked got an error.
// Search engines and AI systems also match a company across the web partly by
// these links, so the same profile appearing under four addresses weakened that.

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/hagerstone",
  instagram: "https://www.instagram.com/hagerstone_international/",
  facebook: "https://www.facebook.com/HagerstoneInternational",
  youtube: "https://www.youtube.com/channel/UCvl0bmeUgX6LvzQYcR-HHIw",
  crunchbase: "https://www.crunchbase.com/organization/hagerstone-international",
} as const;

/** Every profile, for schema `sameAs`. */
export const SAME_AS: string[] = Object.values(SOCIAL_LINKS);
