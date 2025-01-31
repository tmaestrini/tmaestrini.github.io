import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import react from '@astrojs/react';
import remarkMermaid from 'remark-mermaidjs';
import { remarkAlerts } from './src/plugins/remark-alerts.mjs';

// https://astro.build/config
const mermaidConfig = {
  strategy: "img-svg", // Change to img-svg for SSR support
  mermaidConfig: {
    theme: 'dark'
  }
};

export default defineConfig({
  site: 'https://tmaestrini.github.io',
  build: {
    format: "file",
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    remarkPlugins: [[remarkMermaid, mermaidConfig], remarkAlerts],
  },
  integrations: [
    mdx({
      remarkPlugins: [[remarkMermaid, mermaidConfig]]
    }), 
    sitemap(), 
    tailwind(), 
    pagefind(), 
    react()
  ]
});