import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAdmin, setAdminToken } from '../services/adminApi';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await loginAdmin(email, password);
            setAdminToken(result?.token || '');
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.message || 'Unable to sign in.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="bc-sep">›</span>
                        <span>Admin Login</span>
                    </div>
                    <h1>Admin Login</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '620px' }}>
                        Sign in to manage services, projects, blogs, gallery media, testimonials, FAQs, careers, and contact enquiries.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container admin-auth-layout">
                    <div className="admin-auth-card">
                        <span className="section-label">Authentication</span>
                        <h2>Sign in to the dashboard</h2>
                        <p className="service-detail-copy">This screen posts to the .NET API login endpoint and stores the returned JWT for admin requests.</p>
                        <form className="admin-form" onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="admin-email">Email</label>
                            <input
                                id="admin-email"
                                className="form-input"
                                type="email"
                                placeholder="admin@greenvolts.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <label className="form-label" htmlFor="admin-password">Password</label>
                            <input
                                id="admin-password"
                                className="form-input"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            {error ? <p className="admin-error">{error}</p> : null}
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Signing in...' : 'Login'}
                            </button>
                        </form>
                        <div style={{ marginTop: '18px' }}>
                            <Link to="/admin/dashboard" className="btn btn-outline">Open Dashboard</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminLogin;
