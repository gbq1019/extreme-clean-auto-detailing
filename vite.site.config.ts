import { defineConfig } from 'vite';

// Static HTML/CSS prototypes under `site/` — run `npm run dev:site`, open http://localhost:5174/
export default defineConfig({
  root: 'site',
  server: {
    host: true,
    port: 5174,
    strictPort: true,
  },
});
