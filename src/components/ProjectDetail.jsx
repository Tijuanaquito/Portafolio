import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Monitor, Cloud, Wifi, User, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-light">
        <h2 className="text-3xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link to="/projects" className="text-accent underline hover:text-light transition-colors">Volver a Proyectos</Link>
      </div>
    );
  }

  // Helper for Icon rendering (since we removed JSX from data file to keep it cleaner)
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Cloud': return <Cloud className="w-12 h-12 text-accent" />;
      case 'Wifi': return <Wifi className="w-12 h-12 text-accent" />;
      case 'User': return <User className="w-12 h-12 text-accent" />;
      default: return <Monitor className="w-12 h-12 text-accent" />;
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-primary text-light pt-24 pb-12 px-4"
      >
        <div className="container mx-auto max-w-4xl">
          <Link to="/projects" className="inline-flex items-center text-muted hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Volver a Proyectos
          </Link>
          
          <div className="bg-secondary rounded-2xl p-8 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-primary p-4 rounded-xl shadow-inner border border-gray-700">
                {renderIcon(project.iconName)}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-primary/50 text-accent text-sm px-3 py-1 rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12 text-muted">
              <h3 className="text-xl font-bold text-light mb-4">Descripción del Proyecto</h3>
              <p className="text-lg leading-relaxed mb-6">
                {project.fullDescription || project.description}
              </p> 
              <p>
                Aquí puedes documentar el proceso de desarrollo, los retos técnicos y las soluciones implementadas.
              </p>
            </div>

            {/* Galería de Imágenes */}
            <h3 className="text-2xl font-bold text-light mb-6 border-b border-gray-800 pb-2">Galería del Proyecto</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {project.images && project.images.map((img, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video bg-primary/30 rounded-lg overflow-hidden border-2 border-gray-800 hover:border-accent transition-colors group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`Captura ${index + 1}`} className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
                  {/* Fallback si falla la imagen */}
                  <div className="absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-4 hidden">
                    <ZoomIn className="w-8 h-8 text-accent mb-2" />
                    <span className="text-muted text-sm font-medium">Ver Imagen {index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
              {/* Conditional Links if available in data */}
              <a href="#" className="flex items-center justify-center gap-2 bg-accent hover:bg-opacity-90 text-light px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-accent/20 flex-1 text-center">
                <ExternalLink size={20} />
                Ver Demo en Vivo
              </a>
              <a href="#" className="flex items-center justify-center gap-2 bg-primary hover:bg-gray-900 text-light border border-gray-700 px-6 py-3 rounded-lg font-medium transition-all flex-1 text-center">
                <Github size={20} />
                Ver Código Fuente
              </a>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Lightbox / Modal para ver imagen completa */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-light p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl max-h-[90vh] w-full bg-secondary rounded-lg overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer click en la imagen/contenedor
            >
               <div className="aspect-video bg-gray-900 flex items-center justify-center text-light relative">
                  <img src={selectedImage} alt="Vista Previa" className="w-full h-full object-contain" />
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;