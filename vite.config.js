import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages에서 URL이 올바르게 작동하도록 base 경로 지정
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    sourcemap: false, // 소스 맵 제거하여 코드 노출 방지
  },
});
