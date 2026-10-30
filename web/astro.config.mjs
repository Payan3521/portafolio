// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// ⚠️ PARA GITHUB PAGES:
// - Si tu repo es TU_USUARIO.github.io → base: '/', site: 'https://TU_USUARIO.github.io'
// - Si tu repo es TU_USUARIO/NOMBRE_REPO → base: '/NOMBRE_REPO/', site: 'https://TU_USUARIO.github.io/NOMBRE_REPO'
export default defineConfig({
  site: 'https://TU_USUARIO.github.io',
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});