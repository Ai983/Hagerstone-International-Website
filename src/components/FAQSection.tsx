import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Hagerstone International offer for commercial interior projects in Delhi NCR?",
    answer: "Hagerstone International provides comprehensive design-build solutions including interior design, space planning, turnkey fit-outs, MEP (Mechanical, Electrical, Plumbing) services, EPC (Engineering, Procurement, Construction), and PEB (Pre-Engineered Buildings). We specialize in corporate offices, commercial spaces, and institutional projects across Delhi, Gurgaon, Noida, and Greater Noida. Our end-to-end approach covers concept development, 3D visualization, execution, furniture procurement, and handover—eliminating the need for multiple vendors."
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

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our interior design and build services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
