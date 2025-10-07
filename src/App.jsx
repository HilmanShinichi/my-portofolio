import React, { useState, useEffect } from "react";
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

// Atoms
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

// Molecules
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

const TimelineItem = ({
  year,
  title,
  company,
  description,
  skills,
  type = "it", // "it" or "non-it"
  isLast = false,
}) => {
  const getTypeConfig = () => {
    if (type === "it") {
      return {
        icon: <Code size={20} className="text-white" />,
        dotColor: "from-green-500 to-emerald-600",
        borderColor: "border-green-500",
        skillColor: "bg-green-500 border-green-500 text-green-400",
        lineColor: "from-green-500",
        label: "Programming Languages & Tools",
      };
    } else {
      return {
        icon: <Settings size={20} className="text-white" />,
        dotColor: "from-blue-500 to-indigo-600",
        borderColor: "border-blue-500",
        skillColor: "bg-blue-500 border-blue-500 text-blue-400",
        lineColor: "from-blue-500",
        label: "Technical Skills & Equipment",
      };
    }
  };

  const config = getTypeConfig();

  return (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      {!isLast && (
        <div
          className={`absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b ${config.lineColor} to-transparent timeline-line`}
        ></div>
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${config.dotColor} rounded-full flex items-center justify-center timeline-dot group-hover:scale-110 transition-transform duration-300`}
        >
          {config.icon}
        </div>
      </div>

      {/* Content */}
      <div className="ml-6 pb-12 flex-1">
        <div
          className={`bg-black border-2 ${config.borderColor} border-opacity-30 rounded-xl p-6 timeline-card group-hover:border-opacity-60 transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <div className="flex items-center gap-3">
              <Text variant="h3" className="text-green-300 mb-1 md:mb-0">
                {title}
              </Text>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  type === "it"
                    ? "bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-50"
                    : "bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-50"
                }`}
              >
                {type === "it" ? "IT" : "Non-IT"}
              </span>
            </div>
            <span className="text-green-400 font-semibold text-lg">{year}</span>
          </div>

          {company && (
            <Text variant="body" className="text-green-400 mb-3 font-medium">
              {company}
            </Text>
          )}

          <Text variant="body" className="mb-4 text-gray-300">
            {description}
          </Text>

          {skills && skills.length > 0 && (
            <div>
              <Text variant="small" className="text-gray-400 mb-2 font-medium">
                {config.label}:
              </Text>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 ${config.skillColor} bg-opacity-20 border border-opacity-50 rounded-full text-sm hover:bg-opacity-30 transition-colors duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Organisms
const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "projects",
        "skills",
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

const HeroSection = ({ scrollY, scrollToSection }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Web Designer",
    "Frontend Expert",
  ];

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
              John Doe
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

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("education");
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

  const educationHistory = [
    {
      year: "2017 - 2021",
      degree: "Bachelor of Computer Science",
      university: "Universitas Panca Sakti Bekasi",
      location: "Bekasi, Indonesia",
      gpa: "3.25 / 4.00",
      achievements: ["Member of Computer Science Student Association"],
      description:
        "Focused on Software Engineering and Web Development. Completed capstone project on developing a scalable platform using microservices architecture.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <Text
          variant="h2"
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Education History
        </Text>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="bg-gray-900 border-2 border-green-500 border-opacity-30 rounded-2xl p-8 education-card hover:border-opacity-60 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <Text variant="h3" className="mb-2">
                      {edu.degree}
                    </Text>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={18} className="text-green-400" />
                      <Text
                        variant="body"
                        className="text-green-400 font-semibold"
                      >
                        {edu.university}
                      </Text>
                    </div>
                    <Text variant="small" className="text-gray-400">
                      {edu.location}
                    </Text>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <span className="inline-block px-4 py-2 bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-50 rounded-lg font-semibold mb-2">
                      {edu.year}
                    </span>
                    <div className="text-green-300 font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <Text variant="body" className="mb-4 text-gray-300">
                  {edu.description}
                </Text>

                <div>
                  <Text
                    variant="small"
                    className="text-gray-400 mb-3 font-medium"
                  >
                    Achievements & Activities:
                  </Text>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      year: "2022 - Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Corp",
      type: "it",
      description:
        "Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting cloud-based solutions.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "Docker", "Python"],
    },
    {
      year: "2020 - 2022",
      title: "Production Supervisor",
      company: "Manufacturing Solutions Inc",
      type: "non-it",
      description:
        "Supervised production line operations, managed quality control processes, and led a team of 15 operators. Implemented lean manufacturing principles and reduced waste by 25%.",
      skills: [
        "Lean Manufacturing",
        "Quality Control",
        "Team Leadership",
        "Process Optimization",
        "Safety Management",
      ],
    },
    {
      year: "2018 - 2020",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      type: "it",
      description:
        "Developed responsive user interfaces and improved application performance by 40%. Collaborated with UX/UI designers to create seamless user experiences.",
      skills: ["Vue.js", "JavaScript", "SASS", "Webpack", "Jest", "HTML/CSS"],
    },
    {
      year: "2016 - 2018",
      title: "Welding Operator",
      company: "Steel Works Corporation",
      type: "non-it",
      description:
        "Performed MIG and TIG welding operations on structural steel components. Maintained welding equipment and ensured compliance with safety standards.",
      skills: [
        "MIG Welding",
        "TIG Welding",
        "Blueprint Reading",
        "Metal Fabrication",
        "Safety Protocols",
      ],
    },
    {
      year: "2015 - 2016",
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      type: "it",
      description:
        "Built and maintained company websites using modern frameworks. Gained experience in full-stack development and agile methodologies.",
      skills: ["HTML/CSS", "jQuery", "PHP", "MySQL", "Bootstrap", "WordPress"],
    },
    {
      year: "2013 - 2015",
      title: "Machine Operator",
      company: "Industrial Manufacturing Co",
      type: "non-it",
      description:
        "Operated CNC machines and production equipment. Performed routine maintenance and quality inspections. Achieved 99% uptime efficiency rate.",
      skills: [
        "CNC Operation",
        "Machine Maintenance",
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
