import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { industryCards } from '../data/siteContent';

const Sectors = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Sectors</span>
                </div>
                <h1>Sectors We Serve</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '640px' }}>
                    Deep sector knowledge helps us shape better study assumptions, better reporting, and more useful project recommendations.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Industry Focus"
                    title="Engineering support tuned to your sector"
                    subtitle="We work across utility, industrial, infrastructure, and renewable environments where power-system decisions have real operational impact."
                />

                <div className="sectors-page-grid">
                    {industryCards.map((sector) => (
                        <div className="sector-card-page" key={sector.name}>
                            <div className="sector-img-wrap">
                                <img src={heroImg} alt={sector.name} />
                            </div>
                            <div className="sector-body">
                                <h3>{sector.name}</h3>
                                <p>{sector.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content">
                        <span className="intro-tag">Sector Knowledge</span>
                        <h2>Better sector understanding leads to better engineering outputs</h2>
                        <p>
                            Generic recommendations rarely hold up in complex real-world projects. By understanding your sector, we can select the right studies, apply the right assumptions, and produce reports your stakeholders can act on quickly.
                        </p>
                        <div style={{ marginTop: '28px' }}>
                            <Link to="/contact" className="btn btn-primary">Discuss Your Project</Link>
                        </div>
                    </div>
                    <div className="intro-image-wrap">
                        <img src={heroImg} alt="Sector focused engineering support" />
                        <div className="intro-badge">
                            <div className="badge-number">7</div>
                            <div className="badge-label">Core sectors</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="cta-band">
            <div className="container">
                <div>
                    <h3>Need support for a specialist sector project?</h3>
                    <p>Tell us the industry, site type, and deliverables you need, and we’ll shape a study scope that fits.</p>
                </div>
                <Link to="/contact" className="btn-white">Get in Touch →</Link>
            </div>
        </div>
    </>
);

export default Sectors;
