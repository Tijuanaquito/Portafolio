import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Network, ShieldCheck, Terminal, BookOpen, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  const personalInfo = {
    name: "Juan Diego Tinoco Velasquez",
    title: "Técnico en Sistemas Microinformáticos y Redes (SMIX)",
    subtitle: "Futuro Especialista en ASIX & Ciberseguridad",
    about: "Soy un estudiante apasionado por la tecnología con un enfoque claro en la ciberseguridad y la administración de sistemas. Actualmente estoy terminando el grado medio de SMIX y preparándome para el superior de ASIX. Mi objetivo es proteger infraestructuras críticas y optimizar entornos de red. Combino mi formación técnica con una mentalidad de atleta: disciplina, resiliencia y mejora constante."
  };

  const cvUrl = "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/juan+diego-tinoco+velasquez/7de5b8fe-acf6-4115-a29b-37ba7f30b025?view=html";

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative bg-primary px-4 pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center z-10 relative">
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block relative group"
        >
          <div className="absolute inset-0 bg-accent blur-lg opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center p-1 border-4 border-accent shadow-2xl overflow-hidden relative z-10">
             <div className="w-full h-full bg-secondary flex items-center justify-center rounded-full overflow-hidden">
                {/* Si tienes una foto real, reemplaza el span por <img src="/tu-foto.jpg" alt="Foto" className="w-full h-full object-cover" /> */}
                <span className="text-4xl md:text-6xl text-light font-bold">JD</span>
             </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-light tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <h2 className="text-xl md:text-3xl text-accent font-medium">{personalInfo.title}</h2>
          <div className="flex items-center gap-3 text-muted text-sm md:text-base bg-secondary/50 px-4 py-1 rounded-full border border-accent/20">
            <ShieldCheck size={16} className="text-accent" />
            <span>{personalInfo.subtitle}</span>
          </div>
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10 text-justify md:text-center"
        >
          {personalInfo.about}
        </motion.p>

        {/* Highlight Stats / Interests based on PDF */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
            <div className="flex items-center gap-2 text-light bg-secondary px-4 py-2 rounded-lg">
                <Terminal size={20} className="text-accent" />
                <span>Sist. Operativos</span>
            </div>
             <div className="flex items-center gap-2 text-light bg-secondary px-4 py-2 rounded-lg">
                <Network size={20} className="text-accent" />
                <span>Redes</span>
            </div>
             <div className="flex items-center gap-2 text-light bg-secondary px-4 py-2 rounded-lg">
                <Dumbbell size={20} className="text-accent" />
                <span>Disciplina</span>
            </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link 
            to="/contact" 
            className="flex items-center gap-2 bg-accent hover:bg-opacity-90 text-light px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Contáctame
          </Link>
          <a 
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent hover:bg-secondary text-light border-2 border-secondary px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1"
          >
            <Download size={20} />
            Ver CV
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted cursor-pointer"
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

export default Hero;
