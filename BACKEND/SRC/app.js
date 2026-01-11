const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

//health check

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        success: true,
        message: "Server is healthy",
    })
});

module.exports = app;