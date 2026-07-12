import React from 'react';
import { Link } from 'react-router-dom';
import WindmillAnimation from '../components/WindmillAnimation';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import heroImg from '../assets/hero_substation.png';
import { companySnapshot, featuredEngineeringServices, industryCards, companyReasons, companyStats, companyTagline, engineeringProcess } from '../data/siteContent';
import { latestProjects, homeFaqs } from '../data/extendedContent';
import { softwareServices } from '../data/softwareServices';

const softwareOrder = ['etap', 'psse', 'pscad', 'powerfactory', 'homerpro'];

const softwareCards = softwareOrder.map((key) => softwareServices[key]);

const Home = () => (
    <>
        <section className="hero" aria-label="Hero">
            <WindmillAnimation />
            <div className="container">
                <div className="hero-left">
                    <div className="hero-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                        {companyTagline}
                    </div>
                    <h1 className="hero-title">
                        Power Systems
                        <br />
                        <span>Designed to Perform</span>
                    </h1>
                    <p className="hero-desc">
                        Greenvolts delivers specialist electrical studies, software-led analysis, and practical engineering support for utility, renewable, industrial, and critical infrastructure projects.
                    </p>
                    <div className="hero-actions">
                        <Link to="/services" className="btn btn-primary">Explore Services</Link>
                        <Link to="/contact" className="btn btn-outline">Discuss Your Project</Link>
                    </div>
                    <p className="hero-tagline">Power systems consulting for renewable, industrial, and utility projects across India, the UAE, Qatar, Oman, and Guatemala.</p>
                </div>

                <div className="hero-stats-card">
                    {companyStats.map((stat) => (
                        <StatsCounter key={stat.label} target={Number.parseInt(stat.value, 10) || 1} label={stat.label} unit={stat.value.includes('+') ? '+' : ''} />
                    ))}
                </div>
            </div>
        </section>

        <section className="section" aria-label="Company Overview">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-image-wrap">
                        <img src={heroImg} alt="Electrical substation and power network" />
                        <div className="intro-badge">
                            <div className="badge-number">60%</div>
                            <div className="badge-label">Website already built</div>
                        </div>
                    </div>
                    <div className="intro-content">
                        <span className="intro-tag">Company Overview</span>
                        <h2>Technical consultancy with a practical delivery mindset</h2>
                        <p>
                            We support clients who need accurate engineering studies, clear documentation, and dependable technical guidance across the full project lifecycle.
                        </p>
                        <div className="check-list">
                            {companySnapshot.map((item) => (
                                <div className="check-item" key={item.title}>
                                    <div className="check-icon">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p><strong>{item.title}</strong> - {item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '32px' }}>
                            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-alt" aria-label="Software Expertise">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Software Expertise</span>
                    <h2>Core Platforms We Use Every Day</h2>
                    <p className="section-subtitle">
                        These five study environments cover everything from steady-state planning to transient, compliance, and hybrid renewable analysis.
                    </p>
                </div>
                <div className="services-overview-grid">
                    {softwareCards.map((service) => (
                        <article className="service-overview-card" key={service.id}>
                            <div className="service-overview-image-wrap">
                                <img src={heroImg} alt={service.name} />
                            </div>
                            <div className="service-overview-body">
                                <span className="section-label">Engineering Software</span>
                                <h3>{service.name}</h3>
                                <p>{service.shortDescription}</p>
                                <ul className="feat-list">
                                    {service.keyHighlights.slice(0, 2).map((highlight) => (
                                        <li className="feat-item" key={highlight}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={`/services/${service.id}`} className="btn btn-primary">Learn More</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <section className="section" aria-label="Featured Engineering Services">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Engineering Services</span>
                    <h2>Featured Study Packages</h2>
                    <p className="section-subtitle">A concise overview of the engineering services clients most often request alongside software-based analysis.</p>
                </div>
                <div className="services-home-grid services-home-grid--featured">
                    {featuredEngineeringServices.map((service, index) => (
                        <div className="service-card-home" key={service.title}>
                            <span className="svc-num">0{index + 1}</span>
                            <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
                                <path d="M9 12l2 2 4-5" />
                            </svg>
                            <h3 className="svc-title">{service.title}</h3>
                            <p className="svc-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-dark" aria-label="Industries We Serve">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Industries We Serve</span>
                    <h2>Sector-Aware Engineering Support</h2>
                    <p className="section-subtitle">
                        We align technical outputs with the realities of the sector, whether the job is utility-led, client-owned, or contractor-delivered.
                    </p>
                </div>
                <div className="sectors-grid">
                    {industryCards.map((sector) => (
                        <div className="sector-card" key={sector.name}>
                            <div className="sector-icon-wrap">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                    <line x1="12" y1="12" x2="12" y2="16" />
                                    <line x1="10" y1="14" x2="14" y2="14" />
                                </svg>
                            </div>
                            <div className="sector-name">{sector.name}</div>
                            <p className="sector-desc-text">{sector.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section" aria-label="Engineering Process">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Our Engineering Process</span>
                    <h2>Structured delivery from enquiry to completion</h2>
                    <p className="section-subtitle">A clear workflow that keeps the project moving and keeps stakeholders aligned.</p>
                </div>
                <div className="process-steps">
                    {engineeringProcess.map((step, index) => (
                        <div className="process-step" key={step}>
                            <div className="process-step-index">0{index + 1}</div>
                            <div className="process-step-title">{step}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-alt" aria-label="Why Choose Greenvolts">
            <div className="container">
                <div className="why-grid">
                    <div className="why-content">
                        <span className="section-label">Why Choose Greenvolts</span>
                        <h2>Built for serious engineering work</h2>
                        <p className="why-sub">
                            We combine software expertise, study discipline, and clear communication so project teams get engineering outputs they can actually use.
                        </p>
                        <div className="why-points">
                            {companyReasons.map((item, index) => (
                                <div className="why-point" key={item.title}>
                                    <div className="why-num">0{index + 1}</div>
                                    <div className="why-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="why-image-mosaic">
                        <div className="mosaic-img tall">
                            <img src={heroImg} alt="Engineering consultancy work" style={{ height: '100%', minHeight: '220px' }} />
                        </div>
                        <div className="mosaic-img">
                            <div className="mosaic-stat-card">
                                <div className="mosaic-stat-number">ETAP</div>
                                <div className="mosaic-stat-label">steady-state studies</div>
                            </div>
                        </div>
                        <div className="mosaic-img">
                            <div className="mosaic-stat-card mosaic-stat-card--green">
                                <div className="mosaic-stat-number">PSCAD</div>
                                <div className="mosaic-stat-label">EMT and transient analysis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" aria-label="Statistics">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Statistics</span>
                    <h2>Numbers that reflect delivery</h2>
                    <p className="section-subtitle">A quick snapshot of the delivery approach behind the engineering work.</p>
                </div>
                <div className="stats-panel-grid">
                    {companyStats.map((item) => (
                        <div className="stats-panel-card" key={item.label}>
                            <div className="stats-panel-number">{item.value}</div>
                            <div className="stats-panel-label">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Testimonials />

        <section className="section" aria-label="Latest Projects">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">Latest Projects</span>
                    <h2>Recent work and active delivery</h2>
                    <p className="section-subtitle">A quick view of the type of project support we provide across different sectors.</p>
                </div>
                <div className="projects-grid">
                    {latestProjects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-card-top">
                                <span className="project-category">{project.category}</span>
                                <span className={`project-status ${project.status === 'Completed' ? 'is-complete' : 'is-active'}`}>{project.status}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
                            <div className="project-meta">{project.location}</div>
                        </article>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                    <Link to="/projects" className="btn btn-primary">View Projects</Link>
                </div>
            </div>
        </section>

        <section className="section section-alt" aria-label="Home FAQ">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="section-label">FAQ</span>
                    <h2>Questions clients often ask first</h2>
                </div>
                <div className="faq-grid">
                    {homeFaqs.map((item) => (
                        <details className="faq-item" key={item.question}>
                            <summary>{item.question}</summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>

        <div className="cta-band">
            <div className="container">
                <div>
                    <h3>Ready to discuss your project?</h3>
                    <p>Send us your scope and we will help define the right software platform, study package, and next steps.</p>
                </div>
                <Link to="/contact" className="btn-white">Get in Touch →</Link>
            </div>
        </div>
    </>
);

export default Home;
