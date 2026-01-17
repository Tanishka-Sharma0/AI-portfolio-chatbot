import Experience from "../models/experience.model.js";

export const createExperience = async (req, res) => {
    try {
        const { company, role } = req.body;

        if (!company || !role) {
            return res.status(400).json({ message: "Company, role and keywords are required" });
        }

        const experience = await Experience.create(req.body);
        return res.status(201).json(experience);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


export const getExperience = async (req, res) => {
    try {
        const experiences = await Experience.find();
        return res.status(200).json(experiences);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateExperience = async (req, res) => {
    try {
        const updated = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Experience not found" });
        }

        return res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const deleteExperience = async (req, res) => {
    try {
        const deleted = await Experience.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Experience not deleted" });
        }

        return res.status(200).json(deleted);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}