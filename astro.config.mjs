// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from "@astrojs/preact"; // 👈 Importa el renderizador
import Swiper from 'swiper';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(),preact()]
  }
});