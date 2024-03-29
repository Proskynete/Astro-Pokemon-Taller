import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const REPO_NAME = "Astro-Pokemon-Taller";
const SITE = "https://proskynete.github.io";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

let BASE_URL = undefined;
if (isBuild) BASE_URL = REPO_NAME;

export default defineConfig({
  site: SITE,
  base: BASE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
