import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Sparkles, Star, GraduationCap } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-primary to-secondary bg-clip-text text-transparent inline-block"
                    >
                        Honors & Scholarships
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-gradient-to-r from-amber-400 to-primary mx-auto rounded-full mb-4"
                    />
                    <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base">
                        Prestigious foundation recognition and academic excellence awards.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass p-8 md:p-12 rounded-3xl border border-amber-500/30 hover:border-amber-400/60 transition-all relative overflow-hidden group shadow-[0_0_40px_rgba(245,158,11,0.1)]"
                    >
                        {/* Background Spotlight Glow */}
                        <div className="absolute -right-16 -top-16 w-60 h-60 bg-gradient-to-br from-amber-500/25 to-primary/20 rounded-full blur-3xl group-hover:scale-125 transition-all duration-500" />
                        
                        <div className="relative z-10">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles className="w-8 h-8" />
                                </div>
                                <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Prestigious Scholar
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                Scholar of Infosys Foundation
                            </h3>

                            <h4 className="text-lg font-semibold text-secondary mb-4">
                                Infosys Foundation • STEM Stars Program
                            </h4>

                            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
                                Awarded the prestigious Infosys Foundation Scholarship in recognition of outstanding academic performance, leadership, and high potential in Computer Science & Engineering.
                            </p>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Selected for national STEM excellence and engineering merit",
                                    "Recognized by Infosys Foundation for academic distinction",
                                    "Empowered to advance scalable software engineering and research"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm text-text-muted">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {["Infosys Foundation", "STEM Scholar", "Academic Excellence", "Computer Science"].map((tag, tIdx) => (
                                    <span 
                                        key={tIdx}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-text-muted"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
