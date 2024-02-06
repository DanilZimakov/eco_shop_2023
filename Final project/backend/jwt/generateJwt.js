require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "15d",
  });
  return { accessToken, refreshToken };
}

module.exports = generateToken;
