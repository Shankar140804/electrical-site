import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { galleryItems } from '../data/extendedContent';

const Gallery = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Gallery</span>
                </div>
                <h1>Gallery</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '620px' }}>
                    A visual library for site photos, electrical panels, substations, renewable assets, and video content.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Images"
                    title="A professional media section for the company website"
                    subtitle="The gallery page creates space for project photography and field imagery when assets are ready."
                />
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <article className="gallery-card" key={item.title}>
                            <div className="gallery-image-wrap">
                                <img src={heroImg} alt={item.title} />
                            </div>
                            <div className="gallery-body">
                                <span className="gallery-category">{item.category}</span>
                                <h3>{item.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default Gallery;
