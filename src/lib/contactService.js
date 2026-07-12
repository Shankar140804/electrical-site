/* global process */

import nodemailer from 'nodemailer';

const COMPANY_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'energreenvolt@gmail.com';
const SMTP_USER = process.env.GMAIL_USER;
const SMTP_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'Greenvolts Website';
const MAIL_SUBJECT = 'New Website Enquiry - Greenvolts';

export function parseContactBody(body) {
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

export function validateContactPayload(payload) {
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

async function sendEmails(contact) {
    if (!SMTP_USER || !SMTP_APP_PASSWORD) {
        if (process.env.NODE_ENV !== 'production') {
            return { mocked: true };
        }

        throw new Error('Mail service is not configured.');
    }

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

    await transporter.sendMail({
        ...commonMailOptions,
        to: COMPANY_EMAIL,
        replyTo: contact.email,
        subject: MAIL_SUBJECT,
        text: buildCompanyMessage(contact),
    });

    await transporter.sendMail({
        ...commonMailOptions,
        to: contact.email,
        replyTo: COMPANY_EMAIL,
        subject: 'Thank you for contacting Greenvolts',
        text: buildCustomerConfirmation(contact),
    });

    return { mocked: false };
}

export async function handleContactSubmission(rawBody) {
    let payload;

    try {
        payload = parseContactBody(rawBody);
    } catch {
        return {
            statusCode: 400,
            body: {
                success: false,
                message: 'Invalid request payload.',
            },
        };
    }

    const validation = validateContactPayload(payload);
    if (validation.error) {
        return {
            statusCode: 400,
            body: {
                success: false,
                message: validation.error.message,
            },
        };
    }

    try {
        const mailResult = await sendEmails(validation.data);

        return {
            statusCode: 200,
            body: {
                success: true,
                message: 'Enquiry sent successfully.',
                mocked: mailResult.mocked,
            },
        };
    } catch {
        return {
            statusCode: 500,
            body: {
                success: false,
                message: 'Unable to send your enquiry. Please try again.',
            },
        };
    }
}
