import React, { useEffect, useState, useRef } from 'react';

const StatsCounter = ({ target, label, unit = '' }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const animatedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !animatedRef.current) {
                animatedRef.current = true;
                const duration = 1800;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, duration / steps);
            }
        }, { threshold: 0.4 });

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div className="stat-item" ref={elementRef}>
            <div className="stat-number">
                {count}<span>{unit}</span>
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default StatsCounter;
