import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
    },
    techStack: [
        {
            type: String,
            required: true
        }
    ],
    keywords: [
        {
            type: String,
        },
    ]
},
    { timestamp: true }
);

export default mongoose.model("Experience", ExperienceSchema);