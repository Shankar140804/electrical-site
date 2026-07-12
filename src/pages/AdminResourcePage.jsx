import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { adminResources } from '../data/adminResources';
import {
    deleteAdminModule,
    fetchAdminModule,
    formatAdminDate,
    getModuleId,
    saveAdminModule,
} from '../services/adminApi';

const tableFieldMap = {
    users: ['name', 'email', 'role', 'createdDate'],
    services: ['serviceName', 'slug', 'status', 'createdDate'],
    projects: ['title', 'client', 'location', 'status'],
    blogs: ['title', 'slug', 'category', 'status'],
    gallery: ['title', 'category', 'mediaType', 'createdDate'],
    testimonials: ['clientName', 'company', 'rating', 'status'],
    faqs: ['question', 'category', 'status'],
    careers: ['jobTitle', 'location', 'experience', 'status'],
    enquiries: ['name', 'company', 'requiredService', 'createdDate', 'status'],
    settings: ['companyName', 'email', 'phone', 'workingHours'],
};

const formatCell = (moduleKey, fieldName, value) => {
    if (fieldName.toLowerCase().includes('date')) {
        return formatAdminDate(value);
    }

    if (moduleKey === 'settings' && fieldName === 'workingHours') {
        return value === null || value === undefined || value === '' ? '-' : value;
    }

    return value === null || value === undefined || value === '' ? '-' : value;
};

const createInitialFormState = (fields) =>
    fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

