import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000, // 이렇게 설정해두면 로컬에서 5173포트가 아닌 8000포트로 접속하면 된다.
    //도커에서는 5174포트로 접속이 가능해진다.
  },
});
