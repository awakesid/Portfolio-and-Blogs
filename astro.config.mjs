// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://awakesid.netlify.app',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});