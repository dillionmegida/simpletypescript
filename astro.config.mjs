import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import AutoImport from 'astro-auto-import';
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://simpletypescript.dev",
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [
    sitemap(),
    AutoImport({
      imports: ['./src/components/mdx/CodeBlock.astro']
    }),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind(),
  ],
})
