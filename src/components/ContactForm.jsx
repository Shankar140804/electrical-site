import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', service: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = 'Name is required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email is required';
        if (!formData.message.trim()) e.message = 'Please describe your requirements';
        return e;
    };

    const handleChange = (e) => {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 1800));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) return (
        <div style={{ textAlign: 'center', padding: '60px 40px' }}>
            <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 22px'
            }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
            <h3 style={{ color: 'var(--clr-primary)', marginBottom: 10 }}>Thank You!</h3>
            <p style={{ color: 'var(--clr-text-muted)', marginBottom: 28, fontSize: '0.95rem' }}>
                We've received your enquiry and will be in touch within one business day.
            </p>
            <button className="btn btn-outline" onClick={() => { setIsSubmitted(false); setFormData({ name:'',email:'',phone:'',company:'',service:'',message:'' }); }}>
                Send Another Enquiry
            </button>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h3>Send an Enquiry</h3>

            <div className="form-row">
                <div className="form-field">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" className="form-input"
                        placeholder="John Smith" value={formData.name} onChange={handleChange}
                        style={errors.name ? { borderColor: '#ef4444' } : {}} />
                    {errors.name && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.name}</span>}
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" className="form-input"
                        placeholder="j.smith@company.co.uk" value={formData.email} onChange={handleChange}
                        style={errors.email ? { borderColor: '#ef4444' } : {}} />
                    {errors.email && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.email}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-field">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" className="form-input"
                        placeholder="+44 (0) 1234 567890" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" className="form-input"
                        placeholder="Your Organisation" value={formData.company} onChange={handleChange} />
                </div>
            </div>

            <div className="form-field">
                <label className="form-label" htmlFor="service">Service of Interest</label>
                <select id="service" name="service" className="form-input" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>Power System Studies</option>
                    <option>HV/LV Electrical Design</option>
                    <option>Earthing &amp; Lightning Protection</option>
                    <option>Grid Code Compliance</option>
                    <option>Arc Flash Studies</option>
                    <option>General Enquiry</option>
                </select>
            </div>

            <div className="form-field">
                <label className="form-label" htmlFor="message">Project Details *</label>
                <textarea id="message" name="message" className="form-input"
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    value={formData.message} onChange={handleChange}
                    style={errors.message ? { borderColor: '#ef4444' } : {}} />
                {errors.message && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            style={{ animation: 'spin 0.9s linear infinite' }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        Send Enquiry
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    </>
                )}
            </button>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </form>
    );
};

export default ContactForm;
