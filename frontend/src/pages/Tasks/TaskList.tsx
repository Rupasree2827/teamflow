import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

function TaskList({
  tasks,
  onDelete,
  onEdit,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
        No Tasks Found
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;