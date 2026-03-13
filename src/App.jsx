import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-secondary p-4 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-light">JD Velásquez</Link>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none text-light">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className={`md:flex ${isOpen ? 'block' : 'hidden'} text-light gap-6 absolute md:static bg-secondary left-0 w-full md:w-auto top-16 md:top-auto p-4 md:p-0 flex-col md:flex-row shadow-md md:shadow-none`}>
              <Link to="/" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/projects" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Proyectos</Link>
              <Link to="/contact" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Contacto</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow container mx-auto p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>

        <footer className="bg-secondary text-center p-4 mt-8 text-muted">
          <p>&copy; {new Date().getFullYear()} JD Velásquez. Todos los derechos reservados.</p>
        .</footer>
      </div>
    </Router>
  );
}

export default App;
