import React, { useState, useEffect } from "react";
import { Text } from "../../atoms";
import { ProjectCard } from "../../molecules";

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
      title: "RaiseCall",
      description:
        "A web-based platform for human resource management and customer-agent interaction. Integrates communication channels like Facebook, Instagram, WhatsApp, Email with voice call support.",
      tags: [
        "Next.js",
        "Node.js",
        "MySQL",
        "TypeScript",
        "Socket.io",
        "NestJS",
      ],
    },
    {
      title: "Quiz Trivia App",
      description:
        "Interactive quiz application for Telkomsel with real-time scoring, live leaderboards, and user authentication system.",
      tags: ["Express.js", "React.js", "JavaScript", "Socket.io", "MySQL"],
    },
    {
      title: "Admin CMS",
      description:
        "Content management system for managing website content with role-based access control and component library documentation.",
      tags: ["Next.js", "React.js", "TypeScript", "Storybook", "Node.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative"
    >
      {/* Section background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3"></p>
          <Text variant="h2" className="mb-4">
            Featured Projects
          </Text>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            A selection of projects I've worked on, showcasing my experience
            with modern web technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
