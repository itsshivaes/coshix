import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import gtm from "astro-gtm-lite";
import keystatic from "@keystatic/astro";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://coshix.in",
  // base: "/", // Remove or comment this out for custom root domains!
  trailingSlash: "never",
  output: "static", 
  adapter: node({
    mode: "standalone"
  }),
  image: { service: sharpImageService() },
  vite: { plugins: [tailwindcss()] },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    react(),
    keystatic(),
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