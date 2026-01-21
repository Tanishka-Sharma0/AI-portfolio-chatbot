import Skill from "../models/skill.model";
import Education from "../models/Education.model";
import Profile from "../models/ProfileSection.model";
import Experience from "../models/experience.model";
import Project from "../models/project.model";

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