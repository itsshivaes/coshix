import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import gtm from "astro-gtm-lite";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://coshix.in",
  trailingSlash: "always", // Forces the trailing slash to match GitHub Pages
  image: { service: sharpImageService() },
  vite: { plugins: [tailwindcss()] },
  build: {
    inlineStylesheets: "always",
    format: "directory", // Ensures Astro outputs folder-based routing
  },
  integrations: [
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
    gtm({
      enable: false,
      id: "GTM-XXXXXX",
      devMode: true,
    }),
  ],
  markdown: {
    processor: unified(),
    shikiConfig: { theme: "one-dark-pro", wrap: true },
  },
});