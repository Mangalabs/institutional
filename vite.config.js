import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
     tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              'orange-dark': '#A0361B',
              'orange-vibrant': '#C4501B',
              'orange-light': '#E9972D',
              'green-dark': '#2B5B3F',
              'green-deep': '#143829',
            },
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
            },
          },
        },
      },
    }),
  ],
})
