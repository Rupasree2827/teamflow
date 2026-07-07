import axios from "axios";

const api = axios.create({
  baseURL: "https://teamflow-backend-l2im.onrender.com/api",
});

export default api;