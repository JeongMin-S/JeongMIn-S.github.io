import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    "process.env": process.env, // 환경 변수를 전역으로 사용 가능하게 설정
  },
});
