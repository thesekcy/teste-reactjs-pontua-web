/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~@': path.resolve(__dirname, '/src'),
    },
  },
})
