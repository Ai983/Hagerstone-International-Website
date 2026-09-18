import { projects } from "@/data/project";
import { blogPosts } from "@/data/blogPosts";

// Project and blog URLs derive from their data files, so adding an entry there
// is enough for prerender and the sitemap to pick it up. A hand-kept list in
// prerender.js was missed twice (four blog posts, then Kokko Town).
//
// Blog posts are still .tsx components, so each one also needs a <Route> in
// both App.tsx and ServerApp.tsx. If ServerApp is missed, the page renders
// NotFound and prerender.js fails the build naming the route.

export const getProjectPrerenderPaths = (): string[] =>
  projects.map((p) => `/projects/${p.id}`);

export const getBlogPrerenderPaths = (): string[] =>
  blogPosts.map((p) => `/blog/${p.slug}`);
