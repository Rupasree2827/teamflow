import { useEffect, useState } from "react";
import {
  getProjects,
  getTasks,
  getTeams,
} from "../../services/dashboard.service";

import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/StatCard";
import ProjectChart from "../../components/ProjectChart";
import WelcomeBanner from "../../components/WelcomeBanner";
import RecentActivity from "../../components/RecentActivity";
import QuickActions from "../../components/QuickActions";

import {
  Users,
  FolderKanban,
  CheckSquare,
} from "lucide-react";

function Dashboard() {
  const [teams, setTeams] = useState(0);
const [projects, setProjects] = useState(0);
const [tasks, setTasks] = useState(0);

const [pendingTasks, setPendingTasks] = useState(0);
const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const teamsRes = await getTeams();
        const projectsRes = await getProjects();
        const tasksRes = await getTasks();

        setTeams(teamsRes.data.length);
        setProjects(projectsRes.data.length);
        setTasks(tasksRes.data.length);

setPendingTasks(
  tasksRes.data.filter(
    (task: any) => task.status !== "DONE"
  ).length
);

setCompletedTasks(
  tasksRes.data.filter(
    (task: any) => task.status === "DONE"
  ).length
);


      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    <MainLayout>
        <WelcomeBanner />
      <div className="relative overflow-hidden rounded-3xl mb-8">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700"></div>

  {/* Blur Effect */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>

  <div className="relative p-10 flex flex-col lg:flex-row justify-between items-center">

    <div>

      <p className="text-indigo-200 uppercase tracking-widest text-sm">
        TEAMFLOW DASHBOARD
      </p>

      <h1 className="text-5xl font-extrabold text-white mt-3">
        👋 Welcome Back,
      </h1>

      <h2 className="text-4xl font-bold text-cyan-200 mt-2">
        Rupasree
      </h2>

      <p className="text-indigo-100 mt-5 text-lg max-w-xl">
        Manage your teams, projects and tasks from
        one beautiful workspace.
      </p>

    </div>

    <div className="mt-8 lg:mt-0">

      <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 border border-white/20">

        <h3 className="text-white text-xl font-semibold">
          🚀 Workspace Overview
        </h3>

        <p className="text-indigo-100 mt-3">
          Everything is up-to-date.
        </p>

        <div className="flex gap-8 mt-6">

          <div>
            <p className="text-cyan-300 text-3xl font-bold">
              {teams}
            </p>

            <span className="text-white text-sm">
              Teams
            </span>
          </div>

          <div>
            <p className="text-green-300 text-3xl font-bold">
              {projects}
            </p>

            <span className="text-white text-sm">
              Projects
            </span>
          </div>

          <div>
            <p className="text-yellow-300 text-3xl font-bold">
              {tasks}
            </p>

            <span className="text-white text-sm">
              Tasks
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatCard
          title="Teams"
          value={teams}
          color="bg-blue-100"
          icon={<Users className="text-blue-600" />}
        />

        <StatCard
          title="Projects"
          value={projects}
          color="bg-green-100"
          icon={<FolderKanban className="text-green-600" />}
        />

        <StatCard
          title="Tasks"
          value={tasks}
          color="bg-purple-100"
          icon={<CheckSquare className="text-purple-600" />}
        />
        <StatCard
  title="Pending"
  value={pendingTasks}
  color="bg-yellow-100"
  icon={<CheckSquare className="text-yellow-600" />}
/>

<StatCard
  title="Completed"
  value={completedTasks}
  color="bg-emerald-100"
  icon={<CheckSquare className="text-emerald-600" />}
/>
      </div>

      {/* Chart */}
      <ProjectChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
  <RecentActivity />
  <QuickActions />
</div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            📋 Recent Tasks
          </h2>

          <ul className="space-y-3">
            <li>✅ Design Login Page</li>
            <li>🚀 Build Dashboard</li>
            <li>📁 Create Project Module</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            📁 Recent Projects
          </h2>

          <ul className="space-y-3">
            <li>🚀 TeamFlow</li>
            <li>🛠 Complaint Management System</li>
            <li>🤖 AI Fake Review Detection</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;