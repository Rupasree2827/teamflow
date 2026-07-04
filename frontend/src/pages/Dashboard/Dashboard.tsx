import { useEffect, useState } from "react";
import {
  getProjects,
  getTasks,
  getTeams,
} from "../../services/dashboard.service";

function Dashboard() {
  const [teams, setTeams] = useState(0);
  const [projects, setProjects] = useState(0);
  const [tasks, setTasks] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const teamsRes = await getTeams();
        const projectsRes = await getProjects();
        const tasksRes = await getTasks();

        setTeams(teamsRes.data.length);
        setProjects(projectsRes.data.length);
        setTasks(tasksRes.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        📊 TeamFlow Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">👥 Teams</h2>
          <p className="text-5xl font-bold mt-4">{teams}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">📁 Projects</h2>
          <p className="text-5xl font-bold mt-4">{projects}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">✅ Tasks</h2>
          <p className="text-5xl font-bold mt-4">{tasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;