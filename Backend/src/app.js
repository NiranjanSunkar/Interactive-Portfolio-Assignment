const express = require("express");
const cors = require("cors");

const projectRoutes = require("./Routes/projects");
const certificationRoutes = require("./Routes/certifications");
const chatRoutes = require("./Routes/chat");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/chat", chatRoutes);

module.exports = app;
