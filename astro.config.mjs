import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://simpletypescript.dev",
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [mdx()],
})
