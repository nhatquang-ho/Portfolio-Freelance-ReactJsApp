import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Freelance-ReactJsApp/',
  plugins: [react()],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    alias: {
      // Remplacements pour les modules Node.js
      path: 'path-browserify',
      url: 'url',
      util: 'util',
      process: 'process/browser',
      tty: 'tty-browserify',
      debug: 'debug/src/browser.js'
    }
  },
  define: {
    'process.env': '{}',
    'process.stdout': '{}',
    'process.platform': '"browser"',
    'process.version': '"v16.0.0"',
    'process.argv': '[]'
  }
})
