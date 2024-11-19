import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://tmaestrini.github.io',
  build: {
    format: "file",
  },
  integrations: [mdx(), sitemap(), tailwind(), pagefind(), react()],
});