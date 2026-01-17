import mongoose from "mongoose";


const EducationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true,
        trim: true,
    },

    degree: {
        type: String,
        required: true,
        trim: true,
    },

    fieldOfStudy: {
        type: String,
        trim: true,
    },

    startYear: {
        type: String,
        required: true,
    },
    endYear: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    keywords: [
        {
            type: String,
        }
    ],
}
    , { timestamps: true });



export default mongoose.model("Education", EducationSchema);