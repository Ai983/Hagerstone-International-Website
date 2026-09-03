/**
 * SSR-only entry component used by entry-server.tsx during prerendering.
 * Uses eager imports (no React.lazy) so renderToString sees full content.
 * Client-only features (cursor, chat, splash) are omitted — they hydrate on the client.
 */
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import HoveringNavbar from "@/components/HoveringNavbar";
import Footer from "@/components/Footer";

// Pages — all eager
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import OurTeam from "@/pages/OurTeam";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Ideas from "@/pages/Ideas";
import FindYourStyle from "@/pages/FindYourStyle";
import NotFound from "@/pages/NotFound";

// Blog posts — eager for SSR
import OfficeWorkspaceDesign from "@/pages/blog/office-workspace-design";
import CommercialInteriorDesigners from "@/pages/blog/commercial-interior-designers";
import OfficeSpacePlanningTrends2026 from "@/pages/blog/office-space-planning-trends-2026";
import SustainableGreenOffice from "@/pages/blog/sustainable-green-office-interiors";
import CommercialHvacSystems from "@/pages/blog/commercial-hvac-systems";
import OfficeFitOutCostGuideIndia2026 from "@/pages/blog/office-fit-out-cost-guide-india-2026";
import MepDesignConsultancyIndia from "@/pages/blog/mep-design-consultancy-india";

const ssrQueryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, staleTime: Infinity },
  },
});

const ServerApp = ({ helmetContext }: { helmetContext: object }) => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={ssrQueryClient}>
      <HoveringNavbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/office-workspace-design" element={<OfficeWorkspaceDesign />} />
        <Route path="/blog/commercial-interior-designers" element={<CommercialInteriorDesigners />} />
        <Route path="/blog/office-space-planning-trends-2026" element={<OfficeSpacePlanningTrends2026 />} />
        <Route path="/blog/sustainable-green-office-interiors" element={<SustainableGreenOffice />} />
        <Route path="/blog/commercial-hvac-systems" element={<CommercialHvacSystems />} />
        <Route path="/blog/office-fit-out-cost-guide-india-2026" element={<OfficeFitOutCostGuideIndia2026 />} />
        <Route path="/blog/mep-design-consultancy-india" element={<MepDesignConsultancyIndia />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/find-your-style" element={<FindYourStyle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  </HelmetProvider>
);

export default ServerApp;
