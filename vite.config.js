import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Utilisez la variable d'environnement VITE_APP_BASE_PATH ou la valeur par défaut "/"
  base: process.env.VITE_APP_BASE_PATH || "/portfolio-notklra/", // Changez ici pour utiliser une variable d'environnement si besoin
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
    ],
  },
});
