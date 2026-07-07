import api from "../api/axios";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get All Projects
export const getProjects = async () => {
  const response = await api.get(
    "/projects",
    getAuthHeader()
  );

  return response.data;
};

// Create Project
export const createProject = async (
  name: string,
  description: string,
  teamId: string
) => {
  const response = await api.post(
    "/projects",
    {
      name,
      description,
      teamId,
    },
    getAuthHeader()
  );

  return response.data;
};

// Update Project
export const updateProject = async (
  id: string,
  name: string,
  description: string
) => {
  const response = await api.put(
    `/projects/${id}`,
    {
      name,
      description,
    },
    getAuthHeader()
  );

  return response.data;
};

// Delete Project
export const deleteProject = async (
  id: string
) => {
  const response = await api.delete(
    `/projects/${id}`,
    getAuthHeader()
  );

  return response.data;
};