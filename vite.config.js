import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("/react/") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom")
          ) {
            return "react-vendor";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("react-icons")) {
            return "icons";
          }

          if (id.includes("swiper")) {
            return "swiper";
          }

          if (id.includes("aos")) {
            return "aos";
          }

          return "vendor";
        },
      },
    },
  },
});