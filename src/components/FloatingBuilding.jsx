import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FloatingBuilding = () => {
  const { scrollYProgress } = useScroll();
  
  // Reduced rotation for a more subtle, premium feel (from 720 to 180 degrees)
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  // Smoother, "heavier" motion with increased damping
  const rotateY = useSpring(rawRotate, { stiffness: 25, damping: 30 });
  
  // Floating parallax movement
  const yTranslate = useTransform(scrollYProgress, [0, 1], [30, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.98]);

  return (
    <div className="fixed right-[-80px] top-1/2 -translate-y-1/2 z-0 hidden 2xl:block pointer-events-none select-none perspective-[1500px]">
      <motion.div
        style={{ rotateY, y: yTranslate, scale }}
        className="relative w-64 h-[700px] preserve-3d"
      >
        {/* Main Skyscraper Body - Primary Block */}
        <div className="absolute inset-0 preserve-3d">
          
          {/* Front Face */}
          <div className="absolute inset-0 bg-bg-card/80 backdrop-blur-xl border-l-[3px] border-primary/40 shadow-[inset_0_0_40px_rgba(139,92,246,0.2)] transform translate-z-[120px] flex flex-col p-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex gap-2 mb-3">
                 <div className={`h-4 w-12 rounded-sm ${i % 4 === 0 ? 'bg-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.8)]' : 'bg-white/5'}`} />
                 <div className="h-4 w-full bg-white/5 rounded-sm" />
                 <div className={`h-4 w-12 rounded-sm ${i % 3 === 0 ? 'bg-secondary/50 shadow-[0_0_15px_rgba(6,182,212,0.8)]' : 'bg-white/5'}`} />
              </div>
            ))}
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 bg-bg-card/90 transform -translate-z-[120px] rotate-y-180 border-r-[3px] border-primary/20" />

          {/* Left Face */}
          <div className="absolute inset-y-0 -left-[120px] w-[240px] bg-bg-dark/95 border-x border-white/10 transform rotate-y-90 flex flex-col p-6">
             <div className="w-full h-full border-l-2 border-primary/20 flex flex-col justify-around">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-1 w-full bg-primary/10" />
                ))}
             </div>
          </div>

          {/* Right Face */}
          <div className="absolute inset-y-0 -right-[120px] w-[240px] bg-bg-dark/95 border-x border-white/10 transform rotate-y-90 translate-x-[240px]">
             <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
          </div>

          {/* Top Face (Roof) */}
          <div className="absolute -top-[120px] inset-x-0 h-[240px] bg-bg-card border border-white/20 transform rotate-x-90 translate-y-[120px] shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-primary/40 rounded-full animate-ping" />
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full blur-xl" />
             </div>

             {/* The Pinnacle (Super Sharp Top Tip) */}
             <div className="absolute inset-0 flex items-center justify-center preserve-3d">
                {/* Long Main Needle Spire */}
                <div className="w-[2px] h-[400px] bg-gradient-to-t from-primary via-primary/40 to-transparent transform -rotate-x-90 translate-y-[-280px] shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                
                {/* Pyramid Sharp Tip (Larger and Thinner) */}
                <div className="absolute transform -rotate-x-90 translate-y-[-480px] preserve-3d">
                  {/* Spike Face 1 */}
                  <div 
                    className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[200px] border-l-transparent border-r-transparent border-b-primary/70"
                    style={{ transform: 'rotateY(0deg) rotateX(4deg) translateZ(2px)' }}
                  />
                  {/* Spike Face 2 */}
                  <div 
                    className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[200px] border-l-transparent border-r-transparent border-b-primary/50"
                    style={{ transform: 'rotateY(90deg) rotateX(4deg) translateZ(2px)' }}
                  />
                  {/* Spike Face 3 */}
                  <div 
                    className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[200px] border-l-transparent border-r-transparent border-b-primary/70"
                    style={{ transform: 'rotateY(180deg) rotateX(4deg) translateZ(2px)' }}
                  />
                  {/* Spike Face 4 */}
                  <div 
                    className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[200px] border-l-transparent border-r-transparent border-b-primary/50"
                    style={{ transform: 'rotateY(270deg) rotateX(4deg) translateZ(2px)' }}
                  />
                  
                  {/* Extreme Tip Glow */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 2, 1], 
                      opacity: [0.6, 1, 0.6],
                      boxShadow: [
                        '0 0 10px var(--color-primary)',
                        '0 0 30px var(--color-primary), 0 0 60px var(--color-secondary)',
                        '0 0 10px var(--color-primary)'
                      ] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full blur-[2px] z-50"
                  />
                </div>

                {/* Satellite Disks (Decoration for Spire) */}
                <div className="absolute transform -rotate-x-90 translate-y-[-350px] preserve-3d">
                   <div className="w-12 h-12 border border-primary/20 rounded-full" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-secondary/20 rounded-full" />
                </div>
             </div>
          </div>
        </div>

        {/* Secondary Inner Core (Smaller, deeper block) */}
        <div className="absolute top-20 bottom-20 left-10 right-10 preserve-3d opacity-60">
           <div className="absolute inset-0 bg-primary/10 border border-primary/40 transform translate-z-[150px]" />
           <div className="absolute inset-0 bg-secondary/10 border border-secondary/40 transform -translate-z-[150px] rotate-y-180" />
        </div>

        {/* Floating Halo around it */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-20 border-[2px] border-dashed border-primary/20 rounded-full transform -rotate-x-90 translate-y-[300px]"
        />

        {/* Massive Glow Source */}
        <div className="absolute -inset-40 bg-primary/5 blur-[120px] -z-20 rounded-full" />
      </motion.div>
      
      {/* HUD Info */}
      <div className="absolute -bottom-20 right-0 text-right opacity-40 font-mono text-xs tracking-widest uppercase text-secondary">
        <p>Architectural Engine // 0x442</p>
        <p>Structure Integrity // 100%</p>
        <p className="text-primary animate-pulse">Scanning System...</p>
      </div>
    </div>
  );
};

export default FloatingBuilding;
