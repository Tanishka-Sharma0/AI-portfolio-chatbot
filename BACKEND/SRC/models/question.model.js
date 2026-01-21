import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ["about", "skills", "projects", "system"],
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });

export default mongoose.model("Question", questionSchema);