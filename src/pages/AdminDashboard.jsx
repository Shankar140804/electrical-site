import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { adminDashboardModules } from '../data/adminResources';
import { fetchDashboardCounts } from '../services/adminApi';

const defaultStats = [
    { label: 'Services', value: '0', delta: 'API' },
    { label: 'Projects', value: '0', delta: 'API' },
    { label: 'Blogs', value: '0', delta: 'API' },
    { label: 'Enquiries', value: '0', delta: 'API' },
    { label: 'Careers', value: '0', delta: 'API' },
];

const AdminDashboard = () => {
    const [stats, setStats] = useState(defaultStats);

    useEffect(() => {
        let active = true;

        const load = async () => {
            try {
                const counts = await fetchDashboardCounts();
                if (!active) return;

                setStats([
                    { label: 'Services', value: String(counts.services), delta: 'API' },
                    { label: 'Projects', value: String(counts.projects), delta: 'API' },
                    { label: 'Blogs', value: String(counts.blogs), delta: 'API' },
                    { label: 'Enquiries', value: String(counts.enquiries), delta: 'API' },
                    { label: 'Careers', value: String(counts.careers), delta: 'API' },
                ]);
            } catch {
                if (active) {
                    setStats(defaultStats);
                }
            }
        };

        load();
        return () => {
            active = false;
        };
    }, []);

    return (
        <AdminLayout
            title="Dashboard"
            subtitle="Analytics, content management, and enquiry handling in one place."
            actions={<Link to="/admin/manage/services" className="btn btn-primary">Manage Services</Link>}
        >
            <section className="admin-section">
                <div className="admin-kpi-grid">
                    {stats.map((stat) => (
                        <article className="admin-kpi-card" key={stat.label}>
                            <span>{stat.label}</span>
                            <strong>{stat.value}</strong>
                            <small>{stat.delta}</small>
                        </article>
                    ))}
                </div>
            </section>

            <section className="admin-grid">
                {adminDashboardModules.map((module) => (
                    <Link className="admin-module-card" key={module.title} to={module.path}>
                        <h3>{module.title}</h3>
                        <p>{module.description}</p>
                        <span className="admin-module-link">Open module</span>
                    </Link>
                ))}
            </section>

            <section className="admin-section">
                <div className="admin-panel">
                    <div className="admin-panel-head">
                        <h2>Workflow shortcuts</h2>
                        <span className="admin-badge">Actions</span>
                    </div>
                    <div className="admin-shortcuts">
                        <Link to="/admin/manage/enquiries" className="admin-shortcut">Review contact enquiries</Link>
                        <Link to="/admin/manage/careers" className="admin-shortcut">Publish a job opening</Link>
                        <Link to="/admin/manage/blogs" className="admin-shortcut">Add an engineering article</Link>
                        <Link to="/admin/manage/settings" className="admin-shortcut">Update company settings</Link>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AdminDashboard;
