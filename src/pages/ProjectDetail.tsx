import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { getProjectById, projects } from "../data/project";
import ProjectDetailHero from "../components/projects/ProjectDetailHero";
import FloorLayout from "../components/projects/FloorLayout";
import ProjectSection from "../components/projects/ProjectSection";
import {
  buildSchemaGraph,
  createImageObject,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id || "");

  if (!project) return <div className="p-10">Project not found.</div>;

  // Compute prev/next for bottom navigation
  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? projects[idx - 1] : undefined;
  const next = idx < projects.length - 1 ? projects[idx + 1] : undefined;

  // Structured data for the project
  const projectImage = project.hero.startsWith("http")
    ? project.hero
    : `${SITE_URL}${project.hero}`;
  const structuredData = buildSchemaGraph([
    organizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      name: project.title,
      url: `${SITE_URL}/projects/${project.id}`,
      description: project.summary,
    },
    {
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      image: projectImage,
      creator: {
        "@type": "Organization",
        name: "Hagerstone International",
      },
      locationCreated: project.location,
      dateCreated: project.year,
    },
    createImageObject(projectImage, `${project.title} project hero image`),
  ]);

  return (
    <div>
      <SEOHead
        title={`${project.title} | ${project.sector} Interior Design Project`}
        description={
          project.summary?.slice(0, 155) ||
          `Explore the ${project.title} project by Hagerstone International, a ${project.sector} interior design delivery in ${project.location}.`
        }
        canonical={`https://hagerstone.com/projects/${project.id}`}
        ogImage={projectImage}
        keywords={`${project.sector}, interior design, ${project.location}, commercial fit-out, Hagerstone project`}
        structuredData={structuredData}
      />

      <ProjectDetailHero
        title={project.title}
        client={project.client}
        hero={project.hero}
        heroVideo={project.heroVideo}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Project Summary */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
              <p className="text-lg text-foreground leading-relaxed mb-6">{project.summary}</p>
              
              {project.scope && project.scope.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Project Scope</h2>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-muted/30 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Project Details</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
                {project.sector && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Sector</dt>
                    <dd className="font-medium">{project.sector}</dd>
                  </div>
                )}
                {project.location && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Location</dt>
                    <dd className="font-medium">{project.location}</dd>
                  </div>
                )}
                {project.area && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Area</dt>
                    <dd className="font-medium">{project.area}</dd>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Duration</dt>
                    <dd className="font-medium">{project.duration}</dd>
                  </div>
                )}
                {project.year && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Year</dt>
                    <dd className="font-medium">{project.year}</dd>
                  </div>
                )}
                {project.status && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Status</dt>
                    <dd className="font-medium text-green-600">{project.status}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>

        {/* Special Features & Materials */}
        {(project.specialFeatures || project.materials) && (
          <section className="mb-12 grid md:grid-cols-2 gap-8">
            {project.specialFeatures && project.specialFeatures.length > 0 && (
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Special Features</h2>
                <ul className="space-y-2">
                  {project.specialFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.materials && project.materials.length > 0 && (
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Materials Used</h2>
                <ul className="space-y-2">
                  {project.materials.map((material, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Floor Layouts */}
        {project.floors?.map((f) => (
          <FloorLayout key={f.name} {...f} />
        ))}

        {/* Project Sections */}
        <h2 className="text-2xl font-bold text-primary mb-8 mt-12">Project Gallery</h2>
        {project.sections.map((s) => (
          <ProjectSection key={s.name} {...s} />
        ))}

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Inspired by This Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create a similar transformation for your space. Our team is ready to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Your Project
          </Link>
        </section>

        {/* Bottom nav: Prev / Next project */}
        <nav className="mt-16 flex items-center justify-between border-t pt-8" aria-label="Project navigation">
          <div>
            {prev ? (
              <Link
                to={`/projects/${prev.id}`}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 hover:bg-accent transition-colors"
                aria-label={`Previous project: ${prev.title}`}
              >
                ← Previous: {prev.title}
              </Link>
            ) : (
              <span className="text-muted-foreground">Start</span>
            )}
          </div>
          <Link
            to="/projects"
            className="rounded-full border px-6 py-3 hover:bg-accent transition-colors"
            aria-label="Back to all projects"
          >
            Back to Projects
          </Link>
          <div>
            {next ? (
              <Link
                to={`/projects/${next.id}`}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 hover:bg-accent transition-colors"
                aria-label={`Next project: ${next.title}`}
              >
                Next: {next.title} →
              </Link>
            ) : (
              <span className="text-muted-foreground">End</span>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
