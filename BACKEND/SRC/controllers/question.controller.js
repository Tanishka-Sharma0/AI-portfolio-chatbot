import Question from "../models/question.model";

export const getQuestions = async (req, res) => {
    try {
        const { category } = req.body;

        const filter = {
            isActive: true,
        }

        if (category) {
            filter.category = category
        }

        const questions = await Question.find(filter).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: questions.length,
            data: questions
        })

    } catch (err) {
        console.error("Question Controller Error:", err.message);
        res.status(500).json({
            success: false,
            message: "Failed to fetch questions"
        })
    }
};

