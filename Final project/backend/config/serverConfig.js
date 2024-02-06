const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const verifyAccessToken = require("../middleware/verifyToken")

const serverConfig = (app) => {
    app.use(express.json());
    app.use(cors({origin: "http://localhost:5173", credentials:true} ));
    app.use(cookieParser());
    app.use(verifyAccessToken)
}

module.exports = serverConfig