import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'py-4 glass-dark' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-8 flex justify-between items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="relative">
                        <div className="text-4xl font-black italic tracking-tighter text-white group-hover:text-primary transition-colors duration-500">
                            S<span className="text-primary group-hover:text-secondary transition-colors duration-500">B</span>
                        </div>
                        <motion.div 
                            layoutId="logo-underline"
                            className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                    </div>
                    <div className="h-8 w-[1px] bg-white/10 hidden sm:block mx-2" />
                    <div className="hidden sm:block">
                        <div className="text-sm font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">SIRI BEESU</div>
                    </div>
                </motion.div>

                <div className="hidden md:flex items-center gap-12">
                    <ul className="flex gap-10 list-none">
                        {navLinks.map((link, i) => (
                            <motion.li 
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <a 
                                    href={link.href}
                                    className="text-text-muted font-medium hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    
                    <motion.a 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        href="https://github.com/siribeesu"
                        target="_blank"
                        className="glass px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-primary transition-all"
                    >
                        <Github size={18} />
                        <span className="text-sm font-bold">GitHub</span>
                    </motion.a>
                </div>

                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-dark overflow-hidden"
                    >
                        <ul className="flex flex-col items-center py-10 gap-8 list-none">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-xl text-text-muted hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
