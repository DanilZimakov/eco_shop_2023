const { validateAccessToken } = require("../jwt/validateToken");

function chekcUser(req, res, next) {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    return res
      .status(403)
      .json({ message: "Ты кто такой? Давай, до свидания!" });
  } else {
    const accessToken = headerAuth.split(" ")[1];

    if (!accessToken) {
      return res
        .status(403)
        .json({ message: "Ты кто такой? Давай, до свидания!" });
    } else {
      const userToken = validateAccessToken(accessToken);

      if (!userToken) {
        return res
          .status(403)
          .json({ message: "Ты кто такой? Давай, до свидания!" });
      }

      req.user = userToken;
      next();
    }
  }
}
module.exports = chekcUser;
