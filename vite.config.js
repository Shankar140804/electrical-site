import { Buffer } from 'node:buffer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { handleContactSubmission } from './src/lib/contactService.js'

function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') {
          next()
          return
        }

        const chunks = []
        for await (const chunk of req) {
          chunks.push(chunk)
        }

        const rawBody = chunks.length > 0 ? Buffer.concat(chunks).toString('utf8') : ''
        const result = await handleContactSubmission(rawBody)

        res.statusCode = result.statusCode
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(result.body))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiDevPlugin()],
})
