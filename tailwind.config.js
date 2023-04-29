/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    100: '#1C1C1C',
                    80: 'rgba(0, 0, 0, 0.8)',
                    40: 'rgba(0, 0, 0, 0.4)',
                    20: 'rgba(0, 0, 0, 0.2)'
                },
                white: {
                    100: '#ffffff',
                    80: 'rgba(255, 255, 255, 0.8)',
                    40: 'rgba(255, 255, 255, 0.4)',
                    20: 'rgba(255, 255, 255, 0.2)',
                },
                primary: {
                    light: '#F7F9FB',
                    blue: '#E3F5FF',
                    purple: '#E5ECF6',
                    purple50: 'rgba(229, 236, 246, 0.5)',
                    gray: '#333333',
                    darkBlue: '#2b2b37'
                },
                secondary: {
                    purple: {
                        dark: '#95A4FC',
                        light: '#C6C7F8'
                    }
                }
            },
            screens: {
                xxs: '350px',
                xs: '400px'
            }
        },
    },
    darkMode: 'class',
    plugins: [],
}

