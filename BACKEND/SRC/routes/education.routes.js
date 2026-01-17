import express from 'express';
import { createEducation, getEducation, updateEducation, deleteEducation } from "../controllers/education.controller.js";

const router = express.Router();

router.post("/", createEducation);
router.get("/", getEducation);
router.patch("/:id", updateEducation);
router.delete("/:id", deleteEducation);


export default router;