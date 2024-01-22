/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'red-adrar': '#E44432',
                'yellow-adrar' : '#F69E0C',
                'green-adrar': '#82B53F',
                'blackBg' : '#212529'
            }
        },
    },
    plugins: [],
};
