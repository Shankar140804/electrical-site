import { useState } from 'react';

const initialFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
};

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';

const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: 'idle', message: '' });

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = 'Full name is required';
        if (!formData.email.trim()) e.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Please enter a valid email address';
        if (!formData.phone.trim()) e.phone = 'Phone number is required';
        if (!formData.message.trim()) e.message = 'Project details are required';
        return e;
    };

    const handleChange = (e) => {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
        if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(CONTACT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                }),
            });

            const payload = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(payload?.message || 'Unable to send enquiry');
            }

            setFormData(initialFormData);
            setErrors({});
            setStatus({
                type: 'success',
                message: 'Thank you for contacting Greenvolts. Our engineering team will contact you shortly.',
            });
        } catch {
            setStatus({
                type: 'error',
                message: 'Unable to send your enquiry. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h3>Send an Enquiry</h3>

            {status.message && (
                <div
                    role={status.type === 'error' ? 'alert' : 'status'}
                    aria-live="polite"
                    style={{
                        margin: '0 0 18px',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: status.type === 'error' ? '1px solid rgba(239,68,68,0.35)' : '1px solid rgba(34,197,94,0.35)',
                        background: status.type === 'error' ? 'rgba(239,68,68,0.08)' : 'rgba(34,197,94,0.08)',
                        color: 'var(--clr-text)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                    }}
                >
                    {status.message}
                </div>
            )}

            <div className="form-row">
                <div className="form-field">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" className="form-input"
                        placeholder="John Smith" value={formData.name} onChange={handleChange}
                        required
                        style={errors.name ? { borderColor: '#ef4444' } : {}} />
                    {errors.name && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.name}</span>}
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" className="form-input"
                        placeholder="j.smith@company.co.uk" value={formData.email} onChange={handleChange}
                        required
                        style={errors.email ? { borderColor: '#ef4444' } : {}} />
                    {errors.email && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.email}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-field">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" className="form-input"
                        placeholder="+91 99944 87395" value={formData.phone} onChange={handleChange}
                        required
                        style={errors.phone ? { borderColor: '#ef4444' } : {}} />
                    {errors.phone && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{errors.phone}</span>}
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
                    required
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
