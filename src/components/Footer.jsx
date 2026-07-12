import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="logo" style={{ color: 'white', marginBottom: '14px', display: 'inline-flex' }}>
                        <div className="logo-icon">
                            <svg className="logo-svg" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="#3b82f6" fillOpacity="0.18" />
                                <path d="M18 4L7 18h9l-2 10 14-16h-9l3-8z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" strokeLinejoin="round" />
                            </svg>
                        </div>
                        Greenvolts
                    </Link>
                    <p>Independent electrical engineering consultants specialising in power system analysis, software-led studies, and grid compliance for energy and industrial clients.</p>
                    <p style={{ marginTop: '10px' }}>Registered in England &amp; Wales</p>
                </div>

                <div className="footer-col">
                    <h5>Navigation</h5>
                    <nav className="footer-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/sectors">Sectors</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

                <div className="footer-col">
                    <h5>Our Services</h5>
                    <nav className="footer-nav">
                        <Link to="/services">Power System Studies</Link>
                        <Link to="/services">HV/LV Electrical Design</Link>
                        <Link to="/services">Earthing &amp; Lightning</Link>
                        <Link to="/services">Grid Code Compliance</Link>
                        <Link to="/services">Arc Flash Studies</Link>
                        <Link to="/admin">Admin Login</Link>
                    </nav>
                </div>

                <div className="footer-col">
                    <h5>Get In Touch</h5>
                    <div className="footer-contacts">
                        <div className="footer-contact-row">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>Innovation House, Technology Park<br />Birmingham, B15 2GR, UK</span>
                        </div>
                        <div className="footer-contact-row">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>+44 (0) 1234 567890</span>
                        </div>
                        <div className="footer-contact-row">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            <span>info@voltgrid-engineering.co.uk</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>Copyright {new Date().getFullYear()} Greenvolts Engineering Ltd. All rights reserved.</span>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
