import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Initialize prerenderReady signal for Netlify Prerender extension
if (typeof window !== 'undefined') {
  window.prerenderReady = false;
}

const root = document.getElementById("root")!;

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, 
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
  // Signal prerender ready after hydration
  setTimeout(() => {
    window.prerenderReady = true;
  }, 100);
} else {
  createRoot(root).render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
  // Signal prerender ready after render
  setTimeout(() => {
    window.prerenderReady = true;
  }, 100);
}