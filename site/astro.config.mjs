// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alena.cashflow-game.ru',
  outDir: '/srv/alena-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
