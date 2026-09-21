import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Startups India",
            type: "Internship",
            description: "Developed and scaled end-to-end full stack web applications. Built modular frontend components, optimized data fetching, and engineered robust RESTful backend endpoints.",
            highlights: [
                "Full-stack feature engineering & API integrations",
                "Frontend state management and responsive UI components",
                "Performance optimization and cross-platform compatibility"
            ],
            skills: ["React.js", "Node.js", "REST APIs", "Express.js", "MongoDB"],
            gradient: "from-blue-500/20 to-cyan-500/20",
            icon: <Building2 className="w-6 h-6 text-cyan-400" />
        },
        {
            role: "Full Stack Developer Intern",
            company: "InAmigos Foundation",
            type: "Internship",
            description: "Collaborated in creating responsive web interfaces and managing database models for digital community platforms with clean code standards.",
            highlights: [
                "Developed interactive UI components with modern JavaScript & React",
                "Connected MongoDB schemas with Express backend services",
                "Collaborated in sprint planning and code reviews"
            ],
            skills: ["Full Stack Dev", "JavaScript", "React.js", "MongoDB", "Express.js"],
            gradient: "from-purple-500/20 to-pink-500/20",
            icon: <Code2 className="w-6 h-6 text-secondary" />
        },
        {
            role: "Full Stack Developer Intern",
            company: "PSS Automate Private Limited",
            type: "Internship",
            description: "Built scalable web tools and software automation solutions. Developed responsive client portals and integrated dynamic database workflows.",
            highlights: [
                "Engineered scalable web solutions and automated workflows",
                "Crafted intuitive user interfaces and backend logic",
                "Maintained clean documentation and version control workflows"
            ],
            skills: ["Full Stack Engineering", "Python", "Web Automation", "REST APIs"],
            gradient: "from-emerald-500/20 to-teal-500/20",
            icon: <Briefcase className="w-6 h-6 text-emerald-400" />
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-bg-card/20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                    >
                        Work Experience & Internships
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-primary mx-auto rounded-full mb-4"
                    />
                    <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base">
                        Hands-on professional software engineering experience across startups and tech companies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                        >
                            {/* Ambient Top Glow */}
                            <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${exp.gradient} rounded-full blur-2xl group-hover:scale-125 transition-all duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {exp.icon}
                                    </div>
                                    <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                        {exp.type}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                                    {exp.role}
                                </h3>

                                <h4 className="text-base font-semibold text-secondary mb-4">
                                    {exp.company}
                                </h4>

                                <p className="text-sm text-text-muted leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {exp.highlights.map((point, pIdx) => (
                                        <div key={pIdx} className="flex items-start gap-2 text-xs text-text-muted">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx}
                                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-text-muted group-hover:border-primary/20 transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
