const { validateAccessToken } = require("../jwt/validateToken");

function checkAdmin(req, res, next) {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    res
      .status(403)
      .json({ message: "Доступ запрещен. Требуется аутентификация." });
  }

  const accessToken = headerAuth.split(" ")[1];

  if (!accessToken) {
    res
      .status(403)
      .json({ message: "Доступ запрещен. Требуется аутентификация." });
  }

  const userToken = validateAccessToken(accessToken);

  if (!userToken || !userToken.isAdmin) {
    res
      .status(403)
      .json({ message: "Доступ запрещен. Требуются права администратора." });
  }

  req.user = userToken;
  next();
}

module.exports = checkAdmin;
