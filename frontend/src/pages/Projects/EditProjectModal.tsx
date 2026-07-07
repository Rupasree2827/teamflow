import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface EditProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
  onSave: (
    id: string,
    name: string,
    description: string
  ) => void;
}

function EditProjectModal({
  isOpen,
  project,
  onClose,
  onSave,
}: EditProjectModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description || "");
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Project name is required.");
      return;
    }

    onSave(project.id, name, description);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[500px] p-6">

        <h2 className="text-2xl font-bold mb-6">
          ✏️ Edit Project
        </h2>

        <div className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Project Name
            </label>

            <input
              type="text"
              className="w-full border rounded-xl p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows={4}
              className="w-full border rounded-xl p-3"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditProjectModal;