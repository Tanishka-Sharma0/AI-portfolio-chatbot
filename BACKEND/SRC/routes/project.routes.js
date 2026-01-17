import { createProject, getProjects, updateProject, deleteProject } from "../controllers/project.controllers.js";
import express from "express";


const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);


export default router;