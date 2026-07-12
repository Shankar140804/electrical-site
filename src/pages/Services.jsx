import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { serviceOverviewCards } from '../data/softwareServices';

const routeById = {
    etap: '/services/etap',
    psse: '/services/psse',
    pscad: '/services/pscad',
    powerfactory: '/services/powerfactory',
    homerpro: '/services/homerpro',
};

const Services = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Services</span>
                </div>
                <h1>Software Expertise Overview</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '680px' }}>
                    Explore the five engineering software platforms we use to deliver power system studies, compliance evidence, and practical design decisions.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Software Services"
                    title="Choose the Right Study Platform"
                    subtitle="Each software package supports a different part of the engineering workflow, from steady-state planning to detailed transient analysis."
                />

                <div className="services-overview-grid">
                    {serviceOverviewCards.map((service, index) => (
                        <article className="service-overview-card" key={service.id}>
                            <div className="service-overview-image-wrap">
                                <img src={heroImg} alt={service.imageAlt} />
                                <span className="service-overview-badge">0{index + 1}</span>
                            </div>
                            <div className="service-overview-body">
                                <span className="section-label">Engineering Software</span>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                                <ul className="feat-list">
                                    {service.keyHighlights.map((highlight) => (
                                        <li className="feat-item" key={highlight}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={routeById[service.id]} className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <div className="cta-band">
            <div className="container">
                <div>
                    <h3>Need a Bespoke Engineering Scope?</h3>
                    <p>
                        We can combine software platforms where needed and tailor the study package to your project, asset, or compliance objective.
                    </p>
                </div>
                <Link to="/contact" className="btn-white">
                    Start a Conversation →
                </Link>
            </div>
        </div>
    </>
);

export default Services;
