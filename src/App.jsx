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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-black">
      <Header scrolled={scrolled} />
      <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />
      <ProjectsSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default App;
