# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#################################################

Gestion des ressources statiques et des chemins d'URL avec GitHub Pages

Afin de gérer correctement les ressources statiques (comme les images) et garantir leur accessibilité tant en local qu'en production sur GitHub Pages (ou un autre serveur avec un sous-répertoire), j'ai configuré une variable d'environnement dans le projet.

Étapes principales :

1. Variable d'environnement pour la base URL :

   - J'ai configuré une variable d'environnement `VITE_APP_BASE_PATH` dans le fichier `.env` pour définir le chemin de base du répertoire où le site sera hébergé (par exemple, `/portfolio-notklra/` pour un sous-répertoire GitHub Pages).
   - Cette variable permet de gérer dynamiquement le préfixe des chemins des ressources, en particulier les images, pour qu'elles soient correctement résolues, que ce soit en développement local ou après déploiement.

2. Utilisation de `basePath` dans le code :

   - La variable `basePath` est récupérée dans chaque composant React via `import.meta.env.VITE_APP_BASE_PATH`.
   - Les chemins des images dans les composants, comme les logos ou les autres ressources statiques, sont automatiquement préfixés par cette variable pour qu'ils soient correctement résolus, que ce soit en développement local ou après déploiement.

   Exemple :

   ```jsx
   const basePath = import.meta.env.VITE_APP_BASE_PATH || "/portfolio-notklra/";
   <img src={`${basePath}assets/logos/instagram.png`} alt="Instagram" />;
   ```

3. Avantages :

   - Développement local : En local, les chemins relatifs fonctionneront sans modification supplémentaire.
   - Déploiement sur GitHub Pages : Sur GitHub Pages (ou tout autre serveur avec un sous-répertoire), les images et autres ressources seront accessibles en ajoutant automatiquement le préfixe du répertoire dans les URLs.

4. Fichier `.env` :

   - Vous devez définir la variable `VITE_APP_BASE_PATH` dans le fichier `.env` à la racine du projet :

   ```bash
   VITE_APP_BASE_PATH="/portfolio-notklra/"
   ```

   // Dans BrowserRouter, ajouter basename={import.meta.env.production.VITE_APP_BASE_PATH}
   // Variable d'env dans Vite pour définir une base URL pour l'ensemble des routes de l'application

5. Mise à jour des composants :
   - Toutes les ressources statiques, y compris celles dans les composants comme les galeries d'images, sont mises à jour pour utiliser cette variable d'environnement. Cela garantit que les chemins des images sont dynamiques et adaptés à l'environnement de déploiement.
