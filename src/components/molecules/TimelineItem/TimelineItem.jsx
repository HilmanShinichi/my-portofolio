import { Code, Settings } from "lucide-react";
import { Text } from "../../atoms";

const TimelineItem = ({
  year,
  title,
  company,
  description,
  skills,
  projects, // Array of projects for IT companies
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
        projectColor: "bg-emerald-500 border-emerald-500 text-emerald-300",
        lineColor: "from-green-500",
        label: "Programming Languages & Tools",
      };
    } else {
      return {
        icon: <Settings size={20} className="text-white" />,
        dotColor: "from-blue-500 to-indigo-600",
        borderColor: "border-blue-500",
        skillColor: "bg-blue-500 border-blue-500 text-blue-400",
        projectColor: "bg-cyan-500 border-cyan-500 text-cyan-300",
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

          {/* Projects Section for IT companies */}
          {projects && projects.length > 0 && type === "it" && (
            <div className="mb-6">
              <Text variant="small" className="text-gray-400 mb-3 font-medium">
                Projects:
              </Text>
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 border border-green-500 border-opacity-20 rounded-lg p-4 hover:border-opacity-40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Text
                        variant="body"
                        className="text-green-300 font-semibold"
                      >
                        {project.name}
                      </Text>
                      {project.period && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500 bg-opacity-20 text-emerald-400 border border-emerald-500 border-opacity-50">
                          {project.period}
                        </span>
                      )}
                    </div>
                    <Text variant="small" className="text-gray-300 mb-3">
                      {project.description}
                    </Text>
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className={`px-2 py-1 ${config.projectColor} bg-opacity-15 border border-opacity-40 rounded-md text-xs`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          )}

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

export default TimelineItem;