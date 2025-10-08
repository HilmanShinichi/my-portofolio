import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "../../molecules";

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "education",
        "contact",
      ];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-green-400 logo-glow flex-shrink-0">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 flex-1 justify-center max-w-2xl">
            <NavLink
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              isActive={activeSection === "home"}
            >
              Home
            </NavLink>
            <NavLink
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              isActive={activeSection === "projects"}
            >
              Projects
            </NavLink>
            <NavLink
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              isActive={activeSection === "skills"}
            >
              Skills
            </NavLink>
            <NavLink
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
              isActive={activeSection === "education"}
            >
              Education
            </NavLink>
            <NavLink
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              isActive={activeSection === "contact"}
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-400 hover:text-green-300 transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 w-full bg-black border-t border-green-500 border-opacity-30 shadow-lg z-40">
            <nav className="flex flex-col space-y-3 p-4">
              <NavLink
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                isActive={activeSection === "home"}
              >
                Home
              </NavLink>
              <NavLink
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("education");
                }}
                isActive={activeSection === "education"}
              >
                Education
              </NavLink>
              <NavLink
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                isActive={activeSection === "projects"}
              >
                Projects
              </NavLink>
              <NavLink
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
                isActive={activeSection === "skills"}
              >
                Skills
              </NavLink>
              <NavLink
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                isActive={activeSection === "contact"}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
