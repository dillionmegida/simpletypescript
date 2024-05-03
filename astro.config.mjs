import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  prefetch: true,
  site: "https://simpletypescript.dev",
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [
    mdx(),
    sitemap(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
})
