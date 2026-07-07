import api from "../api/axios";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all teams
export const getTeams = async () => {
  const response = await api.get("/teams", getAuthHeader());
  return response.data;
};

// Create team
export const createTeam = async (
  name: string,
  description: string
) => {
  const response = await api.post(
    "/teams",
    {
      name,
      description,
    },
    getAuthHeader()
  );

  return response.data;
};

// Delete team
export const deleteTeam = async (id: string) => {
  console.log("Deleting Team ID:", id);

  const response = await api.delete(
    `/teams/${id}`,
    getAuthHeader()
  );

  console.log("Delete Response:", response.data);

  return response.data;
};

// Update Team
export const updateTeam = async (
  id: string,
  name: string,
  description: string
) => {
  const response = await api.put(
    `/teams/${id}`,
    {
      name,
      description,
    },
    getAuthHeader()
  );

  return response.data;
};