import React, { useState, useEffect } from "react";
import { Header } from "./components/organism";
import {
  HeroSection,
  ProjectsSection,
  ExpertiseSection,
  EducationSection,
  ContactSection,
} from "./components/templates";
import "./styles/globals.css";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased min-h-screen transition-colors duration-300">
      <Header
        scrolled={scrolled}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />
      <ProjectsSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Hilman Septiana. Built with React
            & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
