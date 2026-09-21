import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Star, Award, ShieldCheck, Trophy } from 'lucide-react';

const Certifications = () => {
    const achievements = [
        {
            title: "Scholar of Reliance Foundation",
            issuer: "Reliance Foundation",
            program: "Undergraduate Scholarship Program",
            year: "2024 - 2028",
            scholarId: "RFSCH240900462787",
            badge: "Reliance Scholar",
            description: "Awarded the highly competitive Reliance Foundation Undergraduate Scholarship recognizing exceptional academic merit, leadership qualities, and dedication to STEM excellence.",
            points: [
                "Scholar ID: RFSCH240900462787",
                "Recipient through a competitive entrance examination",
                "Recognized for outstanding academic performance & leadership"
            ],
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
            scholarId: null,
            badge: "Infosys Scholar",
            description: "Awarded the prestigious Infosys Foundation Scholarship in recognition of academic distinction, engineering aptitude, and dedication to building scalable technology.",
            points: [
                "Awarded for national STEM excellence and engineering merit",
                "Recognized by Infosys Foundation for academic distinction",
                "Empowered to advance scalable software engineering and research"
            ],
            borderColor: "border-primary/30 hover:border-primary/70",
            badgeColor: "text-primary border-primary/30 bg-primary/10",
            iconColor: "text-primary bg-primary/10 border-primary/20",
            glowColor: "from-primary/20 to-secondary/10",
            icon: <Award className="w-7 h-7" />
        },
        {
            title: "Academic Top Ranker & Topper",
            issuer: "Board of Intermediate & High School",
            program: "State & Institutional Distinction",
            year: "2021 - 2024",
            scholarId: null,
            badge: "Academic Topper",
            description: "Consistent high-ranking performance throughout schooling and pre-university education with top state and institutional ranks.",
            points: [
                "Secured State 4th Rank in Class 11 and was College Topper",
                "School Topper in Class 10 (CGPA: 9.8 / 10.0)",
                "Consistently ranked among top performers throughout academic career"
            ],
            borderColor: "border-cyan-500/30 hover:border-cyan-400/70",
            badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
            iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
            glowColor: "from-cyan-500/20 to-blue-500/10",
            icon: <Trophy className="w-7 h-7" />
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
                        Prestigious foundation recognition, scholarships, and top academic ranks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                                    <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-amber-500/30 rounded-xl text-xs text-amber-300 font-mono font-semibold">
                                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                                        <span>Scholar ID: <strong>{item.scholarId}</strong></span>
                                    </div>
                                )}

                                <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <div className="space-y-2.5">
                                    {item.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs text-text-muted">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </div>
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

export default Certifications;
