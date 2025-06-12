// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import github from "@astrojs/github";

// https://astro.build/config
export default defineConfig({
  site: "https://ullasbc02.github.io/ullas-basavapatna-chandrashekar-online",
  output: "static",
  integrations: [tailwind(), github()],
});
