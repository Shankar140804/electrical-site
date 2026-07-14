# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form email setup

The contact form posts to the Vercel Serverless Function at `/api/contact`.

Set these environment variables in Vercel:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `CONTACT_RECIPIENT_EMAIL` to receive enquiries, defaulting to `smartlover143shankar@gmail.com`
- `MAIL_FROM_NAME` if you want to override the sender display name

The frontend can optionally point to a different API base during local development with `VITE_CONTACT_API_URL`.
