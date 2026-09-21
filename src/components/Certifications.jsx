import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
    const achievements = [
        {
            title: "Scholar of Reliance Foundation",
            issuer: "Reliance Foundation",
            program: "Undergraduate Scholarship Program",
            year: "2024 - 2028",
            scholarId: "RFSCH240900462787",
            badge: "Reliance Scholar",
            borderColor: "border-amber-500/30 hover:border-amber-400/70",
            badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
            iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
            glowColor: "from-amber-500/20 to-orange-500/10",
            icon: <Sparkles className="w-7 h-7" />
        },
        {
            title: "Scholar of Infosys Foundation",
            issuer: "Infosys Foundation",
            program: "STEM Stars Scholarship Program",
            year: "2024 - 2028",
            scholarId: "10603043B4S24553",
            badge: "Infosys Scholar",
            borderColor: "border-primary/30 hover:border-primary/70",
            badgeColor: "text-primary border-primary/30 bg-primary/10",
            iconColor: "text-primary bg-primary/10 border-primary/20",
            glowColor: "from-primary/20 to-secondary/10",
            icon: <Award className="w-7 h-7" />
        }
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/5 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-primary to-secondary bg-clip-text text-transparent inline-block"
                    >
                        Honors & Achievements
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-gradient-to-r from-amber-400 to-primary mx-auto rounded-full mb-4"
                    />
                    <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base">
                        Prestigious foundation recognition and undergraduate STEM scholarships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ y: -6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`glass p-8 rounded-3xl border ${item.borderColor} transition-all relative overflow-hidden group flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.2)]`}
                        >
                            {/* Background Spotlight Glow */}
                            <div className={`absolute -right-16 -top-16 w-60 h-60 bg-gradient-to-br ${item.glowColor} rounded-full blur-3xl group-hover:scale-125 transition-all duration-500`} />
                            
                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${item.iconColor} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-3.5 py-1 glass rounded-full text-xs font-bold uppercase tracking-wider ${item.badgeColor} border flex items-center gap-1.5`}>
                                            <Star className="w-3.5 h-3.5 fill-current" /> {item.badge}
                                        </span>
                                        <span className="px-3 py-1 glass rounded-full text-xs font-bold text-text-muted border border-white/10">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                                    {item.title}
                                </h3>

                                <h4 className="text-sm font-semibold text-secondary mb-4">
                                    {item.issuer} • {item.program}
                                </h4>

                                {item.scholarId && (
                                    <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white/90 font-mono font-semibold">
                                        <ShieldCheck className={`w-4 h-4 ${item.badgeColor.split(' ')[0]}`} />
                                        <span>Scholar ID: <strong className={item.badgeColor.split(' ')[0]}>{item.scholarId}</strong></span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
