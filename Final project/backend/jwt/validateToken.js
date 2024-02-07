require("dotenv").config();
const jwt = require("jsonwebtoken")

function validateRefreshToken(token) {
  const userData = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  if (userData) {
    return userData;
  }
  return null;
}
function validateAccessToken(token) {
  const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (userData) {
    return userData;
  }
  return null;
}

module.exports = { validateRefreshToken, validateAccessToken };
