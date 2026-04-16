import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const contactData = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email Me",
            value: "siribeesu07@gmail.com",
            href: "mailto:siribeesu07@gmail.com",
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Hyderabad, Telangana",
            color: "bg-orange-500/10 text-orange-500"
        }
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary mx-auto rounded-full"
                    />
                    <p className="text-text-muted mt-6 max-w-xl mx-auto">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {contactData.map((item, i) => (
                            <div 
                                key={i}
                                className="group p-6 bg-bg-card/40 border border-white/5 rounded-2xl hover:border-primary/30 transition-all flex items-center gap-6"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-lg font-semibold">{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="pt-8">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-6">Social Profiles</h4>
                            <div className="flex gap-4">
                                <a 
                                    href="https://linkedin.com/in/siri-beesu-96a6b730a" 
                                    target="_blank" 
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
                                >
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a 
                                    href="https://github.com/siribeesu" 
                                    target="_blank" 
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
                                >
                                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form className="p-8 md:p-10 bg-bg-card/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Subject</label>
                                <input 
                                    type="text" 
                                    placeholder="Project Collaboration"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Message</label>
                                <textarea 
                                    rows="5" 
                                    placeholder="Tell me more about your requirements..."
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20 resize-none"
                                />
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
