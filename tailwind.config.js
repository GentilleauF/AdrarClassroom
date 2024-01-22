/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'adrarGreen': '#82B53F',
                'blackBg' : '#212529'
            }
        },
    },
    plugins: [],
};
