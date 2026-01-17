import express from 'express';
import { createProfileSection, getProfileSections, updateProfileSection, deleteProfileSection } from "../controllers/profileSection.controller.js";


const router = express.Router();


router.post("/", createProfileSection);
router.get("/", getProfileSections);
router.patch("/:id", updateProfileSection);
router.delete("/:id", deleteProfileSection);

export default router;