import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
    logger.error(err.message);

    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};
