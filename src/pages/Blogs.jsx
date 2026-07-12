import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_substation.png';
import SectionHeader from '../components/SectionHeader';
import { blogPosts } from '../data/extendedContent';

const Blogs = () => (
    <>
        <div className="page-header">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="bc-sep">›</span>
                    <span>Blogs</span>
                </div>
                <h1>Blogs</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '10px', maxWidth: '620px' }}>
                    Technical articles, updates, and practical engineering guidance that supports the wider company story.
                </p>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <SectionHeader
                    label="Categories"
                    title="Content area for engineering insights"
                    subtitle="This gives the website a natural place to publish thought leadership, project lessons, and industry guidance."
                />
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article className="blog-card" key={post.title}>
                            <div className="blog-image-wrap">
                                <img src={heroImg} alt={post.title} />
                            </div>
                            <div className="blog-body">
                                <span className="blog-category">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="blog-meta">{post.author}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default Blogs;
