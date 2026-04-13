import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { projects } from "@/data/project";
import ProjectsListHero from "@/components/projects/ProjectsListHero";
import { ScrollReveal, StaggerContainer } from "@/components/animations";
import {
  buildSchemaGraph,
  createBreadcrumbSchema,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

function Projects() {
  return (
    <div>
      <SEOHead
        title="Office Design & Build Projects Portfolio | Modern Office Interiors"
        description="Explore Hagerstone’s office design & build portfolio, including modern interiors, MEP projects, and commercial fit-outs across India."
        canonical="https://hagerstone.com/projects"
        keywords="office design and build projects, modern office interior design portfolio, commercial interior design projects, office fit out case studies, mep design projects, office workspace design india"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          createBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Projects", url: `${SITE_URL}/projects` },
          ]),
          {
            "@type": "WebPage",
            name: "Office Design & Build Projects Portfolio",
            url: `${SITE_URL}/projects`,
            description:
              "Portfolio of office design & build projects delivered by Hagerstone International.",
          },
        ])}
      />

      <ProjectsListHero />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Text for SEO */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <ScrollReveal variant="slide-up" delay={0.1}>
            <p className="text-lg text-muted-foreground">
              Discover completed{" "}
              <strong>office design &amp; build projects</strong>,{" "}
              <strong>modern office interior design</strong>,{" "}
              <strong>MEP design</strong>, and{" "}
              <strong>interior fit out</strong> work across corporate HQs,
              coworking spaces, showrooms, and commercial buildings in Delhi
              NCR and other Indian cities.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variant="slide-up"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block rounded-lg border hover:shadow-lg transition overflow-hidden"
              aria-label={`View ${project.title} office design & build project details`}
            >
              <img
                src={project.hero}
                alt={
                  project.heroAlt ||
                  `${project.title} – ${project.sector} office design & build project by Hagerstone`
                }
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                width="384"
                height="256"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                {project.excerpt && (
                  <p className="text-sm text-muted-foreground mb-2">{project.excerpt}</p>
                )}
                <div className="text-muted-foreground mb-1">
                  {project.client}
                </div>
                {project.sector && (
                  <div className="text-sm text-accent font-medium mb-1">
                    {project.sector}
                  </div>
                )}
                {project.location && (
                  <div className="text-sm">{project.location}</div>
                )}
                {project.area && (
                  <div className="text-sm text-muted-foreground">
                    {project.area}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Ready to Start Your Office Design &amp; Build Project?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you are planning a new{" "}
            <strong>office workspace design</strong>,{" "}
            <strong>commercial interior design</strong>, or a complete{" "}
            <strong>interior fit out</strong> with{" "}
            <strong>MEP design services</strong>, the Hagerstone team is ready
            to help you create a modern, efficient workspace.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
