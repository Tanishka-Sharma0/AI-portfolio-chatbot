import ProfileSection from '../models/ProfileSection.model.js';

export const createProfileSection = async (req, res) => {
    try {

        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and Content are required" });
        }

        const profilesection = await ProfileSection.create(req.body);
        return res.status(201).json(profilesection);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const getProfileSections = async (req, res) => {
    try {

        const profilesections = await ProfileSection.find();
        return res.status(200).json(profilesections);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const  updateProfileSection = async (req, res) => {
    try {
        const updated = await ProfileSection.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Profile not found" });
        }

        return res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const deleteProfileSection  = async (req, res) => {
    try {
        const deleted = await ProfileSection.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Profile not deleted" });
        }

        return res.status(200).json(deleted);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}