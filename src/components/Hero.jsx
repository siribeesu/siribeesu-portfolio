import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        x.set(mouseX);
        y.set(mouseY);
    };

    return (
        <section 
            id="home" 
            onMouseMove={handleMouseMove}
            className="min-h-screen flex items-center relative overflow-hidden pt-20"
            style={{ perspective: "1200px" }}
        >
            {/* Dynamic 3D Background Elements */}
            <motion.div 
                style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], [-50, 50]), y: useTransform(mouseYSpring, [-0.5, 0.5], [-50, 50]) }}
                className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[120px] -z-10" 
            />
            <motion.div 
                style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], [50, -50]), y: useTransform(mouseYSpring, [-0.5, 0.5], [50, -50]) }}
                className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/15 rounded-full blur-[120px] -z-10" 
            />

            <div className="container mx-auto">
                <motion.div 
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ transform: "translateZ(100px)" }}
                        className="glass px-6 py-2 rounded-full text-primary font-bold uppercase tracking-[4px] mb-8 text-sm"
                    >
                        Welcome to my universe
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ transform: "translateZ(80px)" }}
                        className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8"
                    >
                        Siri Beesu<span className="text-secondary">.</span>
                    </motion.h1>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ transform: "translateZ(60px)" }}
                        className="text-2xl md:text-4xl text-text-muted mb-8 font-light tracking-tight"
                    >
                        Full-Stack Developer & <span className="text-white font-medium">Digital Innovator</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ transform: "translateZ(40px)" }}
                        className="text-lg md:text-xl text-text-muted max-w-3xl mb-12 leading-relaxed"
                    >
                        Architecting scalable, user-centric web ecosystems with the MERN stack. 
                        Solving real-world challenges through clean code and modern engineering.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        style={{ transform: "translateZ(20px)" }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <a href="#projects" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a 
                            href="https://github.com/siribeesu" 
                            target="_blank" 
                            rel="noreferrer"
                            className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white/10 active:scale-95 transition-all flex items-center gap-3"
                        >
                            <Github size={22} />
                            GitHub Profile
                        </a>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted uppercase text-[10px] tracking-widest opacity-40">
                <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
                Scroll
            </div>
        </section>
    );
};

export default Hero;
