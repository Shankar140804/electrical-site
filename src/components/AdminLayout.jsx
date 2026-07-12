import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { adminNavItems } from '../data/adminResources';

const AdminLayout = ({ title, subtitle, actions, children }) => (
    <div className="admin-shell">
        <aside className="admin-sidebar">
            <Link to="/admin/dashboard" className="admin-brand">
                <span className="admin-brand-mark">G</span>
                <span>
                    <strong>Greenvolts</strong>
                    <small>Admin Panel</small>
                </span>
            </Link>

            <nav className="admin-nav">
                {adminNavItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `admin-nav-link${isActive ? ' active' : ''}`}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>

        <div className="admin-main">
            <header className="admin-topbar">
                <div>
                    <p className="admin-eyebrow">Production-ready admin scaffold</p>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div className="admin-topbar-actions">
                    {actions}
                    <Link to="/" className="btn btn-outline">View Site</Link>
                </div>
            </header>

            <div className="admin-content">
                {children}
            </div>
        </div>
    </div>
);

export default AdminLayout;
