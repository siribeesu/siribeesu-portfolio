import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FloatingBuilding = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a smoother rotate value using spring physics
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useSpring(rawRotate, { stiffness: 50, damping: 20 });
  
  // Floating movement
  const yTranslate = useTransform(scrollYProgress, [0, 1], [-20, 120]);

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-0 hidden xl:block pointer-events-none select-none">
      <motion.div
        style={{ rotateY, y: yTranslate }}
        className="relative w-28 h-[450px] preserve-3d"
      >
        {/* Central Core */}
        <div className="absolute inset-0 bg-bg-card/40 backdrop-blur-md border border-white/10 shadow-2xl preserve-3d">
          
          {/* Windows / Floors */}
          <div className="absolute inset-0 flex flex-col justify-around p-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex justify-between items-center gap-1">
                <div className={`h-2 w-full rounded-sm ${i % 3 === 0 ? 'bg-primary/40 shadow-[0_0_15px_rgba(139,92,246,0.6)]' : 'bg-primary/10'}`} />
                <div className={`h-2 w-1/2 rounded-sm ${i % 4 === 0 ? 'bg-secondary/40 shadow-[0_0_15px_rgba(6,182,212,0.6)]' : 'bg-secondary/10'}`} />
              </div>
            ))}
          </div>

          {/* Side faces for 3D depth */}
          {/* Right Face */}
          <div 
            className="absolute top-0 bottom-0 -right-4 w-8 bg-black/40 border-y border-r border-white/5"
            style={{ transform: 'rotateY(90deg) translateZ(4px)' }}
          />
          {/* Left Face */}
          <div 
            className="absolute top-0 bottom-0 -left-4 w-8 bg-black/60 border-y border-l border-white/5"
            style={{ transform: 'rotateY(-90deg) translateZ(4px)' }}
          />
          
          {/* Top Structure - Tower Tip */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-16 preserve-3d">
             <div className="absolute bottom-0 w-full h-1 bg-primary/60 blur-sm" />
             {/* Antenna */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-primary to-transparent" />
             {/* Glowing Tip */}
             <motion.div 
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute -top-16 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full blur-md shadow-[0_0_20px_var(--color-primary)]" 
             />
          </div>
        </div>

        {/* Ambient Glow behind the building */}
        <div className="absolute -inset-10 bg-primary/5 blur-[80px] -z-10 rounded-full" />
      </motion.div>
      
      {/* Label/Decoration */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-20 text-[10px] tracking-[0.4em] uppercase font-bold text-primary">
        Geometric Monolith // v1.0
      </div>
    </div>
  );
};

export default FloatingBuilding;
