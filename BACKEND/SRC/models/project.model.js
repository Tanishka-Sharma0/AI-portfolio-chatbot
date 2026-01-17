import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techStack: [
        {
            type: String
        },
    ],
    githubLink: String,
    liveLink: String,

    keywords: [
        {
            type: String
        }
    ]

},
    { timestamps: true },
);

export default mongoose.model("Project", ProjectSchema);