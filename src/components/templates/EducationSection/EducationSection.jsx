import React, { useState, useEffect } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";
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
    <section
      id="education"
      className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative"
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
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3"></p>
          <Text variant="h2" className="mb-4">
            Education
          </Text>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            My academic foundation in Computer Science.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 hover:-translate-y-0.5">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <GraduationCap size={20} className="text-white" />
                      </div>
                      <Text variant="h3" className="!text-lg sm:!text-xl">
                        {edu.degree}
                      </Text>
                    </div>
                    <p className="text-indigo-600 dark:text-indigo-300/80 font-medium text-sm mb-1">
                      {edu.university}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-sm">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                    <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-sm font-semibold">
                      {edu.year}
                    </span>
                    <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-sm font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Activities
                  </p>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm"
                      >
                        <Award
                          size={14}
                          className="text-indigo-400 flex-shrink-0"
                        />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
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
