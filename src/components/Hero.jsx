import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [data, setData] = useState({
    bio: "Aquí va tu biografía extraída del PDF. Como desarrollador Full Stack apasionado, me especializo en crear experiencias web modernas y accesibles.",
    skills: ["React", "Node.js", "Tailwind CSS", "Express"]
  });

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center p-4 bg-primary text-light"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-accent">JD Velásquez</h1>
      <h2 className="text-xl md:text-2xl text-muted mb-8">Desarrollador Full Stack Senior</h2>
      <p className="max-w-2xl text-lg leading-relaxed mb-8 text-light opacity-90">
        {data.bio}
      </p>
      
      <div className="flex gap-4 mb-12">
        <a href="#projects" className="px-6 py-3 bg-secondary hover:bg-accent rounded-full transition-colors font-medium">Ver Proyectos</a>
        <a href="#contact" className="px-6 py-3 border border-secondary hover:bg-secondary rounded-full transition-colors font-medium">Contáctame</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {data.skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-secondary rounded-lg text-muted hover:text-light transition-colors cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Hero;
