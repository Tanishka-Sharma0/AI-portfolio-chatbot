import Skill from "../models/skill.model.js";
import Education from "../models/Education.model.js";
import Profile from "../models/ProfileSection.model.js";
import Experience from "../models/experience.model.js";
import Project from "../models/project.model.js";

export const buildRAGContext = async () => {
    const skill = await Skill.find();
    const education = await Education.find();
    const profile = await Profile.find();
    const experience = await Experience.find();
    const project = await Project.find();

    return {
        skill,
        education,
        profile,
        experience,
        project
    }
}