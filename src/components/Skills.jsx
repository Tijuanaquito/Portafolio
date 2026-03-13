import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Cloud, Shield, Settings, Users, Monitor, Cpu, Activity, Clock } from 'lucide-react';

const skillsData = [
  { 
    category: 'Infraestructura & Redes', 
    icon: <Network className="w-8 h-8" />, 
    description: "Diseño, configuración y optimización de redes locales y entornos seguros.",
    skills: ['Cisco Packet Tracer', 'Gestión de Redes', 'Diseño de Redes LAN/WLAN', 'Seguridad de Redes', 'Protocolos TCP/IP'] 
  },
  { 
    category: 'Sistemas & Cloud', 
    icon: <Cloud className="w-8 h-8" />, 
    description: "Administración de sistemas operativos y entornos de trabajo colaborativos en la nube.",
    skills: ['Google Workspace Admin', 'Automatización', 'Windows Server', 'Linux Administration', 'Virtualización'] 
  },
  { 
    category: 'Habilidades Blandas', 
    icon: <Users className="w-8 h-8" />, 
    description: "Competencias personales que potencian el trabajo en equipo y la resolución de problemas.",
    skills: ['Liderazgo', 'Trabajo en Equipo', 'Resolución de Problemas', 'Organización', 'Puntualidad', 'Asertividad'] 
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">
            Mis Habilidades
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
            Combinación estratégica de conocimientos técnicos en administración de sistemas y competencias interpersonales.
            </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-light">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-accent transition-all hover:-translate-y-2 duration-300 group"
            >
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {group.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{group.category}</h3>
              <p className="text-muted mb-6 text-sm leading-relaxed">{group.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/50 text-light text-xs font-medium rounded-full border border-gray-700 hover:border-accent/50 transition-colors flex items-center gap-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {skill}
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

export default Skills;