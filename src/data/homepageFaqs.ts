import type { FaqItem } from "@/lib/seo";

// Homepage FAQ content.
//
// Lives here rather than inside FAQSection.tsx so both the accordion and the
// FAQPage structured data on Index.tsx read from one source. Google requires
// marked-up answers to match what is visible on the page, so they must not be
// allowed to drift apart.
//
// Note: the fit-out cost band quoted below (₹800-2,500/sq. ft.) contradicts the
// estimator in src/components/estimator/config.ts, which starts its cheapest
// package at ₹2,500/sq. ft. Both figures are public and they disagree. Pending
// a commercial decision, after which a single shared costBenchmarks source
// should replace both.
export const homepageFaqs: FaqItem[] = [
  {
    question: "What is office design & build and how does it work?",
    answer: "Office design & build is a comprehensive approach where a single company handles both the design and construction phases of your office project. Hagerstone offers complete office design & build services including modern office interior design, office workspace design, MEP design, interior fit out, and turnkey project delivery. This integrated approach ensures seamless coordination, faster completion, cost efficiency, and single-point accountability from concept to handover."
  },
  {
    question: "How much does a commercial interior fit-out cost in Delhi NCR?",
    answer: "Commercial interior costs in Delhi NCR typically range from ₹800 to ₹2,500 per sq. ft., depending on project scope, material quality, and customization level. Basic fit-outs start around ₹800-1,200/sq. ft., mid-range corporate offices cost ₹1,200-1,800/sq. ft., and premium executive spaces range from ₹1,800-2,500/sq. ft. or more. Factors affecting cost include false ceiling work, flooring materials, furniture specifications, MEP complexity, and branding elements. Hagerstone provides transparent, itemized quotations after site assessment to help you budget accurately with no hidden costs."
  },
  {
    question: "What is the typical timeline for completing an office interior project?",
    answer: "A standard 10,000-15,000 sq. ft. office interior project typically takes 8-12 weeks from design approval to completion. The timeline includes: design development and approvals (2-3 weeks), procurement and site preparation (1-2 weeks), civil and MEP work (3-4 weeks), finishing and furniture installation (2-3 weeks). Larger projects over 30,000 sq. ft. may require 16-20 weeks. With many years of experience, Hagerstone ensures on-time delivery through efficient project management, parallel execution of trades, and dedicated site supervision. The client receives weekly progress updates and milestone tracking."
  },
  {
    question: "Why choose a design-build firm like Hagerstone over hiring separate designers and contractors?",
    answer: "A design-build approach offers single-point accountability, eliminating coordination issues between designers and contractors. Benefits include: faster project completion, cost efficiency through optimized procurement, seamless communication, better quality control, and reduced risk of design-execution mismatches. Hagerstone's integrated team ensures your vision translates accurately from concept to reality. With in-house design, engineering, and execution teams plus hundreds of completed projects, we deliver cohesive results without the finger-pointing common in traditional multi-vendor setups."
  },
  {
    question: "Does Hagerstone handle MEP and civil work, or only interior design?",
    answer: "Hagerstone offers complete turnkey solutions covering all aspects: interior design, civil construction, MEP (mechanical, electrical, plumbing), HVAC, fire safety, data cabling, electrical distribution, plumbing systems, and structural modifications where required. Our in-house engineering team ensures all MEP systems integrate seamlessly with interior aesthetics and comply with National Building Code (NBC) and local authority norms. From bare shell to move-in ready, we handle every element, making us a true single-point design-build partner for commercial spaces."
  },
  {
    question: "How does Hagerstone ensure quality and timely completion of projects?",
    answer: "Quality assurance is embedded in our process through: ISO-certified quality management systems, dedicated project managers for each site, weekly progress audits, multi-tier quality checks at material procurement, execution, and finishing stages, and only working with vetted vendors and skilled labour. We use project management software for real-time tracking and maintain strict adherence to approved timelines. With many years of experience and millions of square feet delivered across numerous projects for clients, our track record speaks to our commitment to excellence and punctual delivery."
  }
];
