import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://hugooliva.com/',
  integrations: [tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compress(), (await import("astro-compress")).default({
    CSS: true,
    JavaScript: true,
    HTML: true,
    SVG: true,
    Image: true,
  })],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
});