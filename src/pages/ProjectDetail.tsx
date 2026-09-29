import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { getProjectById, projects } from "../data/project";
import ProjectDetailHero from "../components/projects/ProjectDetailHero";
import FloorLayout from "../components/projects/FloorLayout";
import ProjectSection from "../components/projects/ProjectSection";
import {
  buildImageGallerySchema,
  buildSchemaGraph,
  createImageObject,
  ORG_ID,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id || "");

  if (!project) return <div data-not-found className="p-10">Project not found.</div>;

  // Compute prev/next for bottom navigation
  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? projects[idx - 1] : undefined;
  const next = idx < projects.length - 1 ? projects[idx + 1] : undefined;

  const canonicalUrl = project.canonical ?? `${SITE_URL}/projects/${project.id}`;
  const absolute = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);
  const projectImage = project.hero ? absolute(project.hero) : undefined;
  const allImages = Array.from(
    new Set([
      ...(project.hero ? [project.hero] : []),
      ...project.sections.flatMap((section) => section.images?.map((image) => image.src) ?? []),
    ]),
  ).map(absolute);
  const hasGallery = project.sections.some((section) => (section.images?.length ?? 0) > 0 || section.video);
  const layoutItems = project.layout ?? [];
  const highlightItems = project.designHighlights ?? [];
  const scopeItems = project.scope ?? [];
  const relatedProjects = projects.filter((item) => item.id !== project.id).slice(0, 3);

  // Every gallery photo as an ImageObject with its own alt text and caption,
  // so image search can index them individually rather than only the hero.
  const seenImages = new Set<string>();
  const galleryImages = project.sections
    .flatMap((section) => section.images ?? [])
    .filter((image) => !seenImages.has(image.src) && seenImages.add(image.src))
    .map((image) => ({
      contentUrl: image.src.startsWith("http") ? image.src : `${SITE_URL}${image.src}`,
      alt: image.alt,
      caption: image.caption,
      width: image.width,
      height: image.height,
    }));

  // The specs render as a two-column table: label / value pairs are tabular
  // data, and a <table> is the form answer engines extract most reliably.
  const specs: Array<[string, string | undefined]> = [
    ["Client", project.client],
    ["Project type", project.sector],
    ["Carpet area", project.area],
    ["Colour theme", project.colorTheme],
    ["Location", project.location],
    ["Duration", project.duration],
    ["Year", project.year],
    ["Status", project.status],
  ];
  const specRows = specs.filter((row): row is [string, string] => Boolean(row[1]));
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
      ...(allImages.length > 0 ? { image: allImages } : {}),
      creator: { "@id": ORG_ID },
      about: project.about ?? project.sector,
      size: project.size ?? project.area,
      keywords: project.schemaKeywords,
      mainEntityOfPage: canonicalUrl,
      locationCreated: project.location,
      dateCreated: project.year,
    },
    ...(projectImage ? [createImageObject(projectImage, `${project.title} project hero image`)] : []),
    ...(galleryImages.length > 0
      ? [
          buildImageGallerySchema({
            id: `${canonicalUrl}#gallery`,
            name: `${project.title} gallery`,
            url: canonicalUrl,
            images: galleryImages,
          }),
        ]
      : []),
  ]);

  return (
    <main>
      <SEOHead
        // The fallback used to be `<title> | <sector> Interior Design Project`,
        // which ran to 99-116 characters once the brand was appended — Google
        // showed roughly half of it. Project titles already name the client and
        // the space, so the sector restated it for no gain.
        title={project.metaTitle ?? project.title}
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
            heroPosition={project.heroPosition}
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
                <table className="w-full text-left">
                  <tbody>
                    {specRows.map(([label, value]) => (
                      <tr key={label} className="border-b border-border/60 last:border-0">
                        <th scope="row" className="py-2 pr-4 align-top text-sm font-normal text-muted-foreground">
                          {label}
                        </th>
                        <td className={`py-2 font-medium ${label === "Status" ? "text-green-600" : ""}`}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
          {hasGallery && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-primary mb-8">Gallery</h2>
              {project.sections.map((s) => (
                <ProjectSection key={s.name} {...s} />
              ))}
            </section>
          )}

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
          {/* Stacks on phones: project titles are long enough to push the row
              past the screen edge. */}
          <nav
            className="mt-16 flex flex-col gap-3 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
            aria-label="Project navigation"
          >
            <div className="min-w-0">
              {prev ? (
                <Link
                  to={`/projects/${prev.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-center hover:bg-accent transition-colors sm:inline-flex sm:w-auto"
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
              className="shrink-0 rounded-full border px-6 py-3 text-center hover:bg-accent transition-colors"
              aria-label="Back to all projects"
            >
              Back to Projects
            </Link>
            <div className="min-w-0 sm:text-right">
              {next ? (
                <Link
                  to={`/projects/${next.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-center hover:bg-accent transition-colors sm:inline-flex sm:w-auto"
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
