import { ExternalLink } from "lucide-react";
import { Text } from "../../atoms";

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

export default ProjectCard;