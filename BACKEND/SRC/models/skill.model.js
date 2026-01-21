import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    level: {
        type: String,
        default: "Intermediate",
    },

    category: {
        type: String,
        required: true,
    },
    isPrimaryRole: {
        type: Boolean,
        default: true,
    },


    logo: {
        type: String,
    },

    keywords: [
        {
            type: String,
        },
    ]
},
    { timestamps: true }
);

export default mongoose.model("Skill", SkillSchema);