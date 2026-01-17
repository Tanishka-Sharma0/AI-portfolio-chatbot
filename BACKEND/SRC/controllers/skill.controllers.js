import Skill from "../models/skill.model.js";

export const createSkill = async (req, res) => {
    try {
        const { name, category } = req.body;

        if (!name || !category) {
            return res.status(400).json({ message: "Name and category are required" });
        }
        const skill = await Skill.create(req.body);
        return res.status(201).json(skill);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


export const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        return res.status(200).json(skills);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateSkill = async (req, res) => {
    try {
        const updated = await Skill.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Skill not found" });
        }
        return res.status(200).json(update);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


export const deleteSkill = async (req, res) => {
    try {
        const deleted = await Skill.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Skill not deleted" });
        }

        return res.status(200).json(deleted);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}