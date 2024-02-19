require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const serverConfig = (app) => {
  app.use(express.json({ limit: "200mb" }));
  app.use(express.text({ limit: "200mb" }));
  app.use(express.urlencoded({ limit: "200mb", extended: true }));
  app.use(express.json());
  app.use(cors({ origin: "http://localhost:5173", credentials: true }));
  app.use(cookieParser());
};

module.exports = serverConfig;
