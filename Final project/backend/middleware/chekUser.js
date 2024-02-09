const { validateAccessToken } = require("../jwt/validateToken");

function chekcUser(req, res, next) {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    res.status(403).json({ message: "Ты кто такой давай досвидания" });
  }
  const accessToken = headerAuth.split(" ")[1];

  if (!accessToken) {
    res.status(403).json({ message: "Ты кто такой давай досвидания" });
  }

  const userToken = validateAccessToken(accessToken);

  if (!userToken) {
    res.status(403).json({ message: "Ты кто такой давай досвидания" });
  }
  req.user = userToken;
  next();
}
module.exports = chekcUser;
