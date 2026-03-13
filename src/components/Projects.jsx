import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Folder, Cloud, Wifi, User, Bolt, Monitor } from 'lucide-react';
import { projects } from '../data/projects';

function Projects() {
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Cloud': return <Cloud size={24} />;
      case 'Wifi': return <Wifi size={24} />;
      case 'User': return <User size={24} />;
      default: return <Monitor size={24} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-primary border-t border-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Bolt className="text-accent w-12 h-12 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">
            Proyectos Académicos y Personales
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Aplicación práctica de conocimientos en escenarios reales y simulados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="block h-full"> 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-2xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border border-transparent hover:border-gray-700 flex flex-col group h-full relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-primary/80 text-muted border border-gray-700">
                {project.status}
              </div>

              <div className="flex justify-between items-start mb-6 mt-2">
                <div className="p-4 bg-primary rounded-2xl text-accent group-hover:text-light transition-colors shadow-inner ring-1 ring-gray-800">
                  {renderIcon(project.iconName)}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-light group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono font-medium text-accent bg-primary rounded-md border border-gray-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
