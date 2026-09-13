import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import gtm from "astro-gtm-lite";
import keystatic from "@keystatic/astro"; // Keystatic is back!
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://coshix.in",
  trailingSlash: "never",
  output: "static", // Forces Astro to build a static site for GitHub Pages
  image: { service: sharpImageService() },
  vite: { plugins: [tailwindcss()] },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    react(),
    keystatic(), // Integration is active again
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