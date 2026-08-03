import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

// Nitro emits the Vercel serverless output that forwards every application
// request to TanStack Start's SSR handler.
export default defineConfig({ plugins: [tanstackStart(), nitro(), react(), tailwindcss()] })
