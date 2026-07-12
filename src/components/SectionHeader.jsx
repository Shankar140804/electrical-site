import React from 'react';

const SectionHeader = ({ label, title, subtitle, align = 'center' }) => (
    <div className="section-title-wrap" style={{ textAlign: align }}>
        {label ? <span className="section-label">{label}</span> : null}
        <h2>{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
);

export default SectionHeader;
