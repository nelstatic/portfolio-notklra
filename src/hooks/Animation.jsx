import { useEffect } from "react";

const useIntersectionAnimation = (selector, animationClass, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // Arrêter d'observer une fois l'animation jouée
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, animationClass, options]);
};

export default useIntersectionAnimation;
