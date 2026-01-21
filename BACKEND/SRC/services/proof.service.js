export const buildProofContext = ({
    experience = [],
    education = [],
    profileSections = [],
}) => {
    return {
        proofOfWork: experience.map((exp) => ({
            company: exp.company,
            role: exp.role,
            techStack: exp.techStack
        })),

        credibility: education.map((edu) => ({
            institution: edu.institution,
            degree: edu.degree,
            fieldOfStudy: edu.fieldOfStudy
        })),

        personality: profileSections.map((section) => ({
            title: section.title,
            content: section.content,
        }))
    };
};