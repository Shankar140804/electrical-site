import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';
import { softwareServices } from '../data/softwareServices';

const ServiceDetailPage = ({ serviceKey }) => {
    const service = softwareServices[serviceKey];

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="bc-sep">›</span>
                        <Link to="/services">Services</Link>
                        <span className="bc-sep">›</span>
                        <span>{service.name}</span>
                    </div>
                    <div className="service-hero-banner">
                        <div>
                            <span className="section-label">Software Detail</span>
                            <h1>{service.heroTitle}</h1>
                            <p>
                                {service.shortDescription}
                            </p>
                            <div className="hero-chip-row">
                                {service.keyHighlights.map((item) => (
                                    <span key={item} className="hero-chip">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img src={heroImg} alt={service.name} />
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container service-detail-layout">
                    <div>
                        <span className="section-label">Software Overview</span>
                        <h2>{service.name}</h2>
                        <p className="service-detail-copy">{service.overview}</p>
                    </div>
                    <div className="detail-column-card detail-summary-card">
                        <h3>What this platform helps us do</h3>
                        <ul className="feat-list">
                            {service.keyHighlights.map((item) => (
                                <li className="feat-item" key={item}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Engineering Studies</span>
                        <h2>Detailed Study Scope for {service.name}</h2>
                        <p className="section-subtitle">
                            These are the core study deliverables we can produce within this software environment.
                        </p>
                    </div>
                    <div className="study-grid">
                        {service.engineeringStudies.map((study) => (
                            <article className="study-card study-card--detailed" key={study.name}>
                                <div className="study-dot" />
                                <div>
                                    <h3>{study.name}</h3>
                                    <p>{study.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container detail-columns">
                    <article className="detail-column-card">
                        <span className="section-label">Applications</span>
                        <ul className="feat-list">
                            {service.applications.map((item) => (
                                <li className="feat-item" key={item}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="detail-column-card">
                        <span className="section-label">Benefits</span>
                        <ul className="feat-list">
                            {service.benefits.map((item) => (
                                <li className="feat-item" key={item}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Industries Served</span>
                        <h2>Where We Apply {service.name}</h2>
                    </div>
                    <div className="industries-pills">
                        {service.industries.map((industry) => (
                            <span key={industry} className="industry-pill">{industry}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionHeader
                        label="Frequently Asked Questions"
                        title={`Questions about ${service.name}`}
                        subtitle="These answers help explain how the platform fits into our study workflow."
                    />
                    <div className="faq-grid">
                        {(service.faqs || []).map((item) => (
                            <details className="faq-item" key={item.name}>
                                <summary>{item.name}</summary>
                                <p>{item.description}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Contact Form</span>
                        <h2>Start your {service.name} enquiry</h2>
                        <p className="section-subtitle">Tell us about the project and we’ll come back with a tailored study scope.</p>
                    </div>
                    <div className="service-form-shell">
                        <ContactForm />
                    </div>
                </div>
            </section>

            <div className="cta-band">
                <div className="container">
                    <div>
                        <h3>Need {service.name} Study Support?</h3>
                        <p>Share your project scope and we will prepare a tailored engineering study package and delivery plan.</p>
                    </div>
                    <Link to="/contact" className="btn-white">Talk to an Engineer →</Link>
                </div>
            </div>

            <section className="section" style={{ paddingTop: '56px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Contact Us for {service.name}</Link>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailPage;
