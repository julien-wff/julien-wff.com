import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import keydown from "./src/directives/keydown/register.js";

// https://astro.build/config
export default defineConfig({
  site: 'https://julien-wff.com',
  integrations: [svelte(), keydown()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  }
});
