import React, { useState, useEffect } from "react";
import { Text } from "../../atoms";
import { TimelineItem } from "../../molecules";

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
            "A web-based platform for human resource management and customer-agent interaction integrating modern communication channels including Facebook, Instagram, WhatsApp, Email, and voice call support.",
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
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Git",
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
        "Assembled motorcycle parts and components according to production procedures. Ensured product quality and safety standards while maintaining cleanliness and implementing 5S methodology.",
      skills: [
        "Assembly Line Operations",
        "Quality Inspection",
        "Production Planning",
        "Equipment Troubleshooting",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/50 relative"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3">
            Career
          </p>
          <Text variant="h2" className="mb-4">
            Professional Journey
          </Text>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            My career path from manufacturing to software development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <TimelineItem {...item} isLast={idx === timeline.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
