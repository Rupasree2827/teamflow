import {
  CheckCircle2,
  Pencil,
  Trash2,
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
}

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

function TaskCard({
  task,
  onDelete,
  onEdit,
}: TaskCardProps) {
  const getStatusColor = () => {
    switch (task.status) {
      case "DONE":
        return "bg-green-100 text-green-700";
      case "IN_PROGRESS":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case "HIGH":
        return "bg-red-100 text-red-700";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-xl">
            <CheckCircle2
              className="text-indigo-600"
              size={24}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {task.title}
            </h2>

            <p className="text-gray-500 mt-1">
              {task.description || "No description"}
            </p>

            <div className="flex gap-2 mt-3">

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}
              >
                {task.status}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor()}`}
              >
                {task.priority}
              </span>

            </div>
          </div>
        </div>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(task)}
            className="bg-yellow-100 hover:bg-yellow-200 p-2 rounded-lg transition"
          >
            <Pencil
              size={18}
              className="text-yellow-700"
            />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-100 hover:bg-red-200 p-2 rounded-lg transition"
          >
            <Trash2
              size={18}
              className="text-red-600"
            />
          </button>

        </div>
      </div>
    </div>
  );
}

export default TaskCard;