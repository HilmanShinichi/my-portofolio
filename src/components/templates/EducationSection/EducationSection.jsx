import React, { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import { Text } from "../../atoms";

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

export default EducationSection;
