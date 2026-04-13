import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable gzip-visible asset warnings above 250 KB (defaults to 500 KB — too lenient for SPAs targeting mobile)
    chunkSizeWarningLimit: 250,
    rollupOptions: {
      output: {
        // Split heavy third-party deps into their own chunks so they can be cached independently
        // and (more importantly) so the initial route doesn't pay for features it won't use.
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer-motion';
            if (id.includes('recharts') || id.includes('d3-')) return 'vendor-charts';
            if (id.includes('embla-carousel')) return 'vendor-carousel';
            if (id.includes('@radix-ui')) return 'vendor-radix';
            if (id.includes('react-day-picker') || id.includes('date-fns')) return 'vendor-dates';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('@supabase') || id.includes('@tanstack/react-query')) return 'vendor-data';
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) return 'vendor-forms';
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('react/')) return 'vendor-react';
          }
        },
      },
    },
  },
}));
