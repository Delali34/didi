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
        didiYellow: "#FFC107",
        brown: {
          600: "#8B4513", // Adjust this to match your exact brand brown
        },
        orange: {
          500: "#FFA500", // Adjust this to match your exact brand orange
        }, // Customize this color
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
