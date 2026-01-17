import Education from "../models/Education.model.js";

export const createEducation = async (req, res) => {
    try {
        const { institution, degree, startYear, endYear } = req.body;

        if (!institution || !degree || !startYear || !endYear) {
            return res.status(400).json({ message: "Institution, degree ,start and end year are required" });
        }

        const education = await Education.create(req.body);
        return res.status(201).json(education);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const getEducation = async (req, res) => {
    try {
        const educations = await Education.find();
        return res.status(200).json(educations);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateEducation = async (req, res) => {
    try {
        const updated = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Education not found" });
        }

        return res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const deleteEducation = async (req, res) => {
    try {
        const deleted = await Experience.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Education not deleted" });
        }

        return res.status(200).json(deleted);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}