const isProduction = process.env.NODE_ENV == "production";

const getTimestamp = () => {
    return new Date().toISOString();
};


export const logger = {
    info: (message) => {
        if (!isProduction) {
            console.log(`[INFO] [${getTimestamp()}] ${message}`);
        }
    },

    error: (message) => {
        console.log(`[ERROR] [${getTimestamp()}] ${message}`);
    }
}