import { useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ContentIndex, { type CollectionCta } from "@/templates/ContentIndex";
import { getCollection } from "@/lib/contentModules";
import { COLLECTION_BASE_PATH, type Collection } from "@/content/schema";

// Route for every collection listing page (/glossary, /insights, ...).
//
// Copy lives here rather than in the template so each collection reads as a
// real page with its own framing, not a generic "Articles" heading. Identical
// on client and server — no MDX bodies are loaded, only the metadata index, so
// there is no lazy/eager split to worry about.

interface CollectionCopy {
  heading: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  /** Optional closing block, for collections where the next step is an enquiry. */
  cta?: CollectionCta;
}

const COPY: Partial<Record<Collection, CollectionCopy>> = {
  design: {
    heading: "Design Studies",
    intro:
      "Real layout options, floor plans and 3D views from our design studio — offices, plant buildings, a staff canteen, a sales centre and residences. What each plate takes, what changes as the numbers rise, and the finishes behind each option. Clients are not named.",
    metaTitle: "Interior Design Studies: Plans & 3D Views | Hagerstone",
    metaDescription:
      "Layout options, floor plans and 3D views from live design studies in India — offices, plant buildings, canteens and residences, explained for decision-makers.",
    cta: {
      heading: "Have a floor plate and a headcount?",
      body: "Send us the floor plan and the number of people you are planning for, and our design team will lay out the options the same way — with the trade-offs set out before anything is priced.",
      href: "/contact",
      label: "Talk to the design team",
    },
  },
  glossary: {
    heading: "Facade & Interiors Glossary",
    intro:
      "Plain definitions of the terms that appear on drawings, BOQs and tender documents — what each one means, how it is specified in India, and the mistakes that cost money on site.",
    metaTitle: "Facade & Interiors Glossary — Hagerstone",
    metaDescription:
      "Definitions of facade, glazing and interior fit-out terms used on Indian projects, with the codes they are specified against and the mistakes to avoid on site.",
  },
  insights: {
    heading: "Insights",
    intro:
      "Field notes on designing, coordinating and delivering commercial interiors, facades and building services in India.",
    metaTitle: "Insights — Hagerstone International",
    metaDescription:
      "Practical articles on commercial interiors, facade engineering, MEP coordination and project delivery, written from Hagerstone's site experience across India.",
  },
  materials: {
    heading: "Materials",
    intro:
      "How the materials specified on Indian commercial projects actually compare — performance, cost, and where each one fails.",
    metaTitle: "Materials Guide — Hagerstone",
    metaDescription:
      "Comparisons of facade and interior materials used on Indian commercial projects: performance, cost bands, code compliance and real-world durability.",
  },
  compliance: {
    heading: "Compliance & Approvals",
    intro:
      "The statutory route for commercial buildings in India — what each approval requires, how long it takes, and where projects get stuck.",
    metaTitle: "Building Compliance & Approvals — Hagerstone",
    metaDescription:
      "Guides to fire NOC, NBC 2016, ECBC and state building bye-laws for Indian commercial projects: process, documents, timelines and common rejection reasons.",
  },
  compare: {
    heading: "Comparisons",
    intro: "Head-to-head comparisons of the systems and approaches you have to choose between.",
    metaTitle: "System Comparisons — Hagerstone",
    metaDescription:
      "Direct comparisons of facade systems, fit-out approaches and building services options for Indian commercial projects, with cost and performance trade-offs.",
  },
  cost: {
    heading: "Costs & Benchmarks",
    intro: "What things actually cost on Indian commercial projects, and what drives the number.",
    metaTitle: "Cost Benchmarks — Hagerstone",
    metaDescription:
      "Cost benchmarks for commercial interiors, facades and fit-outs across Indian cities, with the factors that move a rate up or down.",
  },
  guides: {
    heading: "Guides",
    intro: "Long-form guides covering a whole subject end to end.",
    metaTitle: "Guides — Hagerstone International",
    metaDescription:
      "In-depth guides to office fit-out, facade engineering and commercial construction in India, from concept through handover.",
  },
  architects: {
    heading: "For Architects & PMCs",
    intro:
      "Specifications, spatial clearances and compliance checklists for design teams — the coordination detail that is easiest to get wrong at concept stage.",
    metaTitle: "Resources for Architects & PMCs — Hagerstone",
    metaDescription:
      "Tender-ready specifications, spatial clearance guides and code checklists for architects and PMCs working on Indian commercial projects.",
  },
  calculators: {
    heading: "Calculators",
    intro: "Free estimating tools for interiors, facade and building services.",
    metaTitle: "Free Project Calculators — Hagerstone",
    metaDescription:
      "Free calculators for fit-out cost, glazing area, HVAC tonnage and more, with the method and assumptions behind every number explained.",
  },
  estates: {
    heading: "Business Districts & Industrial Estates",
    intro:
      "The specific business districts and industrial estates where Hagerstone has delivered work — what gets built there, which authorities a project clears, and the projects we have completed in each.",
    metaTitle: "Business Districts & Estates — Hagerstone",
    metaDescription:
      "Hagerstone's work across Cyber City, Focal Point Ludhiana, the BBN belt, Peenya and other districts — delivered projects, local authorities and what projects there need.",
  },
  industries: {
    heading: "Industries We Serve",
    intro:
      "Offices, hospitals, hotels, factories, pharma, retail, education and residential — each with its own requirements for interiors, facade, MEP and construction.",
    metaTitle: "Industries We Serve — Hagerstone International",
    metaDescription:
      "How Hagerstone delivers interiors, facade, MEP, PEB and construction for offices, hospitals, hotels, factories, pharma, retail, education and residential projects.",
  },
};

/** Reverse lookup: "/glossary" -> "glossary". */
const collectionForPath = (pathname: string): Collection | undefined =>
  (Object.keys(COLLECTION_BASE_PATH) as Collection[]).find(
    (collection) => COLLECTION_BASE_PATH[collection] === pathname,
  );

const CollectionIndexPage = () => {
  const { pathname } = useLocation();
  const collection = collectionForPath(pathname.replace(/\/$/, ""));
  if (!collection) return <NotFound />;

  const copy = COPY[collection];
  if (!copy) return <NotFound />;

  return (
    <ContentIndex collection={collection} entries={getCollection(collection)} {...copy} />
  );
};

export default CollectionIndexPage;
