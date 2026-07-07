import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import EditTaskModal from "./EditTaskModal";
import toast from "react-hot-toast";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../../services/task.service";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
}

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] =
    useState<Task | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateTask = async (
    title: string,
    projectId: string,
    assignedToId: string,
    description: string
  ) => {
    try {
      await createTask(
        title,
        projectId,
        assignedToId,
        description
      );

      toast.success("Task Created Successfully!");

      loadTasks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create task.");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);

      toast.success("Task Deleted Successfully!");

      loadTasks();
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Failed to delete task."
      );

      // alert(
      //   error.response?.data?.message ||
      //     "Failed to delete task."
      // );
    }
  };

  const handleUpdateTask = async (
    id: string,
    title: string,
    description: string
  ) => {
    try {
      await updateTask(id, title, description);

      toast.success("Task Updated Successfully!");

      setIsEditOpen(false);
      setSelectedTask(null);

      loadTasks();
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update task."
      );
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          ✅ Tasks
        </h1>

        <p className="text-gray-500 mt-2">
          Total Tasks: {tasks.length}
        </p>

        <p className="text-gray-500">
          Create and manage your tasks.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search Task..."
          className="w-full md:w-96 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <TaskForm onCreate={handleCreateTask} />

      <TaskList
        tasks={filteredTasks}
        onDelete={handleDelete}
        onEdit={(task) => {
          setSelectedTask(task);
          setIsEditOpen(true);
        }}
      />

      <EditTaskModal
        isOpen={isEditOpen}
        task={selectedTask}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedTask(null);
        }}
        onSave={handleUpdateTask}
      />
    </MainLayout>
  );
}

export default Tasks;