const AdminResourcePage = () => {
    const { moduleKey } = useParams();
    const resource = adminResources[moduleKey];
    const formFields = resource?.formFields || [];
    const fieldNames = useMemo(() => tableFieldMap[moduleKey] || [], [moduleKey]);

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(() => createInitialFormState(formFields));

    useEffect(() => {
        setFormData(createInitialFormState(formFields));
        setEditingId(null);
        setNotice('');
        setError('');
    }, [moduleKey, resource, formFields]);

    useEffect(() => {
        if (!resource) {
            return undefined;
        }

        let active = true;

        const loadRecords = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await fetchAdminModule(moduleKey);
                if (!active) return;

                setRecords(data);
                if (moduleKey === 'settings' && data.length > 0) {
                    const first = data[0];
                    setEditingId(getModuleId(first));
                    setFormData(mapRecordToForm(formFields, first));
                }
            } catch (err) {
                if (!active) return;
                setError(err.message || 'Unable to load records.');
                setRecords([]);
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        loadRecords();

        return () => {
            active = false;
        };
    }, [moduleKey, resource]);

    const mapRecordToForm = (fields, record) =>
        fields.reduce((acc, field) => {
            acc[field.name] = record?.[field.name] ?? '';
            return acc;
        }, {});

    const handleChange = (fieldName, value) => {
        setFormData((current) => ({ ...current, [fieldName]: value }));
    };

    const resetForm = () => {
        setEditingId(moduleKey === 'settings' && records.length > 0 ? getModuleId(records[0]) : null);
        setFormData(
            moduleKey === 'settings' && records.length > 0
                ? mapRecordToForm(formFields, records[0])
                : createInitialFormState(formFields)
        );
        setNotice('');
        setError('');
    };

    const beginEdit = (record) => {
        setEditingId(getModuleId(record));
        setFormData(mapRecordToForm(formFields, record));
        setNotice(`Editing ${resource.title.toLowerCase()}.`);
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSaving(true);
        setError('');
        setNotice('');

        try {
            const payload = { ...formData };
            await saveAdminModule(moduleKey, editingId, payload);
            const refreshed = await fetchAdminModule(moduleKey);
            setRecords(refreshed);
            if (moduleKey === 'settings' && refreshed.length > 0) {
                const first = refreshed[0];
                setEditingId(getModuleId(first));
                setFormData(mapRecordToForm(formFields, first));
            } else {
                setEditingId(null);
                setFormData(createInitialFormState(formFields));
            }
            setNotice(`${resource.title} saved successfully.`);
        } catch (err) {
            setError(err.message || 'Unable to save record.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (record) => {
        const recordId = getModuleId(record);
        if (!recordId) {
            return;
        }

        if (!window.confirm(`Delete this ${resource.title.toLowerCase()} record?`)) {
            return;
        }

        setError('');
        setNotice('');

        try {
            await deleteAdminModule(moduleKey, recordId);
            const refreshed = await fetchAdminModule(moduleKey);
            setRecords(refreshed);
            if (moduleKey === 'settings' && refreshed.length > 0) {
                const first = refreshed[0];
                setEditingId(getModuleId(first));
                setFormData(mapRecordToForm(formFields, first));
            } else if (editingId === recordId) {
                resetForm();
            }
            setNotice(`${resource.title} deleted.`);
        } catch (err) {
            setError(err.message || 'Unable to delete record.');
        }
    };

    const activeRows = records.length > 0 ? records : [];
    const rowCount = activeRows.length;

    if (!resource) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    return (
        <AdminLayout
            title={resource.title}
            subtitle={resource.subtitle}
            actions={<Link to="/admin/dashboard" className="btn btn-primary">Back to Dashboard</Link>}
        >
            <section className="admin-section">
                <div className="admin-kpi-grid">
                    {resource.metrics.map((metric) => (
                        <article className="admin-kpi-card" key={metric.label}>
                            <span>{metric.label}</span>
                            <strong>{metric.value}</strong>
                        </article>
                    ))}
                </div>
            </section>

            <section className="admin-grid">
                <article className="admin-panel">
                    <div className="admin-panel-head">
                        <h2>{resource.kind === 'read-only' ? 'Read-only feed' : editingId ? `Edit ${resource.title}` : resource.actionLabel}</h2>
                        <span className="admin-badge">{resource.kind}</span>
                    </div>

                    {error ? <p className="admin-error">{error}</p> : null}
                    {notice ? <p className="admin-success">{notice}</p> : null}

                    {resource.kind === 'read-only' ? (
                        <p className="admin-note">This module is read-only. Use the enquiry list to review incoming messages and connect workflow actions later.</p>
                    ) : (
                        <form className="admin-form-grid" onSubmit={handleSubmit}>
                            {formFields.map((field) => (
                                <React.Fragment key={field.name}>
                                    <label className="form-label" htmlFor={`${moduleKey}-${field.name}`}>{field.label}</label>
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            id={`${moduleKey}-${field.name}`}
                                            className="form-input admin-input"
                                            placeholder={field.placeholder}
                                            rows={4}
                                            value={formData[field.name] || ''}
                                            onChange={(event) => handleChange(field.name, event.target.value)}
                                        />
                                    ) : field.type === 'select' ? (
                                        <select
                                            id={`${moduleKey}-${field.name}`}
                                            className="form-input admin-input"
                                            value={formData[field.name] || ''}
                                            onChange={(event) => handleChange(field.name, event.target.value)}
                                        >
                                            <option value="">{field.placeholder || `Select ${field.label}`}</option>
                                            {(field.options || []).map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            id={`${moduleKey}-${field.name}`}
                                            className="form-input admin-input"
                                            type={field.type || 'text'}
                                            placeholder={field.placeholder}
                                            value={formData[field.name] || ''}
                                            onChange={(event) => handleChange(field.name, event.target.value)}
                                        />
                                    )}
                                </React.Fragment>
                            ))}

                            <div className="admin-form-actions">
                                <button type="submit" className="btn btn-primary" disabled={saving || loading}>
                                    {saving ? 'Saving...' : editingId ? 'Update Record' : resource.actionLabel}
                                </button>
                                <button type="button" className="btn btn-outline" onClick={resetForm}>Reset</button>
                            </div>
                        </form>
                    )}
                </article>

                <article className="admin-panel">
                    <div className="admin-panel-head">
                        <h2>Current Records</h2>
                        <span className="admin-badge">{rowCount} items</span>
                    </div>

                    <div className="admin-table-wrap">
                        {loading ? (
                            <p className="admin-note">Loading records...</p>
                        ) : activeRows.length === 0 ? (
                            <p className="admin-note">No records found yet. Use the form to create the first entry.</p>
                        ) : (
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        {resource.columns.map((column) => (
                                            <th key={column}>{column}</th>
                                        ))}
                                        {resource.kind !== 'read-only' ? <th>Actions</th> : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeRows.map((record) => {
                                        const recordId = getModuleId(record);

                                        return (
                                            <tr key={`${resource.title}-${recordId}`}>
                                                {fieldNames.map((fieldName) => (
                                                    <td key={fieldName}>{formatCell(moduleKey, fieldName, record[fieldName])}</td>
                                                ))}
                                                {resource.kind !== 'read-only' ? (
                                                    <td>
                                                        <div className="admin-row-actions">
                                                            <button type="button" className="admin-link-btn" onClick={() => beginEdit(record)}>Edit</button>
                                                            {moduleKey !== 'settings' ? (
                                                                <button type="button" className="admin-link-btn danger" onClick={() => handleDelete(record)}>Delete</button>
                                                            ) : null}
                                                        </div>
                                                    </td>
                                                ) : null}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {resource.kind === 'read-only' ? (
                        <p className="admin-note">Contact enquiries are read-only here until workflow actions are connected.</p>
                    ) : null}
                </article>
            </section>
        </AdminLayout>
    );
};

export default AdminResourcePage;
