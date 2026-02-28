import { Code, Settings } from "lucide-react";
import { Text } from "../../atoms";

const TimelineItem = ({
  year,
  title,
  company,
  description,
  skills,
  projects,
  type = "it",
  isLast = false,
}) => {
  const isIT = type === "it";
  const accentColor = isIT ? "indigo" : "sky";

  const dotGradient = isIT
    ? "from-indigo-500 to-violet-600"
    : "from-sky-500 to-cyan-600";

  const borderHover = isIT
    ? "hover:border-indigo-500/40"
    : "hover:border-sky-500/40";

  const badgeStyle = isIT
    ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
    : "bg-sky-500/10 text-sky-400 border-sky-500/30";

  const skillStyle = isIT
    ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
    : "bg-sky-500/10 text-sky-300 border-sky-500/20";

  const lineColor = isIT ? "from-indigo-500/50" : "from-sky-500/50";

  return (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      {!isLast && (
        <div
          className={`absolute left-6 top-14 w-px h-[calc(100%-3.5rem)] bg-gradient-to-b ${lineColor} to-transparent dark:to-transparent`}
        />
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${dotGradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {isIT ? (
            <Code size={20} className="text-white" />
          ) : (
            <Settings size={20} className="text-white" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="ml-5 pb-10 flex-1">
        <div
          className={`bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 transition-all duration-300 ${borderHover} hover:shadow-lg hover:shadow-${accentColor}-500/10 dark:hover:shadow-${accentColor}-500/5 hover:-translate-y-0.5`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Text variant="h3" className="!text-lg sm:!text-xl">
                {title}
              </Text>
              <span
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-md border ${badgeStyle}`}
              >
                {isIT ? "IT" : "Non-IT"}
              </span>
            </div>
            <span
              className={`text-sm font-semibold ${isIT ? "text-indigo-400" : "text-sky-400"} whitespace-nowrap`}
            >
              {year}
            </span>
          </div>

          {company && (
            <p
              className={`text-sm font-medium mb-3 ${isIT ? "text-indigo-300/80" : "text-sky-300/80"}`}
            >
              {company}
            </p>
          )}

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Projects for IT */}
          {projects && projects.length > 0 && isIT && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3"></p>
              <div className="space-y-3">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-4 hover:border-indigo-300 dark:hover:border-indigo-500/20 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">
                        {project.name}
                      </p>
                      {project.period && (
                        <span className="text-xs font-medium text-indigo-400/70 whitespace-nowrap">
                          {project.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">
                      {project.description}
                    </p>
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-0.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded-md text-xs"
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

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {isIT ? "Tech Stack" : "Skills & Equipment"}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 ${skillStyle} border rounded-lg text-xs font-medium hover:opacity-80 transition-opacity duration-200`}
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
