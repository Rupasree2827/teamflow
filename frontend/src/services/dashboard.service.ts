import api from "../api/axios";

export const getTeams = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/teams", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getProjects = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getTasks = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};