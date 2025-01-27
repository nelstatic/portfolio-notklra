import { useEffect } from "react";

const useIntersectionAnimation = (selector, animationClass, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // L'animation ne se déclenche que pour les images avec la classe `.card-gallery-image`
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass); // Ajouter la classe d'animation
          observer.unobserve(entry.target); // Arrêter d'observer après l'animation
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, animationClass, options]);
};

export default useIntersectionAnimation;
