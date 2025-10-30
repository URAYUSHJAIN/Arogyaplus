import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'leaflet': ['leaflet', 'react-leaflet'],
          'ai': ['@google/generative-ai']
        }
      }
    },
    chunkSizeWarningLimit: 600 // Increased limit to 600kB
  }
})
