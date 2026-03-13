import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary">
        <nav className="bg-secondary p-4 shadow-lg sticky top-0 z-50 border-b border-gray-800">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-light tracking-wider">JD<span className="text-accent">.</span></Link>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none text-light hover:text-accent transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} text-light gap-8 absolute md:static bg-secondary left-0 w-full md:w-auto top-16 md:top-auto p-6 md:p-0 flex-col md:flex-row shadow-2xl md:shadow-none border-b md:border-none border-gray-800`}>
              <Link to="/" className="hover:text-accent transition-colors font-medium" onClick={() => setIsOpen(false)}>Inicio</Link>
              <Link to="/projects" className="hover:text-accent transition-colors font-medium" onClick={() => setIsOpen(false)}>Proyectos</Link>
              <Link to="/contact" className="hover:text-accent transition-colors font-medium" onClick={() => setIsOpen(false)}>Contacto</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>

        <footer className="bg-secondary text-center p-6 mt-auto text-muted border-t border-gray-800">
          <p className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Juan Diego Velásquez. <span className="text-accent">Desarrollado con React & Tailwind.</span>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
