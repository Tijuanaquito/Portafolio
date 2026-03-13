import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Cloud, Wifi, User, Bolt } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Automatización con Google Workspace",
      description: "Desarrollo e implementación de soluciones para optimizar flujos de trabajo corporativos. Creación de scripts y configuraciones avanzadas para automatizar tareas repetitivas y mejorar la productividad del equipo.",
      tags: ["Google Workspace", "Cloud Automation", "Scripting", "Optimización"],
      icon: <Cloud size={24} />,
      status: "Completado"
    },
    {
      id: 2,
      title: "Diseño de Red Local (Gaming focus)",
      description: "Configuración y optimización de una red de alto rendimiento diseñada específicamente para baja latencia y alta seguridad. Implementación de QoS, segmentación de tráfico y políticas de seguridad robustas.",
      tags: ["Cisco", "Networking", "Seguridad", "Optimización", "Low Latency"],
      icon: <Wifi size={24} />,
      status: "En Proceso"
    },
    // Añadiré un placeholder para Programación Web ya que el usuario menciona "Programación de Web" en Hard Skills
    {
      id: 3,
      title: "Portfolio Profesional",
      description: "Desarrollo de portafolio personal responsive utilizando tecnologías modernas de frontend. Enfoque en diseño UX/UI limpio y accesibilidad.",
      tags: ["React", "Tailwind CSS", "Frontend", "UX/UI"],
      icon: <User size={24} />,
      status: "Completado"
    }
  ];

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
            <motion.div
              key={project.id}
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
                  {project.icon}
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
