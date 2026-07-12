import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { companyMission, companyVision, countryPills, companyTagline } from '../data/siteContent';
import { founderMessage, coreValues, companyTimeline, certifications } from '../data/extendedContent';
import { softwareServices } from '../data/softwareServices';

const softwareOrder = ['etap', 'psse', 'pscad', 'powerfactory', 'homerpro'];
const softwareCards = softwareOrder.map((key) => softwareServices[key]);

const About = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>About Us</span>
                </div>
                <h1>About Greenvolts</h1>
                <p className="page-tagline">{companyTagline}</p>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '680px' }}>
                    Independent electrical engineering specialists delivering software-led studies, compliance support, and technical clarity for complex power projects.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-image-wrap">
                        <img src={heroImg} alt="Electrical engineering consultancy team" />
                        <div className="intro-badge">
                            <div className="badge-number">Story</div>
                            <div className="badge-label">Built around real project delivery</div>
                        </div>
                    </div>
                    <div className="intro-content">
                        <span className="intro-tag">Company Story</span>
                        <h2>A practical consultancy for technical projects that cannot afford guesswork</h2>
                        <p>
                            Greenvolts supports clients who need robust power system analysis, compliant engineering studies, and documentation that stands up to scrutiny from utilities, contractors, and project stakeholders.
                        </p>
                        <p>
                            Our approach is straightforward: combine the right software, the right technical method, and clear communication so every study results in actionable engineering advice.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <div className="detail-columns">
                    <article className="detail-column-card">
                        <span className="section-label">Founder Message</span>
                        <h3 style={{ marginBottom: '12px' }}>Why Greenvolts exists</h3>
                        <p className="service-detail-copy">{founderMessage}</p>
                    </article>
                    <article className="detail-column-card">
                        <span className="section-label">Core Values</span>
                        <ul className="feat-list">
                            {coreValues.map((value) => (
                                <li className="feat-item" key={value.title}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {value.title}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <div className="detail-columns">
                    <article className="detail-column-card">
                        <span className="section-label">Mission</span>
                        <h3 style={{ marginBottom: '12px' }}>Our mission</h3>
                        <p className="service-detail-copy">{companyMission}</p>
                    </article>
                    <article className="detail-column-card">
                        <span className="section-label">Vision</span>
                        <h3 style={{ marginBottom: '12px' }}>Our vision</h3>
                        <p className="service-detail-copy">{companyVision}</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Company Timeline"
                    title="How the consultancy has grown"
                    subtitle="A short timeline of the capability expansion behind the client-facing work."
                />
                <div className="timeline-grid">
                    {companyTimeline.map((step) => (
                        <article className="timeline-card" key={step.year}>
                            <div className="timeline-year">{step.year}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Why Choose Greenvolts"
                    title="What clients value most"
                    subtitle="We keep the process technical, responsive, and easy to follow so projects move forward with confidence."
                />
                <div className="services-home-grid services-home-grid--featured">
                    {[
                        'Senior engineering oversight on every study package',
                        'Fast, clear feedback for design and approvals teams',
                        'Engineering outputs aligned to utility and client expectations',
                        'Support across concept, detailed design, and commissioning',
                    ].map((item) => (
                        <div className="service-card-home" key={item}>
                            <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <h3 className="svc-title">{item}</h3>
                            <p className="svc-desc">Built into our workflow so the technical work is always easy to use on the project team side.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <SectionHeader
                    label="Certifications"
                    title="Standards and working practices"
                    subtitle="The team works to a quality-first process and produces outputs suitable for technical review and approval."
                />
                <div className="cert-strip">
                    {certifications.map((item) => (
                        <div className="cert-tile" key={item}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <SectionHeader
                    label="Countries Served"
                    title="Local delivery, international reach"
                    subtitle="We support projects in the UK and beyond, working across multiple regions where clear electrical engineering support is needed."
                />
                <div className="industries-pills">
                    {countryPills.map((country) => (
                        <span key={country} className="industry-pill">{country}</span>
                    ))}
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Software Expertise"
                    title="The platforms behind our engineering studies"
                    subtitle="The same software stack used in the service pages powers the study outputs we deliver for clients."
                />
                <div className="services-overview-grid">
                    {softwareCards.map((service) => (
                        <article className="service-overview-card" key={service.id}>
                            <div className="service-overview-image-wrap">
                                <img src={heroImg} alt={service.name} />
                            </div>
                            <div className="service-overview-body">
                                <h3>{service.name}</h3>
                                <p>{service.shortDescription}</p>
                                <Link to={`/services/${service.id}`} className="btn btn-primary">Explore the Detail Page</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <div className="cta-band">
            <div className="container">
                <div>
                    <h3>Need an engineering partner for your next project?</h3>
                    <p>Let’s discuss the studies, standards, and deliverables you need so we can shape the right support package.</p>
                </div>
                <Link to="/contact" className="btn-white">Contact Greenvolts →</Link>
            </div>
        </div>
    </>
);

export default About;
