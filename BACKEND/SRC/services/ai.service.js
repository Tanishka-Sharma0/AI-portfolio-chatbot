import axios from "axios";
import { logger } from "../utils/logger.js";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export const generateAIResponse = async (prompt) => {
    try {
        const response = await axios.post(
            `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            }
        );
        return response.data.candidates[0].content.parts[0].text;
    } catch (err) {
        logger.error("AI Service Error:", err.message);
        return "I'm Unable to answer that right now";
    }
};

