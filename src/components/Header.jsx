import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150 && top >= -300) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-gray-900/90 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">Priya Duhan</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {sections.map((sec) => (
            <button
              key={sec}
              type="button"
              onClick={() => scrollTo(sec)}
              className={`capitalize transition-colors ${
                active === sec ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400`}
            >
              {sec}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-2 bg-gray-800 border-t border-gray-700">
          {sections.map((sec) => (
            <button
              key={sec}
              type="button"
              onClick={() => scrollTo(sec)}
              className={`block w-full text-left capitalize ${
                active === sec ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400`}
            >
              {sec}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
