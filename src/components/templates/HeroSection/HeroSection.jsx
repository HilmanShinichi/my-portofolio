import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Text, Button } from "../../atoms";
import { profile } from "../../../assets";

const HeroSection = ({ scrollY, scrollToSection }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full-Stack Developer",
    "React Specialist",
    "Node.js Developer",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
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

  const opacity = Math.max(1 - scrollY / 600, 0);
  const translateY = scrollY * 0.3;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950"
      style={{ transform: `translateY(${translateY}px)`, opacity }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-soft" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-[120px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">
                  Available for work
                </span>
              </div>

              <Text variant="h1" className="mb-4">
                Hilman Septiana
              </Text>

              <div className="text-xl sm:text-2xl md:text-3xl mb-6 h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <span className="text-slate-500 dark:text-slate-400">
                  I'm a{" "}
                </span>
                <span className="ml-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-bold font-mono">
                  {text}
                  <span className="inline-block w-0.5 h-6 sm:h-7 bg-indigo-400 ml-0.5 align-middle animate-blink" />
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Crafting performant web applications with modern technologies.
                3+ years of experience building scalable full-stack solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <Button
                  variant="primary"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {[
                  {
                    href: "https://github.com/HilmanShinichi",
                    icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/hilman-septiana/",
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:hilman_septiana@rocketmail.com",
                    icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon
                      size={20}
                      className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-soft" />
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full opacity-20" />

              {/* Photo Container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700/50 shadow-2xl shadow-indigo-500/10">
                <img
                  src={profile}
                  alt="Hilman Septiana"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-white">
                      3+ Years
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-400">
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("projects")}
          className="p-2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
