import express from "express";
import cors from "cors";
import skillRoutes from "./routes/skill.routes.js";
import projectRoutes from "./routes/project.routes.js";
import profileRoutes from "./routes/profileSection.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import educationRoutes from "./routes/education.routes.js";

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/skills", skillRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    });
});

export default app;