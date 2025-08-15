import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/resume/',
  server: {
    watch: { usePolling: true, interval: 200 },
    host: true,
  },
});
