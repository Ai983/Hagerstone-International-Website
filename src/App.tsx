import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import AnalyticsTracker from '@/components/AnalyticsTracker';
import HoveringNavbar from "./components/HoveringNavbar";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import DynamicLoader from "./components/DynamicLoader";
import DiwaliSplash, { IS_DIWALI_MODE } from "./components/DiwaliSplash";
import LeadPopupForm from "./components/LeadPopupForm";
import { useRoutes } from "./hooks/useRoutes";
import { componentRegistry } from "./lib/routeRegistry";

// Lazy load blog post pages
const OfficeWorkspaceDesignBlog = lazy(() => import("./pages/blog/office-workspace-design"));
const CommercialInteriorDesignersBlog = lazy(() => import("./pages/blog/commercial-interior-designers"));
const OfficeSpacePlanningTrends2026Blog = lazy(
  () => import("./pages/blog/office-space-planning-trends-2026")
);
const SustainableGreenOfficeBlog = lazy(
  () => import("./pages/blog/sustainable-green-office-interiors")
);
const OfficeInteriorsNoidaBlog = lazy(() => import("./pages/blog/office-interiors-noida"));
const OfficeInteriorsDelhiBlog = lazy(() => import("./pages/blog/office-interiors-delhi"));

// Lazy load location pages (SEO local landing pages)
const OfficeDesignGurgaon = lazy(() => import("./pages/locations/OfficeDesignGurgaon"));
const OfficeDesignNoida = lazy(() => import("./pages/locations/OfficeDesignNoida"));
const OfficeDesignDelhi = lazy(() => import("./pages/locations/OfficeDesignDelhi"));
const OfficeDesignFaridabad = lazy(() => import("./pages/locations/OfficeDesignFaridabad"));

// Static route fallbacks for SSR/prerender — DB-backed routes from useRoutes() are
// not resolved during SSR (React Query hasn't fetched yet), so crawlers would see
// a 404 body for every non-home URL. These static routes guarantee prerendered HTML
// per-page with the correct SEOHead meta. At runtime, DB routes may replace/augment these.
const About = lazy(() => import("./pages/About"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Services = lazy(() => import("./pages/Services"));
const Ideas = lazy(() => import("./pages/Ideas"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const FindYourStyle = lazy(() => import("./pages/FindYourStyle"));

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { data: routes } = useRoutes();

  return (
    <>
      {IS_DIWALI_MODE && isHomePage && <DiwaliSplash />}
      <AnalyticsTracker />
      <DynamicLoader />
      <CustomCursor />
      <HoveringNavbar />
      <ScrollToTop />
      <Routes>
        {/* Hardcoded home route */}
        <Route path="/" element={<Index />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/* Core static routes (prerender-safe; also overridden at runtime if DB defines them) */}
        <Route path="/about" element={<Suspense fallback={<DynamicLoader />}><About /></Suspense>} />
        <Route path="/our-team" element={<Suspense fallback={<DynamicLoader />}><OurTeam /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<DynamicLoader />}><Projects /></Suspense>} />
        <Route path="/projects/:id" element={<Suspense fallback={<DynamicLoader />}><ProjectDetail /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<DynamicLoader />}><Services /></Suspense>} />
        <Route path="/ideas" element={<Suspense fallback={<DynamicLoader />}><Ideas /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<DynamicLoader />}><Blog /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<DynamicLoader />}><Contact /></Suspense>} />
        <Route path="/find-your-style" element={<Suspense fallback={<DynamicLoader />}><FindYourStyle /></Suspense>} />

        {/* Blog post routes */}
        <Route 
          path="/blog/office-workspace-design" 
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeWorkspaceDesignBlog />
            </Suspense>
          } 
        />
        <Route
          path="/blog/commercial-interior-designers"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <CommercialInteriorDesignersBlog />
            </Suspense>
          }
        />
        <Route
          path="/blog/office-space-planning-trends-2026"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeSpacePlanningTrends2026Blog />
            </Suspense>
          }
        />
        <Route
          path="/blog/sustainable-green-office-interiors"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <SustainableGreenOfficeBlog />
            </Suspense>
          }
        />
        <Route
          path="/blog/office-interiors-noida"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeInteriorsNoidaBlog />
            </Suspense>
          }
        />
        <Route
          path="/blog/office-interiors-delhi"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeInteriorsDelhiBlog />
            </Suspense>
          }
        />

        {/* Location pages (SEO) */}
        <Route
          path="/office-design-gurgaon"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeDesignGurgaon />
            </Suspense>
          }
        />
        <Route
          path="/office-design-noida"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeDesignNoida />
            </Suspense>
          }
        />
        <Route
          path="/office-design-delhi"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeDesignDelhi />
            </Suspense>
          }
        />
        <Route
          path="/office-design-faridabad"
          element={
            <Suspense fallback={<DynamicLoader />}>
              <OfficeDesignFaridabad />
            </Suspense>
          }
        />

        {/* Dynamic routes from database */}
        {routes?.map((route) => {
          const Component = componentRegistry[route.component_key];
          if (!Component) return null;

          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Suspense fallback={<DynamicLoader />}>
                  <Component routeMeta={route} />
                </Suspense>
              }
            />
          );
        })}

        {/* Fallback 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AIAssistant />
      <LeadPopupForm />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
