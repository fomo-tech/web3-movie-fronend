/** @type {import('tailwindcss').Config} */
module.exports = {
    // thêm prefix nếu bạn dùng song song với Bootstrap
    prefix: 'tw-',
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",   // App Router
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
