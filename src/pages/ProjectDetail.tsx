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

  const canonicalUrl = project.canonical ?? `${SITE_URL}/projects/${project.id}`;
  const projectImage = project.hero.startsWith("http")
    ? project.hero
    : `${SITE_URL}${project.hero}`;
  const allImages = Array.from(
    new Set([
      project.hero,
      ...project.sections.flatMap((section) => section.images?.map((image) => image.src) ?? []),
    ]),
  ).map((image) => (image.startsWith("http") ? image : `${SITE_URL}${image}`));
  const layoutItems = project.layout ?? [];
  const highlightItems = project.designHighlights ?? [];
  const scopeItems = project.scope ?? [];
  const relatedProjects = projects.filter((item) => item.id !== project.id).slice(0, 3);
  const structuredData = buildSchemaGraph([
    organizationSchema,
    websiteSchema,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      name: project.title,
      url: canonicalUrl,
      description: project.summary,
    },
    {
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      image: allImages,
      creator: {
        "@type": "Organization",
        name: "Hagerstone International",
      },
      about: project.about ?? project.sector,
      size: project.size ?? project.area,
      keywords: project.schemaKeywords,
      mainEntityOfPage: canonicalUrl,
      locationCreated: project.location,
      dateCreated: project.year,
    },
    createImageObject(projectImage, `${project.title} project hero image`),
  ]);

  return (
    <main>
      <SEOHead
        title={project.metaTitle ?? `${project.title} | ${project.sector} Interior Design Project`}
        description={
          project.metaDescription ||
          project.summary?.slice(0, 155) ||
          `Explore the ${project.title} project by Hagerstone International, a ${project.sector} interior design delivery in ${project.location}.`
        }
        canonical={canonicalUrl}
        ogImage={projectImage}
        ogImageAlt={project.heroAlt}
        keywords={
          project.seoKeywords ??
          `${project.sector}, interior design, ${project.location}, commercial fit-out, Hagerstone project`
        }
        structuredData={structuredData}
        appendSiteName={!project.metaTitle}
      />

      <article>
        <header>
          <ProjectDetailHero
            title={project.title}
            client={project.client}
            hero={project.hero}
            heroAlt={project.heroAlt}
            heroVideo={project.heroVideo}
          />
        </header>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Overview & Specs */}
          <section className="mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {project.overview ?? project.summary}
                </p>
                {project.id === "valorium-ventures-office-interior" && (
                  <p className="text-muted-foreground leading-relaxed">
                    Explore our{" "}
                    <Link to="/services/office-design-build" className="text-primary hover:underline">
                      Office Design &amp; Build
                    </Link>{" "}
                    and{" "}
                    <Link to="/services/interior-fit-out" className="text-primary hover:underline">
                      Interior Fit-Out
                    </Link>{" "}
                    services for commercial office interiors that balance performance and brand identity.
                  </p>
                )}
              </div>

              <div className="bg-muted/30 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Project Specs</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-muted-foreground">Client</dt>
                    <dd className="font-medium">{project.client}</dd>
                  </div>
                  {project.sector && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Project Type</dt>
                      <dd className="font-medium">{project.sector}</dd>
                    </div>
                  )}
                  {project.area && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Carpet Area</dt>
                      <dd className="font-medium">{project.area}</dd>
                    </div>
                  )}
                  {project.colorTheme && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Colour Theme</dt>
                      <dd className="font-medium">{project.colorTheme}</dd>
                    </div>
                  )}
                  {project.location && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Location</dt>
                      <dd className="font-medium">{project.location}</dd>
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

          {scopeItems.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Scope</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {scopeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {layoutItems.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Space Planning &amp; Layout</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {layoutItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(highlightItems.length > 0 || project.designEssence) && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Design &amp; Material Highlights</h2>
              {highlightItems.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {highlightItems.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {project.designEssence && (
                <p className="text-muted-foreground leading-relaxed">{project.designEssence}</p>
              )}
            </section>
          )}

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
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-8">Gallery</h2>
            {project.sections.map((s) => (
              <ProjectSection key={s.name} {...s} />
            ))}
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Projects</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.id}`}
                  className="rounded-lg border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-lg font-semibold text-primary">{item.title}</div>
                  <p className="text-sm text-muted-foreground mt-2">{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Inspired by This Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can create a similar transformation for your space. Our team is ready to bring your
              vision to life.
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
      </article>
    </main>
  );
}
