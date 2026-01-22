import express from 'express';
import { chatWithAI } from "../controllers/chat.controller.js";
import { chatRateLimiter } from "../middlewares/rateLimiter.js";
import { validateChatInput } from "../middlewares/validateInput.js";

const router = express.Router();


router.post('/', chatRateLimiter, validateChatInput, chatWithAI);


export default router;

