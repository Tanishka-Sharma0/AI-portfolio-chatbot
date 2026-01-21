import express from "express";
import {
  getAdminConfig,
  toggleChatbot,
  updatePreviewText,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/config", getAdminConfig);
router.post("/toggle-chatbot", toggleChatbot);
router.post("/preview-text", updatePreviewText);

export default router;
