import { defineConfig } from "vite";

export default defineConfig({
  base: "/quantum-trading-platform/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'src/styles/_variables.scss';",
      },
    },
  },
});
