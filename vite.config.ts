import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    // MDX must be registered before react() so the React plugin receives JSX
    // rather than raw .mdx source.
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGfm, // tables, strikethrough, task lists, autolinks
          remarkFrontmatter, // parse the --- YAML block
          [remarkMdxFrontmatter, { name: "frontmatter" }], // expose it as a named export
        ],
        rehypePlugins: [
          rehypeSlug, // id="" on every heading, so a TOC can link to them
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      }),
    },
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // NOTE: `build.rollupOptions.output.manualChunks: undefined` used to sit here.
  // It disabled Rollup's automatic code splitting, which was survivable with a
  // handful of lazy routes but would have pulled every lazily-imported MDX body
  // into the entry chunk as the content library grows. Removed so Rollup splits
  // content into its own chunks and each article is fetched only when visited.
  ssr: {
    // react-helmet-async is CommonJS; bundle it into the SSR output so the
    // prerender step (node prerender.js) can import it without ESM/CJS
    // named-export interop errors.
    noExternal: ["react-helmet-async"],
  },
}));
