import AdminConfig from "../models/AdminConfig.model.js";

const getConfig = async () => {
    let config = await AdminConfig.findOne();
    if (!config) {
        config = await AdminConfig.create({});
    }

    return config;
}

export const getAdminConfig = async (req, res) => {
    const config = await getConfig();
    res.json(config);
}

export const toggleChatbot = async () => {
    const config = await getConfig();
    config.chatbotEnabled = !config.chatbotEnabled;
    await config.save();

    res.json({
        message: `Chatbot is now ${config.chatbotEnabled ? "ENABLED" : "DISABLED"}`,
        chatbotEnabled: config.chatbotEnabled,
    });
};

export const updatePreviewText = async (req, res) => {
    const { previewText } = req.body;

    if (!previewText) {
        return res.status(400).json({ message: "Preview text is required." });
    }

    const config = await getConfig();
    config.previewText = previewText;
    await config.save();

    res.json({
        message: "Preview text updated",
        previewText: config.previewText,
    });
}


