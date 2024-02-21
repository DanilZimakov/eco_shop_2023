require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOption = {
  origin: process.env.APP_DOMAIN,
  credentials: true,
  optionsSuccessStatus: 200,
};

const serverConfig = (app) => {
  app.use(express.json({ limit: "200mb" }));
  app.use(express.urlencoded({ limit: "200mb", extended: true }));
  app.use(express.text({ limit: "200mb" }));
  app.use(express.json());
  app.use(cors(corsOption));
  app.use(cookieParser());
};

module.exports = serverConfig;
