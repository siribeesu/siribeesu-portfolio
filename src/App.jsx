import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sparkles from './components/Sparkles';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setCursorPos(newPos);
      
      // Add particle to trail
      const id = Date.now();
      setTrail(prev => [...prev.slice(-15), { id, ...newPos }]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-bg-dark min-h-screen">
      {/* Principal Sparkling Background */}
      <Sparkles />
      
      {/* Interactive Mouse Trail Sparks */}
      <AnimatePresence>
        {trail.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0, y: -20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed w-1 h-1 bg-primary rounded-full pointer-events-none z-[10000]"
            style={{ 
              left: point.x, 
              top: point.y,
              boxShadow: '0 0 10px var(--primary), 0 0 20px var(--secondary)'
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Custom Cursor Follower */}
      <div 
        className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out hidden md:block"
        style={{ left: cursorPos.x - 16, top: cursorPos.y - 16 }}
      />
      <div 
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ left: cursorPos.x - 4, top: cursorPos.y - 4 }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
