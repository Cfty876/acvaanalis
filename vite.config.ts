import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Универсальная конфигурация: корректно работает и локально, и на Vercel
// (приложение разворачивается в корне домена)
export default defineConfig({
  plugins: [react()],
  base: '/', // для Vercel и большинства хостингов достаточно корня
})
