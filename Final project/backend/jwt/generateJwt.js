require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const access = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refresh = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "15d",
  });
  return { access, refresh };
}

module.exports = generateToken;
