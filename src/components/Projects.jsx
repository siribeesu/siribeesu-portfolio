import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Activity, ShoppingCart, ExternalLink, Puzzle } from 'lucide-react';

const ProjectCard = ({ project, i }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass group rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all flex flex-col relative"
        >
            <div className="h-[240px] relative overflow-hidden" style={{ transform: "translateZ(50px)" }}>
                {project.image ? (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl`}>
                        <div className="group-hover:scale-125 transition-transform duration-500 opacity-50">
                            {project.icon}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                
                <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    {project.icon} {project.status}
                </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-muted text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-text-muted">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center gap-6 mt-auto">
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-text-muted font-bold hover:text-white transition-all text-[10px] uppercase tracking-wider"
                    >
                        <Github size={14} /> Source
                    </a>
                    <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:scale-110 transition-all text-[10px] uppercase tracking-wider"
                    >
                        <ExternalLink size={14} /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

const Projects = () => {
    const projects = [
        {
            title: "Healthcare Grievance System",
            desc: "A mission-critical platform for anonymous & identified patient feedback using real-time sync.",
            tags: ["React", "Node.js", "Firebase"],
            github: "https://github.com/siribeesu/voiceofhope",
            demo: "https://voiceofhope-n8al.vercel.app/", 
            image: "/Screenshot 2026-04-14 205937.png",
            icon: <Activity className="w-6 h-6" />,
            status: "Full Stack"
        },
        {
            title: "DealDrop E-Commerce",
            desc: "High-performance MERN marketplace with secure authentication and dynamic cart logic.",
            tags: ["MongoDB", "Express", "React", "Node"],
            github: "https://github.com/siribeesu/dealdrop",
            demo: "https://dealdrop-lj35.onrender.com/", 
            image: "/Screenshot 2026-04-14 210143.png",
            icon: <ShoppingCart className="w-6 h-6" />,
            status: "MERN Stack"
        },
        {
            title: "SkillMatch AI",
            desc: "A powerful Chrome Extension that analyzes job boards in real-time to match vacancies with your skills using NLP.",
            tags: ["Manifest V3", "Javascript", "NLP", "OpenAI"],
            github: "https://github.com/siribeesu/skillmatch-ai",
            demo: "https://github.com/siribeesu/skillmatch-ai", 
            image: null, 
            gradient: "from-blue-500/20 to-indigo-500/20",
            icon: <Puzzle className="w-6 h-6" />,
            status: "Chrome Extension"
        }
    ];

    return (
        <section id="projects" className="bg-[#0b1120] relative py-24" style={{ perspective: "1000px" }}>
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold mb-6"
                    >
                        Featured Work
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
