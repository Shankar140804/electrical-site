/* global process */

import nodemailer from 'nodemailer';

const COMPANY_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'energreenvolt@gmail.com';
const SMTP_USER = process.env.GMAIL_USER;
const SMTP_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'Greenvolts Website';
const MAIL_SUBJECT = 'New Website Enquiry - Greenvolts';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
    maxDuration: 10,
};

function parseBody(body) {
    if (!body) {
        return {};
    }

    if (typeof body === 'string') {
        return JSON.parse(body);
    }

    return body;
}

function cleanText(value) {
    return String(value ?? '').trim();
}

function formatSubmittedOn(value) {
    const date = value ? new Date(value) : new Date();
    if (Number.isNaN(date.getTime())) {
        return new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'medium' });
    }

    return date.toLocaleString('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'medium',
        hour12: false,
    });
}

function buildCompanyMessage({ fullName, email, phone, company, service, message, submittedOn }) {
    return [
        'New Website Enquiry',
        '',
        'Full Name:',
        fullName,
        '',
        'Email:',
        email,
        '',
        'Phone:',
        phone,
        '',
        'Company:',
        company || '-',
        '',
        'Service Interested:',
        service || '-',
        '',
        'Project Details:',
        message,
        '',
        'Submitted On:',
        submittedOn,
    ].join('\n');
}

function buildCustomerConfirmation({ fullName }) {
    return [
        `Dear ${fullName},`,
        '',
        'Thank you for contacting Greenvolts.',
        '',
        'We have successfully received your enquiry.',
        '',
        'Our engineering team will review your request and contact you shortly.',
        '',
        'Regards,',
        'Greenvolts Engineering',
    ].join('\n');
}

function validatePayload(payload) {
    const fullName = cleanText(payload.name || payload.fullName);
    const email = cleanText(payload.email);
    const phone = cleanText(payload.phone);
    const company = cleanText(payload.company);
    const service = cleanText(payload.service);
    const message = cleanText(payload.message);
    const submittedOn = formatSubmittedOn(payload.submittedAt);

    if (!fullName || !email || !phone || !message) {
        return {
            error: {
                message: 'Missing required fields.',
                details: {
                    fullName: !fullName,
                    email: !email,
                    phone: !phone,
                    message: !message,
                },
            },
        };
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return {
            error: {
                message: 'Invalid email address.',
            },
        };
    }

    return {
        data: {
            fullName,
            email,
            phone,
            company,
            service,
            message,
            submittedOn,
        },
    };
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({
            success: false,
            message: 'Method not allowed.',
        });
    }

    if (!SMTP_USER || !SMTP_APP_PASSWORD) {
        return res.status(500).json({
            success: false,
            message: 'Mail service is not configured.',
        });
    }

    let payload;
    try {
        payload = parseBody(req.body);
    } catch {
        return res.status(400).json({
            success: false,
            message: 'Invalid request payload.',
        });
    }

    const validation = validatePayload(payload);
    if (validation.error) {
        return res.status(400).json({
            success: false,
            message: validation.error.message,
        });
    }

    const { fullName, email, phone, company, service, message, submittedOn } = validation.data;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_USER,
            pass: SMTP_APP_PASSWORD,
        },
    });

    const commonMailOptions = {
        from: `${MAIL_FROM_NAME} <${SMTP_USER}>`,
    };

    try {
        await transporter.sendMail({
            ...commonMailOptions,
            to: COMPANY_EMAIL,
            replyTo: email,
            subject: MAIL_SUBJECT,
            text: buildCompanyMessage({
                fullName,
                email,
                phone,
                company,
                service,
                message,
                submittedOn,
            }),
        });

        await transporter.sendMail({
            ...commonMailOptions,
            to: email,
            replyTo: COMPANY_EMAIL,
            subject: 'Thank you for contacting Greenvolts',
            text: buildCustomerConfirmation({ fullName }),
        });

        return res.status(200).json({
            success: true,
            message: 'Enquiry sent successfully.',
        });
    } catch {
        console.error('Contact form email failed');
        return res.status(500).json({
            success: false,
            message: 'Unable to send your enquiry. Please try again.',
        });
    }
}
