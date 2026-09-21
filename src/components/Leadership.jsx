import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Code2, CheckCircle2 } from 'lucide-react';

const Leadership = () => {
    const roles = [
        {
            role: "Event Management Team",
            organization: "AWS Student Community / AWS Cloud Club",
            badge: "Event & Operations",
            description: "Planning and organizing cloud workshops, hackathons, speaker sessions, and student engagements for the AWS community.",
            highlights: [
                "Coordinating technical workshops and developer events",
                "Managing event logistics and speaker coordination",
                "Engaging with student developers and cloud enthusiasts"
            ],
            skills: ["Event Management", "AWS Community", "Team Leadership", "Operations"],
            gradient: "from-amber-500/20 to-yellow-500/20",
            icon: <Users className="w-6 h-6 text-amber-400" />
        },
        {
            role: "Documentation Team",
            organization: "E-Cell (Entrepreneurship Cell)",
            badge: "Content & Strategy",
            description: "Leading documentation, event reports, official briefs, and publication materials for entrepreneurship summits and startup challenges.",
            highlights: [
                "Drafting official event reports and technical summaries",
                "Maintaining structured archival records for E-Cell initiatives",
                "Collaborating with marketing and design teams on outreach content"
            ],
            skills: ["Documentation", "Technical Writing", "Content Strategy", "E-Cell Operations"],
            gradient: "from-purple-500/20 to-indigo-500/20",
            icon: <FileText className="w-6 h-6 text-purple-400" />
        },
        {
            role: "Technical Team Member",
            organization: "DevUp Society",
            badge: "Technical Community",
            description: "Driving developer peer-learning, open-source discussions, coding bootcamps, and technical mentoring across collegiate developer cohorts.",
            highlights: [
                "Contributing to community coding bootcamps and workshops",
                "Assisting junior developers with modern web fundamentals",
                "Participating in collaborative team projects and code reviews"
            ],
            skills: ["Developer Community", "Problem Solving", "Collaboration", "Git & GitHub"],
            gradient: "from-emerald-500/20 to-cyan-500/20",
            icon: <Code2 className="w-6 h-6 text-emerald-400" />
        }
    ];

    return (
        <section id="leadership" className="py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                    >
                        Leadership & Community
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-primary mx-auto rounded-full mb-4"
                    />
                    <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base">
                        Active contributions to technical communities, entrepreneurship cells, and student leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {roles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                        >
                            {/* Ambient Top Glow */}
                            <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl group-hover:scale-125 transition-all duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                                    {item.role}
                                </h3>

                                <h4 className="text-xs font-semibold text-secondary mb-4">
                                    {item.organization}
                                </h4>

                                <p className="text-xs text-text-muted leading-relaxed mb-5">
                                    {item.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {item.highlights.map((point, pIdx) => (
                                        <div key={pIdx} className="flex items-start gap-2 text-[11px] text-text-muted">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-white/5">
                                <div className="flex flex-wrap gap-1.5">
                                    {item.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx}
                                            className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-medium text-text-muted group-hover:border-primary/20 transition-all"
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

export default Leadership;
