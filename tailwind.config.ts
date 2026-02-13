import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#00AAA5",
                    light: "#33B9EE",
                    dark: "#007BB5",
                },
                secondary: {
                    DEFAULT: "#1D1D1B",
                    light: "#3C3C3A",
                    dark: "#000000",
                },
            },
        },
    },
    plugins: [],
};
export default config;
