import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Stable URL for Cursor Simple Browser / embedded preview (Windows IPv6 localhost quirks).
    host: true,
    port: 5173,
    strictPort: true,
  },
});
