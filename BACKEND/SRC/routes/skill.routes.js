import { createSkill, getSkills, updateSkill, deleteSkill } from "../controllers/skill.controllers.js";
import express from 'express';


const router = express.Router();

router.post("/", createSkill);
router.get("/", getSkills);
router.patch("/:id", updateSkill);
router.delete("/:id", deleteSkill);
export default router;