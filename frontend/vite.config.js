import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  server: {
    // 🔥 ACEITA QUALQUER HOST (inclusive ngrok)
    allowedHosts: [
      "unifoliolate-vigorless-tamekia.ngrok-free.dev",
      "localhost",
      "127.0.0.1",
      "0.0.0.0",
      "192.168.30.44",
      "*"  // ⚠️ Aceita TUDO
    ],
    port: 3000,
    host: true,
    strictPort: false,
    cors: true,
    // Proxy para Strapi
    proxy: {
      "^/admin": {
        target: "http://localhost:1338",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      },
      "^/api": {
        target: "http://localhost:1338",
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()],
  preview: {
    port: 3000,
    host: true,
    allowedHosts: ["*"]
  }
})
