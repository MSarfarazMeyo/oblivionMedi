import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],

  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173, // Ensure it's the same port as ngrok
    strictPort: true, // Avoid random port fallback
    cors: true, // Enable CORS
    headers: {
      'Access-Control-Allow-Origin': '*', // Explicitly allow all origins
    },
  },


})
