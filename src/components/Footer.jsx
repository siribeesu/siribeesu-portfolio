import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-text-muted">
                <p className="text-sm">
                    © 2026 Siri Beesu. All rights reserved.
                </p>
                <p className="text-xs uppercase tracking-[2px] opacity-30">
                    Hyderabad, India
                </p>
            </div>
        </footer>
    );
};

export default Footer;
