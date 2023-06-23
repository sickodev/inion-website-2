/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#25AEEC",
                secondary: "#5D5FF4",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
        require("@headlessui/tailwindcss")({ prefix: "ui" }),
    ],
};
