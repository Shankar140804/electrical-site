import { handleContactSubmission } from '../src/lib/contactService.js';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
    maxDuration: 10,
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({
            success: false,
            message: 'Method not allowed.',
        });
    }

    const result = await handleContactSubmission(req.body);
    return res.status(result.statusCode).json(result.body);
}
