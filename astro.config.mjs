import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://hugooliva.com/',
  integrations: [
    tailwind(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
});

