import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/sorting-visualizer/",
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsInlineLimit: 4096
  }
});
