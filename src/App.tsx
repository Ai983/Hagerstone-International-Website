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
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import Ideas from "./pages/Ideas";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FindYourStyle from "./pages/FindYourStyle";
import NotFound from "./pages/NotFound";
import DynamicLoader from "./components/DynamicLoader";
import { useEffect, useState } from "react";
import { launchFireworks } from "@/components/diwali/fireworks";
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showDiwali, setShowDiwali] = useState(false);

  // 🎆 Trigger fireworks and overlay only on home page
  useEffect(() => {
    if (location.pathname === "/") {
      setShowDiwali(true);
      launchFireworks(4000); // fireworks for 4 s
      const timer = setTimeout(() => setShowDiwali(false), 5000); // hide after 5 s
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <AnalyticsTracker />
      <DynamicLoader />
      <CustomCursor />
      <HoveringNavbar />
      <ScrollToTop />

      {/* ✨ Diwali overlay (visible only on home) */}
      <AnimatePresence>
        {showDiwali && (
          <motion.div
            key="diwali"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0B132B]"
          >
            <motion.img
              src="/logoo.png"
              alt="Logo"
              className="w-24 h-24 mb-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#FFD700]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Happy Diwali ✨
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/find-your-style" element={<FindYourStyle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <AIAssistant />
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

