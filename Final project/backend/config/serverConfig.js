require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: "http://localhost:5173", // или ваш домен фронтенда
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const serverConfig = (app) => {
  app.use(express.json({ limit: "200mb" }));
  app.use(express.urlencoded({ limit: "200mb", extended: true }));
  app.use(express.text({ limit: "200mb" }));
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(cookieParser());
};

module.exports = serverConfig;
