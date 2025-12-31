import axios from "axios";

const API = axios.create({
  baseURL: "https://interactive-portfolio-assignment.onrender.com",
});

export const getProjects = () => API.get("/projects");
export const getCertifications = () => API.get("/certifications");
export const sendChatMessage = (data) => API.post("/chat", data);
