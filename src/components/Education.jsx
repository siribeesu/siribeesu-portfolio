import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "B.Tech",
      institution: "Vidya Jyothi Institute of Technology",
      score: "CGPA: 9.1 (Sem 1 & 2)",
      icon: <GraduationCap className="w-6 h-6" />,
      delay: 0.1
    },
    {
      title: "Intermediate (12th)",
      institution: "Telangana Board of Intermediate Education",
      score: "Percentage: 98.1%",
      icon: <School className="w-6 h-6" />,
      delay: 0.2
    },
    {
      title: "SSC (10th)",
      institution: "Sarojini Naidu Memorial High School",
      score: "CGPA: 9.8",
      icon: <BookOpen className="w-6 h-6" />,
      delay: 0.3
    }
  ];

  return (
    <section id="education" className="relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            Education
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-muted mb-4 text-sm leading-relaxed px-4">
                  {item.institution}
                </p>
                
                <div className="mt-auto inline-block py-2 px-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-lg shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  {item.score}
                </div>
              </div>

              {/* Decorative border animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
