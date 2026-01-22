export const validateChatInput = async (req, res, next) => {
    const { message } = req.body;

    if (message === undefined || message === null) {
        return res.status(400).json({
            success: false,
            message: "Message is required",
        });
    }

    if (typeof message != "string") {
        return res.status(400).json({
            success: false,
            message: "Message must be a string",
        });
    }


    if (message.trim().length == 0) {
        return res.status(400).json({
            success: false,
            message: "Message cannot be empty",
        });
    }

    if (message.length > 500) {
        return res.status(400).json({
            success: false,
            message: "Message is too long (max 500 characters)",
        });
    }

    next();
}