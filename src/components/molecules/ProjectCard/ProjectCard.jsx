import { ExternalLink } from "lucide-react";
import { Text } from "../../atoms";

const ProjectCard = ({ title, description, tags }) => (
  <div className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5">
    {/* Card Header Gradient */}
    <div className="h-44 bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-purple-600/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.3),transparent_70%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-bold text-indigo-600/10 dark:text-white/5 group-hover:text-indigo-600/20 dark:group-hover:text-white/10 transition-colors duration-500">
          {title.charAt(0)}
        </span>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
          <ExternalLink className="text-white" size={18} />
        </div>
      </div>
    </div>

    {/* Card Body */}
    <div className="p-6">
      <Text
        variant="h3"
        className="mb-3 group-hover:text-indigo-300 transition-colors duration-300"
      >
        {title}
      </Text>
      <Text
        variant="body"
        className="mb-5 text-slate-400 text-sm sm:text-base line-clamp-3"
      >
        {description}
      </Text>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 rounded-lg text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
