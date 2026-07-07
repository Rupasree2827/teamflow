import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";
import EditTeamModal from "./EditTeamModal";
import toast from "react-hot-toast";

import {
  getTeams,
  createTeam,
  deleteTeam,
  updateTeam,
} from "../../services/team.service";

interface Team {
  id: string;
  name: string;
  description: string;
}

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [search, setSearch] = useState("");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

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

  const handleCreateTeam = async (
    name: string,
    description: string
  ) => {
    try {
      await createTeam(name, description);

      toast.success("Team Created Successfully!");

      loadTeams();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create team.");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTeam(id);

      alert("✅ Team Deleted Successfully!");

      loadTeams();
    } catch (error: any) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete team."
      );
    }
  };

  const handleUpdateTeam = async (
    id: string,
    name: string,
    description: string
  ) => {
    try {
      await updateTeam(id, name, description);

      alert("✅ Team Updated Successfully!");

      setIsEditOpen(false);
      setSelectedTeam(null);

      loadTeams();
    } catch (error: any) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update team."
      );
    }
  };

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">👥 Teams</h1>

        <p className="text-gray-500 mt-2">
          Total Teams: {teams.length}
        </p>

        <p className="text-gray-500">
          Create and manage your teams.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search Team..."
          className="w-full md:w-96 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TeamForm onCreate={handleCreateTeam} />

      <TeamList
        teams={filteredTeams}
        onDelete={handleDelete}
        onEdit={(team) => {
          setSelectedTeam(team);
          setIsEditOpen(true);
        }}
      />

      <EditTeamModal
        isOpen={isEditOpen}
        team={selectedTeam}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedTeam(null);
        }}
        onSave={handleUpdateTeam}
      />
    </MainLayout>
  );
}

export default Teams;