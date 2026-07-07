import api from "../api/axios";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get All Tasks
export const getTasks = async () => {
  const response = await api.get(
    "/tasks",
    getAuthHeader()
  );

  return response.data;
};

// Create Task
export const createTask = async (
  title: string,
  projectId: string,
  assignedToId: string,
  description?: string
) => {
  const response = await api.post(
    "/tasks",
    {
      title,
      description,
      projectId,
      assignedToId,
    },
    getAuthHeader()
  );

  return response.data;
};

// Update Task
export const updateTask = async (
  id: string,
  title: string,
  description: string
) => {
  const response = await api.put(
    `/tasks/${id}`,
    {
      title,
      description,
    },
    getAuthHeader()
  );

  return response.data;
};

// Update Task Status
export const updateTaskStatus = async (
  id: string,
  status: string
) => {
  const response = await api.patch(
    `/tasks/${id}/status`,
    {
      status,
    },
    getAuthHeader()
  );

  return response.data;
};

// Delete Task
export const deleteTask = async (
  id: string
) => {
  const response = await api.delete(
    `/tasks/${id}`,
    getAuthHeader()
  );

  return response.data;
};