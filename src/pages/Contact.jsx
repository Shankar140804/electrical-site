import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';
import { contactFaqs } from '../data/siteContent';

const Contact = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Contact</span>
                </div>
                <h1>Get In Touch</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '620px' }}>
                    Tell us about your project scope and we’ll respond with the most relevant study path, timeline, and next steps.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-panel">
                        <h3>Office Information</h3>
                        <p>Reach out using the details below or submit the form and we’ll route your enquiry to the right engineer.</p>

                        <div className="contact-items">
                            <div className="contact-item">
                                <div className="ci-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="ci-text">
                                    <h4>Office</h4>
                                    <p>Innovation House, Technology Park<br />Birmingham, B15 2GR<br />United Kingdom</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="ci-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="ci-text">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919994487395">+91 99944 87395</a></p>
                                    <p style={{ marginTop: '4px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>Monday to Friday, 08:30 - 17:30</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="ci-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="ci-text">
                                    <h4>Email</h4>
                                    <p><a href="mailto:energreenvolt@gmail.com">energreenvolt@gmail.com</a></p>
                                    <p style={{ marginTop: '4px' }}><a href="mailto:projects@voltgrid-engineering.co.uk">projects@voltgrid-engineering.co.uk</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="ci-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="ci-text">
                                    <h4>Working Hours</h4>
                                    <p>Monday - Friday: 08:30 - 17:30</p>
                                    <p>Weekend: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <ContactForm />
                    </div>
                </div>

                <div className="map-area">
                    <div className="map-inner">
                        <div className="map-pin" />
                        <div className="map-text">Greenvolts Engineering Ltd</div>
                        <div className="map-sub">Innovation House, Birmingham, B15 2GR</div>
                        <div className="map-loc-note">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            Central Birmingham office location
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <SectionHeader
                    label="FAQ"
                    title="Frequently asked questions"
                    subtitle="A few quick answers to help you send the right information the first time."
                />
                <div className="faq-grid">
                    {contactFaqs.map((item) => (
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
                    <h3>Ready to start the conversation?</h3>
                    <p>Send your project information today and we will come back with a tailored response and study recommendation.</p>
                </div>
                <Link to="/services" className="btn-white">View Services →</Link>
            </div>
        </div>
    </>
);

export default Contact;
