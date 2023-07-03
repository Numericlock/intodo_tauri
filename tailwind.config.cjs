/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/**/.js",
    "./src/**/**/.jsx",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}

