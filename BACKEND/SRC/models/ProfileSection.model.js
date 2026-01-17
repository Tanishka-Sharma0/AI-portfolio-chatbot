import mongoose from "mongoose";


const profileSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    content: {
        type: String,
        required: true,
    },

    keywords: [
        {
            type: String,
        }
    ],

}, { timestamps: true });


export default mongoose.model("ProfileSection", profileSectionSchema);