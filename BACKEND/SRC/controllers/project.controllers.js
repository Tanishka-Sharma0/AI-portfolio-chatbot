import Project from "../models/project.model.js";


export const createProject = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: "title and description are required" });
        }
        const project = await Project.create(req.body);

        return res.status(201).json(project);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        return res.status(200).json(projects);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateProject = async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Project not found" });
        }

        return res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


export const deleteProject = async (req, res) => {
    try {
        const deleted = await Project.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Project not deleted" });
        }

        return res.status(200).json(deleted);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}