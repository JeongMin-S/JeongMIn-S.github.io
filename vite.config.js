import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    sourcemap: false, // 소스 맵 제거 (보안)
  },
});
