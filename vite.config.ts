import {defineConfig, PluginOption} from 'vite'
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer() as PluginOption,
    vue(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
