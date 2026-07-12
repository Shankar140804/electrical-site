import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Run once on mount to handle refreshed state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container">
                    <div className="top-info">
                        <span>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            +91 99944 87395
                        </span>
                        <span>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            energreenvolt@gmail.com
                        </span>
                        <span>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Mon - Fri: 08:30 - 17:30
                        </span>
                    </div>
                    <div className="top-social">
                        <a href="#" aria-label="LinkedIn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="main-navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <svg className="logo-svg" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="#3b82f6" fillOpacity="0.18"/>
                                <path d="M18 4L7 18h9l-2 10 14-16h-9l3-8z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        Greenvolts
                    </Link>

                    <nav className={`nav-menu${menuOpen ? ' active' : ''}`}>
                        {['/', '/about', '/services', '/sectors', '/projects', '/contact'].map((path, i) => {
                            const labels = ['Home', 'About', 'Services', 'Sectors', 'Projects', 'Contact'];
                            return (
                                <NavLink
                                    key={path}
                                    to={path}
                                    end={path === '/'}
                                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {labels[i]}
                                </NavLink>
                            );
                        })}
                        <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
                            Get a Quote
                        </Link>
                    </nav>

                    <button
                        className={`menu-toggle${menuOpen ? ' active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span/><span/><span/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
