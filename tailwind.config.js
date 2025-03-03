/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/index.css"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["fStop", "sans-serif"], // Ajout de la police personnalisée
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")], // Plugin pour cacher la scrollbar
};
