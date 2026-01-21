import mongoose from "mongoose";


const adminConfigSchema = new mongoose.Schema({
    chatbotEnabled: {
        type: Boolean,
        default: true,
    },
    previewText: {
        type: String,
        default: "AI will understand this as…",
    },

}, { timestamps: true });

export default mongoose.model("AdminConfig", adminConfigSchema);