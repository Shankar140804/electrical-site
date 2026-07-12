import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { careerRoles } from '../data/extendedContent';

const Careers = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Careers</span>
                </div>
                <h1>Careers</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '620px' }}>
                    A clean careers section for future hiring and application workflows.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Open Positions"
                    title="Join a growing engineering consultancy"
                    subtitle="The careers page is ready for future jobs, application forms, and resume uploads."
                />
                <div className="careers-grid">
                    {careerRoles.map((role) => (
                        <article className="career-card" key={role.title}>
                            <div className="career-card-top">
                                <span className="career-type">{role.type}</span>
                                <span className="career-location">{role.location}</span>
                            </div>
                            <h3>{role.title}</h3>
                            <p>{role.summary}</p>
                            <div className="career-meta">{role.experience}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content">
                        <span className="intro-tag">Apply Job</span>
                        <h2>Future-ready for application tracking and resume upload</h2>
                        <p>
                            When the backend is added, this page can connect directly to job applications, file uploads, and candidate management.
                        </p>
                        <div style={{ marginTop: '28px' }}>
                            <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
                        </div>
                    </div>
                    <div className="intro-image-wrap">
                        <img src={heroImg} alt="Careers illustration" />
                        <div className="intro-badge">
                            <div className="badge-number">HR</div>
                            <div className="badge-label">Hiring pipeline ready</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Careers;
