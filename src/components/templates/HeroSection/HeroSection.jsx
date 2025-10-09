import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Text } from "../../atoms";

const HeroSection = ({ scrollY, scrollToSection }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full-Stack Developer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const translateY = scrollY * 0.5;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      style={{ transform: `translateY(${translateY}px)`, opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <div className="text-left animate-fade-in">
            <p className="text-green-400 text-lg mb-4">Hello, It's Me</p>
            <Text variant="h1" className="mb-6 hero-title-glow text-left">
              Hilman Septiana
            </Text>
            <div className="text-2xl md:text-4xl mb-8 h-16">
              <span className="text-gray-300">And I'm a </span>
              <span className="text-green-400 font-bold typing-text">
                {text}
                <span className="border-r-2 border-green-400 animate-blink"></span>
              </span>
            </div>
            <Text variant="body" className="mb-8 max-w-xl">
              I am a web designer with over 3 years of extensive experience. My
              expertise includes website creation and design, front-end and
              back-end design, and much more...
            </Text>
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/HilmanShinichi"
                className="social-icon-circle"
              >
                <Github size={20} color="green" />
              </a>
              <a
                href="https://www.linkedin.com/in/hilman-septiana/"
                className="social-icon-circle"
              >
                <Linkedin size={20} color="green" />
              </a>
              <a
                href="mailto:hilman_septiana@rocketmail.com"
                className="social-icon-circle"
              >
                <Mail size={20} color="green" />
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="profile-photo-ring"></div>
              <div className="profile-photo-container">
                <div className="profile-photo-placeholder">
                  <img
                    src="/src/assets/images/profile.png"
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-green-400 chevron-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
