import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getProjects = () => API.get("/projects");
export const getCertifications = () => API.get("/certifications");
export const sendChatMessage = (data) => API.post("/chat", data);
