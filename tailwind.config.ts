import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                customyellow: "#EEE841",
                customgray: "#1F2937",
                bordergray: "#D0D1D7",
            },
        },
    },
    plugins: [],
};
export default config;
