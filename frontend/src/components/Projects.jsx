import { useEffect, useState } from "react";
import { getProjects } from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data || []))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-bfrom-slate-50 to-slate-100 text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          A selection of projects showcasing my experience in building scalable
          full-stack applications and AI-driven solutions.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


