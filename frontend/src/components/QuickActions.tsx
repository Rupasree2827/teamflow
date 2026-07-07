import {
  PlusCircle,
  FolderPlus,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid gap-4">

        <button
          onClick={() => navigate("/teams")}
          className="bg-indigo-600 hover:bg-indigo-700 transition text-white p-3 rounded-xl flex items-center gap-3"
        >
          <Users size={20} />
          Create Team
        </button>

        <button
          onClick={() => navigate("/projects")}
          className="bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-xl flex items-center gap-3"
        >
          <FolderPlus size={20} />
          Create Project
        </button>

        <button
          onClick={() => navigate("/tasks")}
          className="bg-purple-600 hover:bg-purple-700 transition text-white p-3 rounded-xl flex items-center gap-3"
        >
          <PlusCircle size={20} />
          Create Task
        </button>

      </div>
    </div>
  );
}

export default QuickActions;