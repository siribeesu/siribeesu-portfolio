import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Sparkles = () => {
    const sparkles = useMemo(() => {
        return Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 5,
            drift: Math.random() * 40 - 20, // Drift left/right
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{ 
                        opacity: [0, 0.7, 0.9, 0.7, 0],
                        scale: [0, 1, 1.5, 1, 0],
                        y: [0, -100], // Upward drift
                        x: [0, sparkle.drift],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: sparkle.top,
                        left: sparkle.left,
                        width: sparkle.size,
                        height: sparkle.size,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        filter: 'blur(0.5px)',
                        boxShadow: `0 0 8px white, 0 0 15px var(--primary)`,
                    }}
                />
            ))}
        </div>
    );
};

export default Sparkles;
