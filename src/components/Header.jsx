import { NavLink } from "react-router-dom";
import React from "react";
import Hamburger from "hamburger-react";
import { useNavbar } from "@hooks/NavbarContext";

function Header() {
  const { isNavbarOpen, toggleNavbar } = useNavbar(); // Récupère les valeurs du contexte

  const handleLinkClick = () => {
    toggleNavbar(); // Ferme la navbar
    // Redirige vers le haut de la page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <header className="header">
      <nav className="fixed top-0 right-0 w-0 bg-transparent flex justify-end pt-4 z-[1001]">
        <div className="px-5 z-[1001] mt-[30px]">
          <Hamburger
            size={29}
            distance="lg"
            toggled={isNavbarOpen} // Utilise l'état global
            toggle={toggleNavbar} // Appelle la fonction du contexte
          />
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-90 transition-all duration-500 ease-in-out flex justify-center items-center z-[1000] ${
            isNavbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleNavbar}
        >
          <div
            className="text-right w-[65%] md:w-[30%] pr-[0PX] md:pr-[50PX] pt-[25PX]"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="list-none">
              <li>
                <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="full-frame-and-medium-format"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Full Frame & Medium Format
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="commissions"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Commissions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="places"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Places
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="exhibitions"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Exhibitions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="music"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Music
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="archives"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Archives
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
