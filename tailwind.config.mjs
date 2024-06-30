/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        darkLight: "#1E1E1E",
        light: "#FFFFFF",
        blue: "#13A5FB",
      },
      borderColor: ['focus'],
    },
  },
  plugins: [],
};