import { FolderKanban, Pencil, Trash2 } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  onDelete: (id: string) => void;
  onEdit: (project: Project) => void;
}

function ProjectCard({
  project,
  onDelete,
  onEdit,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-xl">
            <FolderKanban
              className="text-blue-600"
              size={24}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {project.name}
            </h2>

            <p className="text-gray-500 mt-1">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(project)}
            className="bg-yellow-100 hover:bg-yellow-200 p-2 rounded-lg transition"
          >
            <Pencil
              size={18}
              className="text-yellow-700"
            />
          </button>

          <button
            onClick={() => onDelete(project.id)}
            className="bg-red-100 hover:bg-red-200 p-2 rounded-lg transition"
          >
            <Trash2
              size={18}
              className="text-red-600"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;