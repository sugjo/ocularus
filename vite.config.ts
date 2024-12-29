import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), "public/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
      svgoOptions: {
        plugins: [{
          name: "removeAttrs",
          params: {
            attrs: "fill"
          }
        }]
      }
    })
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        settings: resolve(__dirname, "settings.html")
      }
    }
  }
}));
