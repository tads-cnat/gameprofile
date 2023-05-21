/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "main-primary": "#247BA0",
            "main-secondary": "#1B98E0",
            "main-dark": "#006494",
            "main-black": "#342E37",

            "util-green": "#A0F1A8",
            "util-red": "#FF6D6D",
            "util-yellow": "#F7FA73",
            "util-blue": "#6DC2FF",

            "dark-grey": "#B2B2B2",
            "dark-ciane": "#404258",
            "dark-space": "#252A34",
            "dark-solid": "#1A120B",

            "ligth-white": "#F5F5F5",
            "ligth-grey": "#D9D9D9",
        },
        fontFamily: {
            main: ["Saira", "sans-serif"],
            secondary: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
};
