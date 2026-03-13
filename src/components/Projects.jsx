import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción detallada del proyecto extraída del PDF.",
      technologies: ["React", "Tailwind"],
      link: "#",
      repo: "#"
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción detallada del proyecto extraída del PDF.",
      technologies: ["Node.js", "Express"],
      link: "#",
      repo: "#"
    },
    // Añade más proyectos aquí según el PDF
  ];

  return (
    <section id="projects" className="py-16 bg-primary text-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-accent"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-xl hover:shadow-xl transition-shadow border border-gray-800"
            >
              <div className="mb-4">
                <Monitor className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted text-sm mb-4">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-primary text-xs rounded text-muted border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.link} className="flex items-center text-sm text-light hover:text-accent transition-colors">
                  <ExternalLink size={16} className="mr-1" /> Demo
                </a>
                <a href={project.repo} className="flex items-center text-sm text-light hover:text-accent transition-colors">
                  <Github size={16} className="mr-1" /> Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
