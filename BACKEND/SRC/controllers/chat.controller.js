import { buildRAGContext } from "../services/rag.service.js";
import { generateIdentitySentence } from "../services/identity.service.js";
import { buildProofContext } from "../services/proof.service.js";
import { buildPrompt } from "../services/prompt.service.js";
import { generateAIResponse } from "../services/ai.service.js";
import AdminConfig from "../models/AdminConfig.model.js";
import { logger } from "../utils/logger.js"

export const chatWithAI = async (req, res) => {
    try {
        logger.info("Chat request received")
        const { message, context } = req.body;

        if (!message || message.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "User message is required"
            });
        }

        const adminconfig = await AdminConfig.findOne();

        if (!adminconfig || !adminconfig.chatbotEnabled) {
            return res.status(200).json({
                success: true,
                answer: "AI assistant is currently disabled.",
                source: "system"
            });
        }

        const ragData = await buildRAGContext();
        const identity = generateIdentitySentence(ragData.skill);
        const proof = buildProofContext(ragData);


        const aiContext = {
            identity,
            skills: ragData.skill,
            projects: ragData.project,
            experience: ragData.experience,
            education: ragData.education,
            profileSection: ragData.profile,
            proof
        };

        const prompt = buildPrompt({
            userQuestion: message,
            data: context ? aiContext[context] || aiContext : aiContext,
            tone: "professional",
            length: "short",
        });

        const aiReply = await generateAIResponse(prompt);

        return res.status(200).json({
            success: true,
            answer: aiReply,
            source: context || "full-portfolio",
        });
    } catch (err) {
        logger.error("Chat Controller Error:", err.message);
        res.status(500).json({
            success: false,
            message: "Something went wrong while processing the chat"
        });
    }
}

