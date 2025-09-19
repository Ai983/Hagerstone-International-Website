

import { Link } from "react-router-dom";
import { projects } from "../data/project";
import ProjectsListHero from "../components/projects/ProjectsListHero";


function Projects() {
  return (
    <div>
      <ProjectsListHero />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block rounded-lg border hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.hero}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <div className="text-muted-foreground mb-1">{project.client}</div>
                {project.location && <div className="text-sm">{project.location}</div>}
                {project.year && <div className="text-sm">{project.year}</div>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;