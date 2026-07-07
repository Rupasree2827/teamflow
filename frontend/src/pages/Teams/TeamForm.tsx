import { useState } from "react";

interface TeamFormProps {
  onCreate: (name: string, description: string) => void;
}

function TeamForm({ onCreate }: TeamFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;

    onCreate(name, description);

    setName("");
    setDescription("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-5">
        Create Team
      </h2>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Team Name"
          className="border rounded-xl p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border rounded-xl p-3"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700"
        >
          Create Team
        </button>
      </div>
    </div>
  );
}

export default TeamForm;