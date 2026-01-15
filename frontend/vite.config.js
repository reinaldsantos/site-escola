import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "unifoliolate-vigorless-tamekia.ngrok-free.dev",
      "*.ngrok-free.dev",
      "localhost"
    ],
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "^/api": {
        target: "http://localhost:1338",
        changeOrigin: true,
        secure: false,
      },
      "^/admin": {
        target: "http://localhost:1338",
        changeOrigin: true,
        secure: false,
      },
      "^/uploads": {
        target: "http://localhost:1338",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});