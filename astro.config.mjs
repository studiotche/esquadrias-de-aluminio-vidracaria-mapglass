import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://studiotche.github.io",
  base: process.env.PAGES_BASE ?? "/esquadrias-de-aluminio-vidracaria-mapglass",
  output: "static",
  integrations: [sitemap()],
  build: { format: "directory" },
});
