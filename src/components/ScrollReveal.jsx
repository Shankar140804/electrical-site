import { useEffect } from 'react';

const ScrollReveal = () => {
    useEffect(() => {
        const revealTargets = Array.from(
            document.querySelectorAll('section, .cta-band, .page-header .container')
        );

        if (!revealTargets.length) {
            return undefined;
        }

        revealTargets.forEach((element) => {
            element.classList.add('reveal-in');
        });

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.12,
            }
        );

        revealTargets.forEach((element) => observer.observe(element));

        return () => {
            revealTargets.forEach((element) => observer.unobserve(element));
            observer.disconnect();
        };
    }, []);

    return null;
};

export default ScrollReveal;
