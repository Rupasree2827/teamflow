import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import EditProjectModal from "./EditProjectModal";
import toast from "react-hot-toast";

import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from "../../services/project.service";

interface Project {
  id: string;
  name: string;
  description: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateProject = async (
    name: string,
    description: string,
    teamId: string
  ) => {
    try {
      await createProject(name, description, teamId);

      toast.success("Project Created Successfully!");

      loadProjects();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create project.");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      toast.success("Project Deleted Successfully!");

      loadProjects();
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete project."
      );
    }
  };

  const handleUpdateProject = async (
    id: string,
    name: string,
    description: string
  ) => {
    try {
      await updateProject(id, name, description);

      toast.success("Project Updated Successfully!");

      setIsEditOpen(false);
      setSelectedProject(null);

      loadProjects();
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update project."
      );
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          📁 Projects
        </h1>

        <p className="text-gray-500 mt-2">
          Total Projects: {projects.length}
        </p>

        <p className="text-gray-500">
          Create and manage your projects.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search Project..."
          className="w-full md:w-96 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <ProjectForm onCreate={handleCreateProject} />

      <ProjectList
        projects={filteredProjects}
        onDelete={handleDelete}
        onEdit={(project) => {
          setSelectedProject(project);
          setIsEditOpen(true);
        }}
      />

      <EditProjectModal
        isOpen={isEditOpen}
        project={selectedProject}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedProject(null);
        }}
        onSave={handleUpdateProject}
      />
    </MainLayout>
  );
}

export default Projects;