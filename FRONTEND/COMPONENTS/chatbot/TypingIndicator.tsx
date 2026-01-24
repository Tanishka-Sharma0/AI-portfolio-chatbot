"use client";

import { motion } from "framer-motion";


export default function TypingIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
        >
            <span>AI is typing</span>
            <span className="animate-pulse">.......</span>
        </motion.div>
    )
}