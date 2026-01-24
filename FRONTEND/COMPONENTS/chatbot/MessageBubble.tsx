"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface props {
    role: "user" | "ai",
    content: string
};


function sanitizeMarkdown(text: string) {
    return text.replace(/(\*{1,2})(\s|$)/g, "");
}

export default function MessageBubble({ role, content }: props) {
    const isAI = role === "ai";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={` flex gap-3 ${isAI ? "justify-start" : "justify-end"}`}
        >

            {isAI && (
                <div className="w-8 h-8 rouded-full bg-accent text-black  flex items-center justify-center text-sm">
                    AI
                </div>
            )}

            <div className={`max-w-[70%] rounded-xl px-4 py-2 text-sm leading-relaxed ${isAI ? "bg-card" : "bg-accent text-black"}`}>
                <ReactMarkdown>{sanitizeMarkdown(content)}</ReactMarkdown>
            </div>

            {!isAI && (
                <div className="w-8 h-8 rounded-full bg-gray-600 text-white  flex items-center justify-center text-sm">
                    U
                </div>
            )}

        </motion.div>
    );
};
