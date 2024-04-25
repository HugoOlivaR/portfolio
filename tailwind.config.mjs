/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'dark': '#0B0B22',
                'light': '#FFFFFF',
                'blue': '#13A5FB',
            },
        },
    },
    plugins: [],
}