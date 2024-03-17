import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://julien-wff.com',
  integrations: [svelte()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  }
});
