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

export default ExpertiseSection;
