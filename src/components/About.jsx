import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }} />
                </div>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    I am a detail-oriented B.Tech student at Vidya Jyothi Institute of Technology with a passion for building scalable, real-world applications. My journey in tech is driven by a desire to solve complex problems through clean code and modern frameworks.
                </p>
            </div>
        </section>
    );
};

export default About;
