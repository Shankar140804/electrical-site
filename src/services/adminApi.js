const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5088';
const TOKEN_KEY = 'greenvolts_admin_token';

const endpointByModule = {
    users: { list: '/api/users', create: '/api/users', item: (id) => `/api/users/${id}`, idKey: 'id' },
    services: { list: '/api/services', create: '/api/service', item: (id) => `/api/service/${id}`, idKey: 'id' },
    projects: { list: '/api/projects', create: '/api/projects', item: (id) => `/api/projects/${id}`, idKey: 'id' },
    blogs: { list: '/api/blogs', create: '/api/blogs', item: (id) => `/api/blogs/${id}`, idKey: 'id' },
    gallery: { list: '/api/gallery', create: '/api/gallery', item: (id) => `/api/gallery/${id}`, idKey: 'id' },
    testimonials: { list: '/api/testimonials', create: '/api/testimonials', item: (id) => `/api/testimonials/${id}`, idKey: 'id' },
    faqs: { list: '/api/faqs', create: '/api/faqs', item: (id) => `/api/faqs/${id}`, idKey: 'id' },
    careers: { list: '/api/careers', create: '/api/careers', item: (id) => `/api/careers/${id}`, idKey: 'id' },
    enquiries: { list: '/api/enquiries', create: null, item: null, idKey: 'id' },
    settings: { list: '/api/settings', create: '/api/settings', item: (id) => `/api/settings/${id}`, idKey: 'id' },
};

const jsonHeaders = {
    'Content-Type': 'application/json',
};

export const getAdminToken = () => localStorage.getItem(TOKEN_KEY) || '';

export const setAdminToken = (token) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        localStorage.removeItem(TOKEN_KEY);
    }
};

async function request(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers: {
            ...jsonHeaders,
            ...(options.headers || {}),
            ...(getAdminToken() ? { Authorization: `Bearer ${getAdminToken()}` } : {}),
        },
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed with status ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    const contentType = response.headers.get('content-type') || '';
    return contentType.includes('application/json') ? response.json() : response.text();
}

export async function loginAdmin(email, password) {
    return request('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
}

export async function fetchAdminModule(moduleKey) {
    const config = endpointByModule[moduleKey];
    if (!config) {
        throw new Error(`Unsupported module: ${moduleKey}`);
    }

    const data = await request(config.list, { method: 'GET' });
    const list = Array.isArray(data) ? data : data ? [data] : [];
    return list;
}

export async function saveAdminModule(moduleKey, id, payload) {
    const config = endpointByModule[moduleKey];
    if (!config) {
        throw new Error(`Unsupported module: ${moduleKey}`);
    }

    if (moduleKey === 'enquiries') {
        throw new Error('Contact enquiries are read-only.');
    }

    const isUpdate = Boolean(id);
    const path = isUpdate ? config.item(id) : config.create;

    return request(path, {
        method: isUpdate ? 'PUT' : 'POST',
        body: JSON.stringify(payload),
    });
}

export async function deleteAdminModule(moduleKey, id) {
    const config = endpointByModule[moduleKey];
    if (!config || !config.item) {
        throw new Error(`Unsupported delete operation for ${moduleKey}`);
    }

    return request(config.item(id), { method: 'DELETE' });
}

export async function fetchDashboardCounts() {
    const [services, projects, blogs, enquiries, careers] = await Promise.all([
        fetchAdminModule('services'),
        fetchAdminModule('projects'),
        fetchAdminModule('blogs'),
        fetchAdminModule('enquiries'),
        fetchAdminModule('careers'),
    ]);

    return {
        services: services.length,
        projects: projects.length,
        blogs: blogs.length,
        enquiries: enquiries.length,
        careers: careers.length,
    };
}

export function formatAdminDate(value) {
    if (!value) {
        return '-';
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
}

export function getModuleId(record) {
    return record.id ?? record.userId ?? record.serviceId ?? record.projectId ?? record.blogId ?? record.galleryId ?? record.testimonialId ?? record.faqId ?? record.careerId ?? record.applicationId ?? record.enquiryId ?? record.settingId;
}
