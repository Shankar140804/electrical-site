import React, { useState, useEffect, useRef } from 'react';

const testimonialsData = [
    {
        quote: 'Given the tight deadlines and budget restraints, the level of service Greenvolts provided was outstanding. The offshore power system analysis was delivered with exceptional accuracy and professionalism.',
        author: 'J. Morrison',
        role: 'Senior Electrical Engineer - Petrofac Oil & Gas',
    },
    {
        quote: "Greenvolts' earthing modelling work for our BESS project was thorough and technically rigorous. Their team communicated complex findings in a way that was clear and actionable. Highly recommended.",
        author: 'S. Reynolds',
        role: 'Project Director - GreenVolt Energy',
    },
    {
        quote: 'The arc flash study produced by Greenvolts gave us confidence that our facility meets all IEC 62271 standards. Professional, accurate, and delivered ahead of schedule.',
        author: 'D. Okafor',
        role: 'Facilities Manager - DataCore UK',
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    const goTo = (idx) => setCurrent(idx);
    const prev = () => setCurrent((c) => (c - 1 + testimonialsData.length) % testimonialsData.length);
    const next = () => setCurrent((c) => (c + 1) % testimonialsData.length);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${current * 100}%)`;
        }
    }, [current]);

    useEffect(() => {
        intervalRef.current = setInterval(next, 6000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <section className="section section-dark" aria-label="Client Testimonials">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Testimonials</span>
                    <h2>What Our Clients Say</h2>
                    <p className="section-subtitle">Trusted by leading organisations across the energy, infrastructure, and industrial sectors.</p>
                </div>

                <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
                    <div className="carousel-wrapper">
                        <div className="carousel-track" ref={trackRef} style={{ transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)', display: 'flex' }}>
                            {testimonialsData.map((t, i) => (
                                <div className="carousel-slide" key={i}>
                                    <div className="testimonial-card">
                                        <div className="quote-icon">
                                            <svg viewBox="0 0 32 32" fill="currentColor">
                                                <path d="M10 8C6.686 8 4 10.686 4 14s2.686 6 6 6v6l8-8-8-4v4c-1.104 0-2-.896-2-2s.896-2 2-2c2.21 0 4-1.79 4-4S12.21 8 10 8zm16 0c-3.314 0-6 2.686-6 6s2.686 6 6 6v6l-8-8 8-4v4c1.104 0 2-.896 2-2s-.896-2-2-2c-2.21 0-4-1.79-4-4S23.79 8 26 8z" />
                                            </svg>
                                        </div>
                                        <p className="testimonial-quote">"{t.quote}"</p>
                                        <div className="testimonial-author">{t.author}</div>
                                        <div className="testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-btn" onClick={prev} aria-label="Previous">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <button className="carousel-btn" onClick={next} aria-label="Next">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="9 18 15 12 9 6" /></svg>
                        </button>
                    </div>
                </div>

                <div className="carousel-dots">
                    {testimonialsData.map((_, i) => (
                        <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
