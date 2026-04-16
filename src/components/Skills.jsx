import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ cat, i }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
                z: 50, 
                rotateX: 5, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-bg-card/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all group"
        >
            <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent uppercase tracking-wider`} style={{ transform: "translateZ(30px)" }}>
                {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3" style={{ transform: "translateZ(20px)" }}>
                {cat.skills.map((skill, j) => (
                    <span 
                        key={j}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "React.js", "JavaScript"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "Python", "C/C++", "Firebase"],
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Database",
            skills: ["MongoDB", "MySQL", "PostgreSQL"],
            color: "from-green-500 to-emerald-400"
        },
        {
            title: "Tools",
            skills: ["Git & GitHub", "VS Code", "MS Office"],
            color: "from-orange-500 to-red-400"
        }
    ];

    return (
        <section id="skills" style={{ perspective: "1000px" }}>
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-4">Technical Mastery</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, i) => (
                        <SkillCategory key={i} cat={cat} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
