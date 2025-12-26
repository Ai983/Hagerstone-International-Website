import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { projects } from "../data/project";
import ProjectsListHero from "../components/projects/ProjectsListHero";
import { ScrollReveal, StaggerContainer } from "@/components/animations";

function Projects() {
  return (
    <div>
      <SEOHead
        title="Interior Design Projects Portfolio | Office & Commercial Fit-Outs"
        description="Explore Hagerstone's portfolio of 250+ completed interior design projects. Corporate offices, showrooms, hospitality, and commercial spaces across Delhi NCR, India."
        canonical="https://hagerstone.com/projects"
        keywords="interior design portfolio, office projects Delhi, commercial fit-out projects, corporate interior showcase"
      />
      
      <ProjectsListHero />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Text for SEO */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Discover our portfolio of completed interior design and fit-out projects across corporate offices, 
            commercial spaces, showrooms, and hospitality venues. Each project showcases our commitment to 
            design excellence and client satisfaction.
          </p>
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
              aria-label={`View ${project.title} project details`}
            >
              <img
                src={project.hero}
                alt={project.heroAlt || `${project.title} - ${project.sector} interior design project by Hagerstone`}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="384"
                height="256"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                <div className="text-muted-foreground mb-1">{project.client}</div>
                {project.sector && <div className="text-sm text-accent font-medium mb-1">{project.sector}</div>}
                {project.location && <div className="text-sm">{project.location}</div>}
                {project.area && <div className="text-sm text-muted-foreground">{project.area}</div>}
              </div>
            </Link>
          ))}
        </StaggerContainer>
        
        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're planning a corporate office fit-out, showroom design, or commercial space transformation, 
            our team is ready to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
