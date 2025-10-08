import React, { useState, useEffect } from "react";
import { HeroSection, EducationSection } from "./components/templates";
import "./styles/globals.css";

// Import komponen yang belum dipindahkan (akan dipindahkan secara bertahap)
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Briefcase,
  Settings,
} from "lucide-react";

// Atoms (inline sementara, akan dipindahkan)
const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold neon-glow-hover neon-glow-active",
    secondary:
      "border-2 border-green-500 text-green-400 hover:bg-opacity-10 hover:bg-green-500 neon-border-glow",
    ghost: "text-green-400 hover:text-green-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Text = ({ children, variant = "body", className = "" }) => {
  const variants = {
    h1: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent",
    h2: "text-4xl md:text-5xl font-bold text-green-400",
    h3: "text-2xl md:text-3xl font-semibold text-green-300",
    body: "text-lg text-gray-300",
    small: "text-sm text-gray-400",
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};

// Molecules (inline sementara, akan dipindahkan)
const NavLink = ({ href, children, onClick, isActive = false }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-green-400 hover:text-green-300 transition-all duration-300 font-medium nav-link-glow relative ${
      isActive ? "text-green-300" : ""
    }`}
  >
    {children}
    {isActive && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 nav-underline"></div>
    )}
  </a>
);

const ProjectCard = ({ title, description, tags }) => (
  <div className="group bg-black border-2 border-green-500 border-opacity-30 rounded-2xl overflow-hidden project-card transition-all duration-500 transform hover:-translate-y-2">
    <div className="h-48 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="text-green-400" size={24} />
      </div>
    </div>
    <div className="p-6">
      <Text variant="h3" className="mb-2">
        {title}
      </Text>
      <Text variant="body" className="mb-4">
        {description}
      </Text>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-50 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Komponen yang masih belum dipindahkan (akan dipindahkan selanjutnya)

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team features.",
      tags: ["Vue.js", "Firebase", "Tailwind"],
    },
    {
      title: "Portfolio CMS",
      description:
        "Headless CMS for managing portfolio content with a modern admin interface.",
      tags: ["Next.js", "Strapi", "PostgreSQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <Text
          variant="h2"
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Featured Projects
        </Text>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeline = [
    {
      year: "2023 - Present",
      title: "Junior Developer",
      company: "PT PhinCon",
      type: "it",
      description:
        "Working on various web development projects, focusing on both front-end and back-end technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      projects: [
        {
          name: "RaiseCall",
          description:
            "I worked on the Raisecall project, a web-based platform for human resource management and customer-agent interaction. Theplatform integrates modern communication channels such as Facebook, Instagram, WhatsApp, Email, and others. In addition to social media channels, it also includes non-social media features like voice call support.",
          technologies: [
            "React.js",
            "Node.js",
            "MySQL",
            "Redis",
            "Nest.js",
            "Socket.io",
            "GitLab",
          ],
          period: "December 2024 - Present",
        },
        {
          name: "Telkomsel Digital World",
          description:
            "Contributed to the development of Telkomsel's digital platform, enhancing user experience and implementing new features to support business growth.",
          technologies: [
            "React.js",
            "Node.js",
            "MySQL",
            "Redis",
            "AWS",
            "Docker",
            "Jenkins",
            "GitLab",
          ],
          period: "October 2023 - December 2024",
        },
        {
          name: "Good Doctor Technology",
          description:
            "Developed and maintained features for Good Doctor's telemedicine platform, enhancing user admin engagement and satisfaction.",
          technologies: [
            "TypeScript",
            "Node.js",
            "Next.js",
            "React.js",
            "RTK Query",
            "GitLab",
          ],
          period: "July 2023 - October 2023",
        },
      ],
      skills: [
        "React.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Nest.js",
        "mySQL",
        "PostgreSQL",
        "MongoDB",
        "Git Version Control",
        "Golang",
      ],
    },
    {
      year: "2019 - 2022",
      title: "Operator Welding Robot",
      company: "PT Nugerah Cipta",
      type: "non-it",
      description:
        "Operated and maintained robotic welding systems in a manufacturing environment. Ensured quality and efficiency in production processes.",
      skills: [
        "Robotics Programming",
        "Lean Manufacturing",
        "Quality Control",
        "Team Leadership",
        "Process Optimization",
        "Safety Management",
      ],
    },
    {
      year: "2019 - 2022",
      title: "Operator Injection Molding",
      company: "PT. Yasunli Abadi Utama Plastics",
      type: "non-it",
      description:
        "Operated injection molding machines to produce plastic components. Monitored production processes and maintained quality standards.",
      skills: [
        "MIG Welding",
        "TIG Welding",
        "Blueprint Reading",
        "Metal Fabrication",
        "Safety Protocols",
      ],
    },
    {
      year: "2015 - 2017",
      title: "Operator Production",
      company: "PT Astra Honda Motor",
      type: "non-it",
      description:
        "Key Responsibilities: Assemble motorcycle parts and components according to production procedures and work instructions. Ensure each product meets quality and safety standards before moving to the next process. Operate production tools and equipment properly and safely. Identify and report any defects, irregularities, or issues in the production line. Maintain cleanliness and orderliness in the workstation (5S implementation). Follow company safety regulations and contribute to continuous improvement activities.",
      skills: [
        "Assembly Line Operations",
        "Quality Inspection",
        "Production Planning",
        "Equipment Troubleshooting",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <Text
          variant="h2"
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Professional Journey
        </Text>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <TimelineItem {...item} isLast={idx === timeline.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-40" />

      <div
        className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Text variant="h2" className="text-white mb-6 contact-title-glow">
          Let's Work Together
        </Text>
        <Text
          variant="body"
          className="text-green-100 mb-8 max-w-2xl mx-auto text-xl"
        >
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </Text>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Button
            variant="secondary"
            className="bg-black text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
          >
            Get In Touch
          </Button>
        </div>

        <div
          className={`mt-12 flex justify-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#"
            className="hover:scale-110 transition-transform text-green-400 contact-icon"
          >
            <Github size={28} />
          </a>
          <a
            href="#"
            className="hover:scale-110 transition-transform text-green-400 contact-icon"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="#"
            className="hover:scale-110 transition-transform text-green-400 contact-icon"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Main App
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

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background-color: #000;
          margin: 0;
          padding: 0;
          padding-top: 0;
        }
        
        /* Ensure sections don't get hidden behind fixed header */
        section {
          scroll-margin-top: 80px;
        }
        
        /* Animated Blobs */
        .blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: #22c55e;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          mix-blend-mode: screen;
          animation: blob 7s infinite;
        }
        
        .blob-1 {
          top: 80px;
          left: 40px;
        }
        
        .blob-2 {
          top: 160px;
          right: 40px;
          background: #10b981;
          animation-delay: 2s;
        }
        
        .blob-3 {
          bottom: 80px;
          left: 50%;
          background: #059669;
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        /* Fade In Animation */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        /* Neon Glow Effects */
        .neon-glow-hover:hover {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }
        
        .neon-glow-active:active {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.9);
          animation: pulse-neon 0.3s ease-in-out;
        }
        
        .neon-border-glow:hover {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
        }
        
        .neon-border-glow:active {
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.8);
        }
        
        @keyframes pulse-neon {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.5); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.8); }
        }
        
        /* Navigation Link Glow */
        .nav-link-glow:hover {
          filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.8));
        }
        
        /* Navigation Responsive */
        @media (max-width: 768px) {
          .nav-link-glow {
            font-size: 1rem;
            padding: 0.5rem 0;
            display: block;
            width: 100%;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-link-glow {
            font-size: 0.875rem;
          }
        }
        
        /* Navigation Active Underline */
        .nav-underline {
          animation: slideIn 0.3s ease-out;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
        }
        
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        
        /* Logo Glow */
        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8));
        }
        
        /* Hero Title Glow */
        .hero-title-glow {
          filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.5));
        }
        
        /* Chevron Glow */
        .chevron-glow {
          filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8));
        }
        
        /* Header Scrolled */
        .header-scrolled {
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }
        
        /* Ensure header stays on top and full width */
        header {
          width: 100vw !important;
          left: 0 !important;
          right: 0 !important;
        }
        
        
        /* Social Icons */
        .social-icon:hover {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
        }
        
        /* Project Cards */
        .project-card {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }
        
        .project-card:hover {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
        }
        
        /* Skill Badges */
        .skill-badge {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
        }
        
        .skill-badge:hover {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }
        
        .skill-bar {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
        }
        
        /* Timeline Styles */
        .timeline-dot {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }
        
        .timeline-dot:hover {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.8);
        }
        
        /* Blue timeline dots for non-IT */
        .timeline-dot.blue {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
        }
        
        .timeline-dot.blue:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
        
        .timeline-line {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);
        }
        
        /* Blue timeline lines for non-IT */
        .timeline-line.blue {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
        }
        
        .timeline-card {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
          transition: all 0.3s ease;
        }
        
        .timeline-card:hover {
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
          transform: translateY(-5px);
        }
        
        /* Blue timeline cards for non-IT */
        .timeline-card.blue {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }
        
        .timeline-card.blue:hover {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
          transform: translateY(-5px);
        }

        /* Education Cards */
        .education-card {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
          transition: all 0.3s ease;
        }
        
        .education-card:hover {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
          transform: translateY(-5px);
        }

        /* Contact Section */
        .contact-title-glow {
          filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.5));
        }
        
        .contact-icon:hover {
          filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8));
        }
      `}</style>
    </div>
  );
};

export default App;
