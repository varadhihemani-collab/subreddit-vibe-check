import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/reddit-api": {
        target: "https://old.reddit.com",
        changeOrigin: true,
        secure: true,
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    }
  }
});