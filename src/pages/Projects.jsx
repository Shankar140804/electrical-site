import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { projectCards } from '../data/extendedContent';

const Projects = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Projects</span>
                </div>
                <h1>Projects</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '650px' }}>
                    A snapshot of completed and active engineering assignments across utilities, industry, and renewables.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Completed Projects"
                    title="Delivered work that shows the range of our support"
                    subtitle="Use these examples as a starting point for the type of project information the client-facing site can present."
                />
                <div className="projects-grid">
                    {projectCards.map((project) => (
                        <article className="project-card project-card--large" key={project.title}>
                            <div className="project-image-wrap">
                                <img src={heroImg} alt={project.title} />
                            </div>
                            <div className="project-card-top">
                                <span className="project-category">{project.category}</span>
                                <span className={`project-status ${project.status === 'Completed' ? 'is-complete' : 'is-active'}`}>{project.status}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-meta">{project.location}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content">
                        <span className="intro-tag">Project Details</span>
                        <h2>Each project can be expanded into a full case study later</h2>
                        <p>
                            The site structure now gives us a clean place to add client, scope, challenge, solution, and outcome details without disturbing the core design.
                        </p>
                        <div style={{ marginTop: '28px' }}>
                            <Link to="/contact" className="btn btn-primary">Discuss a Project</Link>
                        </div>
                    </div>
                    <div className="intro-image-wrap">
                        <img src={heroImg} alt="Project gallery teaser" />
                        <div className="intro-badge">
                            <div className="badge-number">04</div>
                            <div className="badge-label">Current examples</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Projects;
