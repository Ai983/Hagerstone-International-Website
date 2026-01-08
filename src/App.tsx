import { Suspense } from "react";
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
import DynamicLoader from "./components/DynamicLoader";
import DiwaliSplash, { IS_DIWALI_MODE } from "./components/DiwaliSplash";
import LeadPopupForm from "./components/LeadPopupForm";
import { useRoutes } from "./hooks/useRoutes";
import { componentRegistry } from "./lib/routeRegistry";

const queryClient = new QueryClient();

const DynamicRoutes = () => {
  const { data: routes, isLoading } = useRoutes();

  if (isLoading) {
    return null; // Routes will render after loading
  }

  return (
    <>
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
    </>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

        {/* Dynamic routes from database */}
        <DynamicRoutes />

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
