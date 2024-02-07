require("dotenv").config();
const jwt = require("jsonwebtoken");
const generateToken = require("../jwt/generateJwt");
function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
   
    const { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
    
    const { accessToken, refreshToken } = generateToken({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone_number,
      },
    });

    // res.locals.user = user;
    res
      .cookie("refresh", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .cookie("access", accessToken, {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie("access").clearCookie("refresh");
    next();
  }
}
function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = verifyAccessToken;
