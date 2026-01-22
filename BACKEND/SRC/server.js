import app from "./app.js";
import connectDB from "./config/db.js";
import { PORT } from "./config/env.js";
import { logger } from "./utils/logger.js";

connectDB();

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
})


