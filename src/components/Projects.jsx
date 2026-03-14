import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Wifi, User, Bolt, Monitor, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';

const Lightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-50 p-2"
      >
        <X size={32} />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-2 md:left-8 text-white hover:text-accent transition-colors p-3 z-50 bg-black/50 rounded-full hover:bg-black/80"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[currentIndex]}
          alt={`Full size ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-md">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={nextImage}
        className="absolute right-2 md:right-8 text-white hover:text-accent transition-colors p-3 z-50 bg-black/50 rounded-full hover:bg-black/80"
      >
        <ChevronRight size={32} />
      </button>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, openLightbox }) => {
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Cloud': return <Cloud size={24} />;
      case 'Wifi': return <Wifi size={24} />;
      case 'User': return <User size={24} />;
      default: return <Monitor size={24} />;
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-secondary rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border border-transparent hover:border-gray-700 flex flex-col group h-full"
    >
      {/* Main Image Area */}
      <div className="relative aspect-video bg-gray-900 group-image overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <>
            <motion.img 
              key={currentThumbIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={project.images[currentThumbIndex]} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(project.images, currentThumbIndex)}
            />
            <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-primary/80 text-muted border border-gray-700 shadow-md backdrop-blur-sm z-10">
              {project.status}
            </div>
             <div 
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer pointer-events-none"
             >
                <Maximize2 className="text-white w-10 h-10 drop-shadow-lg" />
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
            <Monitor size={48} />
          </div>
        )}
      </div>

      {/* Thumbnails Strip */}
      {project.images && project.images.length > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto bg-gray-900/50 scrollbar-hide border-b border-gray-800">
          {project.images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.preventDefault(); setCurrentThumbIndex(idx); }}
              className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                currentThumbIndex === idx 
                  ? 'border-accent shadow-sm shadow-accent/50 opacity-100' 
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="mb-4">
             <div className="inline-block p-3 bg-primary rounded-xl text-accent shadow-inner ring-1 ring-gray-800">
                {renderIcon(project.iconName)}
             </div>
          </div>

          <Link to={`/projects/${project.id}`} className="block mb-3 group-content">
             <h3 className="text-xl font-bold text-light group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>
          
          <p className="text-muted mb-6 flex-grow leading-relaxed text-sm line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs font-mono font-medium text-accent bg-primary rounded-md border border-gray-800">
                #{tag}
              </span>
            ))}
          </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const [lightboxData, setLightboxData] = useState(null);

  const openLightbox = (images, index) => {
    setLightboxData({ images, index });
  };

  const closeLightbox = () => {
    setLightboxData(null);
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
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              openLightbox={openLightbox} 
            />
          ))}
        </div>

        <AnimatePresence>
          {lightboxData && (
            <Lightbox 
              images={lightboxData.images} 
              initialIndex={lightboxData.index} 
              onClose={closeLightbox} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
