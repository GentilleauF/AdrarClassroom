/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'red-adrar': '#E44432',
                'yellow-adrar': '#F69E0C',
                'green-adrar': '#82B53F',
                'blue-adrar': '#82C3E7',
                'grey-adrar': '#737373',
                'black-adrar': '#212529',
                'green-dark-adrar': '#598028',
                'blackBg' : '#212529'
                 },
            }
        },
    },
    plugins: [],
};
