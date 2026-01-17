import express from 'express';
import { createExperience, getExperience, updateExperience, deleteExperience } from "../controllers/experience.controller.js";

const router = express.Router();

router.post('/', createExperience);
router.get('/', getExperience);
router.patch("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;