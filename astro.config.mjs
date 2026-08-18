// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://joel-portfolio-rose.vercel.app/', // TODO: update when custom domain is connected
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false, // English at "/", Spanish at "/es/"
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
