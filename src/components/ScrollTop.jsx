import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed z-[100] bottom-[170px] md:bottom-[30px] right-[13px] text-white p-2.5 text-[40px] transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <SlArrowUp size="2.5rem" />
    </div>
  );
};

export default ScrollTop;
