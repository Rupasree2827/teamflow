import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
  onDelete: (id: string) => void;
  onEdit: (project: Project) => void;
}

function ProjectList({
  projects,
  onDelete,
  onEdit,
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
        No Projects Found
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProjectList;