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
        "a web-based platform for human resource management and customer-agent interaction. The platform integrates modern communication channels such as Facebook, Instagram, WhatsApp, Email, and others. In addition to social media channels, it also includes non-social media features like voice call support.",
      tags: ["Next.js", "Node.js", "MySQL","TypeScript", "Socket.io", "React.js", "NestJS"],
    },
    {
      title: "Quiz Trivia App Telkomsel",
      description:
        "Interactive quiz application with real-time scoring and user authentication.",
      tags: ["Express.js", "React.js", "JavaScript","Socket.io", "MySQL", "Node.js"],
    },
    {
      title: "Admin CMS",
      description:
        "Content management system for managing website content with user roles.",
      tags: ["Next.js", "React.js", "TypeScript","Storybook", "Node.js"],
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

export default ProjectsSection;
