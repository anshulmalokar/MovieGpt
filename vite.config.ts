import { defineConfig } from 'vite'
import { config } from 'dotenv';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

config();
// https://vite.dev/config/
export default defineConfig({
  // Your Vite configuration
  define: {
    'process.env': process.env
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'),
    },
  },
})
