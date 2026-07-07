import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getProjects } from "../../services/project.service";

interface Project {
  id: string;
  name: string;
}

interface TaskFormProps {
  onCreate: (
    title: string,
    projectId: string,
    assignedToId: string,
    description: string
  ) => void;
}

function TaskForm({ onCreate }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [assignedToId, setAssignedToId] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);

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

  const handleSubmit = () => {
    if (!title || !projectId || !assignedToId) {
      toast.error("Please fill all required fields.");
      return;
    }

    onCreate(
      title,
      projectId,
      assignedToId,
      description
    );

    setTitle("");
    setDescription("");
    setProjectId("");
    setAssignedToId("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">
        Create Task
      </h2>

      <input
        className="border p-3 rounded-lg w-full mb-3"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-3 rounded-lg w-full mb-3"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        className="border p-3 rounded-lg w-full mb-3"
        value={projectId}
        onChange={(e) =>
          setProjectId(e.target.value)
        }
      >
        <option value="">
          Select Project
        </option>

        {projects.map((project) => (
          <option
            key={project.id}
            value={project.id}
          >
            {project.name}
          </option>
        ))}
      </select>

      <input
        className="border p-3 rounded-lg w-full mb-3"
        placeholder="Assigned User ID"
        value={assignedToId}
        onChange={(e) =>
          setAssignedToId(e.target.value)
        }
      />

      <button
        onClick={handleSubmit}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg w-full"
      >
        Create Task
      </button>
    </div>
  );
}

export default TaskForm;