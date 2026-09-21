import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: "Scholar of Infosys Foundation",
            issuer: "Infosys Foundation",
            subtitle: "Prestigious STEM Stars / Scholarship for academic & engineering excellence",
            date: "Honors & Scholarship",
            badge: "Prestigious Scholar",
            skills: ["Academic Excellence", "STEM Innovation", "Software Engineering"],
            gradient: "from-amber-500/20 to-orange-500/20",
            borderGlow: "group-hover:border-amber-500/50",
            icon: <Sparkles className="w-7 h-7 text-amber-400" />
        },
        {
            title: "National Level AI / ML Certification",
            issuer: "Indian Institute of Technology (IIT), Kharagpur",
            subtitle: "Element Soft & IIT Kharagpur National Level Artificial Intelligence Program",
            date: "National Level Certification",
            badge: "AI & Machine Learning",
            skills: ["Artificial Intelligence", "Machine Learning", "Data Analytics"],
            gradient: "from-blue-600/20 to-cyan-500/20",
            borderGlow: "group-hover:border-cyan-500/50",
            icon: <Award className="w-7 h-7 text-cyan-400" />
        },
        {
            title: "Python (Basic) Skill Certification",
            issuer: "HackerRank",
            subtitle: "HackerRank Certified Problem Solver in Python Programming",
            date: "Certified Dec 2023",
            badge: "Problem Solving",
            skills: ["Python Programming", "Data Structures", "Algorithms"],
            gradient: "from-purple-600/20 to-indigo-500/20",
            borderGlow: "group-hover:border-purple-500/50",
            icon: <Award className="w-7 h-7 text-primary" />
        }
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                    >
                        Honors, Scholarships & Certifications
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-primary mx-auto rounded-full mb-4"
                    />
                    <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base">
                        Recognized honors, foundation scholarships, and specialized technical certifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`glass p-8 rounded-3xl border border-white/10 ${cert.borderGlow} transition-all relative overflow-hidden group flex flex-col justify-between`}
                        >
                            {/* Glow gradient behind */}
                            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${cert.gradient} rounded-full blur-2xl group-hover:scale-150 transition-all duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {cert.icon}
                                    </div>
                                    <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                                        {cert.badge}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-sm font-semibold text-secondary mb-1">
                                    {cert.issuer}
                                </p>

                                <p className="text-xs text-text-muted mb-4">
                                    {cert.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-text-muted">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
                                <span className="flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-primary" /> Verified Credential
                                </span>
                                <span className="text-[11px] text-text-muted/70">{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
