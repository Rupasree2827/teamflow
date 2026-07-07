import api from "../api/axios";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getTeams = async () => {
  const response = await api.get("/teams", getAuthHeader());
  return response.data;
};

export const getProjects = async () => {
  const response = await api.get("/projects", getAuthHeader());
  return response.data;
};

export const getTasks = async () => {
  const response = await api.get("/tasks", getAuthHeader());
  return response.data;
};