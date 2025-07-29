import { useEffect, useCallback } from "react";
import { navLinks } from "../data/navData";

const Navbar = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    }
  }, [closeMobileMenu]);

  const renderLinks = (isMobile = false) =>
    navLinks.map(({ label, href }) => (
      <a
        key={href}
        href={href}
        onClick={(e) => handleNavClick(e, href)}
        className={`transition-colors duration-300 ${
          isMobile ? "block px-3 py-2" : "hover:text-orange-light"
        }`}
      >
        {label}
      </a>
    ));

  return (
    <nav className="fixed w-full z-50 bg-green-deep/90 backdrop-blur-sm border-b border-orange-light/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/icon.webp" 
              alt="MangaLab Icon" 
              className="h-10 w-10 " 
            />
            <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-orange-vibrant to-orange-light bg-clip-text text-transparent">
              Manga<span className="text-white">Lab</span>
            </span>
          </div>

          <div className="hidden md:flex ml-10 space-x-8 items-baseline">
            {renderLinks()}
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 ${
              mobileMenuOpen ? "active" : ""
            }`}
            aria-label="Toggle menu"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className="w-6 h-0.5 bg-white transition-all duration-300"
              />
            ))}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-green-deep/95 backdrop-blur-sm transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">{renderLinks(true)}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
