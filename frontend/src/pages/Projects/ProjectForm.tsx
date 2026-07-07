import { useEffect, useState } from "react";
import { getTeams } from "../../services/team.service";
import toast from "react-hot-toast";

interface Team {
  id: string;
  name: string;
}

interface ProjectFormProps {
  onCreate: (
    name: string,
    description: string,
    teamId: string
  ) => void;
}

function ProjectForm({ onCreate }: ProjectFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamId, setTeamId] = useState("");

  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      const response = await getTeams();
      setTeams(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    if (!name || !teamId) {
      toast.error("Project Name and Team are required");
      return;
    }

    onCreate(name, description, teamId);

    setName("");
    setDescription("");
    setTeamId("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-5">
        Create Project
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          placeholder="Project Name"
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

        <select
          className="border rounded-xl p-3"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        >
          <option value="">
            Select Team
          </option>

          {teams.map((team) => (
            <option
              key={team.id}
              value={team.id}
            >
              {team.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700"
        >
          Create Project
        </button>

      </div>
    </div>
  );
}

export default ProjectForm;