import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/portfolio/',
  site: 'https://hugooliva.com/',
  integrations: [tailwind()],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
});