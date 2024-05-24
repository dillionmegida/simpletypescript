import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import AutoImport from "astro-auto-import"
import tailwind from "@astrojs/tailwind"
import clerk from "astro-clerk-auth"
import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  site: "https://simpletypescript.dev",
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [
    clerk(),
    sitemap(),
    AutoImport({
      imports: [
        "./src/components/mdx/CodeBlock.astro",
        "./src/components/mdx/Info.astro",
      ],
    }),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
    tailwind(),
  ],
  output: "hybrid",
  adapter: netlify(),
})
