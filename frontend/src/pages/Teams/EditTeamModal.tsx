import { useEffect, useState } from "react";

interface Team {
  id: string;
  name: string;
  description: string;
}

interface EditTeamModalProps {
  isOpen: boolean;
  team: Team | null;
  onClose: () => void;
  onSave: (
    id: string,
    name: string,
    description: string
  ) => void;
}

function EditTeamModal({
  isOpen,
  team,
  onClose,
  onSave,
}: EditTeamModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (team) {
      setName(team.name);
      setDescription(team.description || "");
    }
  }, [team]);

  if (!isOpen || !team) return null;

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Team name is required.");
      return;
    }

    onSave(team.id, name, description);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[500px] p-6">

        <h2 className="text-2xl font-bold mb-6">
          ✏️ Edit Team
        </h2>

        <div className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Team Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-xl p-3"
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

export default EditTeamModal;