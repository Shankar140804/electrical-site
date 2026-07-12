import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceEtap from './pages/ServiceEtap';
import ServicePsse from './pages/ServicePsse';
import ServicePscad from './pages/ServicePscad';
import ServicePowerFactory from './pages/ServicePowerFactory';
import ServiceHomerPro from './pages/ServiceHomerPro';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminResourcePage from './pages/AdminResourcePage';
import ScrollReveal from './components/ScrollReveal';
import './index.css';

// Scroll to top on every route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

const App = () => (
    <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/etap" element={<ServiceEtap />} />
                <Route path="/services/psse" element={<ServicePsse />} />
                <Route path="/services/pscad" element={<ServicePscad />} />
                <Route path="/services/powerfactory" element={<ServicePowerFactory />} />
                <Route path="/services/homerpro" element={<ServiceHomerPro />} />
                <Route path="/sectors" element={<Sectors />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/manage/:moduleKey" element={<AdminResourcePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={
                    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '80px 20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--clr-accent)', fontFamily: 'var(--ff-heading)', opacity: 0.15, lineHeight: 1 }}>404</div>
                        <h2 style={{ color: 'var(--clr-primary)', marginTop: '-20px' }}>Page Not Found</h2>
                        <p style={{ color: 'var(--clr-text-muted)', maxWidth: '400px' }}>The page you're looking for doesn't exist or has been moved.</p>
                        <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>Back to Home</Link>
                    </div>
                } />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
);

export default App;
