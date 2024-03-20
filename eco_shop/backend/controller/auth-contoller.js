const generateToken = require("../jwt/generateJwt");
const { User, Token } = require("../db/models");
const sendMail = require("../config/nodemailer");
const bcrypt = require("bcrypt");
const { validateRefreshToken } = require("../jwt/validateToken");

class AuthController {
  async signUp(req, res) {
    try {
      const { name, email, password, cpassword, phone } = req.body;
      const userInDb = await User.findOne({ where: { email } });
      if (userInDb) {
        res
          .status(400)
          .json({ message: `Пользователь с ${email} таким существует` });
        return;
      }
      if (password !== cpassword) {
        res.status(400).json({ message: "Пароли не совпадают" });
        return;
      }
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hash,
        phone_number: phone,
        is_admin: false,
      });

      sendMail(email);
      
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone_number,
        admin: user.is_admin,
      };
      const { accessToken, refreshToken } = generateToken(userData);

      const token = await Token.create({
        user_id: user.id,
        refresh_token: refreshToken,
      });
      res.cookie("refresh", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(201).json({ accessToken, refreshToken, user: userData });
    } catch (error) {
      console.error("ERORR SIGN UP: ", error);
    }
  }
  async singIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone_number,
        admin: user.is_admin,
      };
      if (!user) {
        res.status(400).json({ message: "Зарегистрируйтесь" });
      }
      const isPass = await bcrypt.compare(password, user.password);

      if (!isPass) {
        res.status(400).json({ message: "Неверный пароль" });
      }
      const { accessToken, refreshToken } = generateToken(userData);
      const tokenIsUser = await Token.findOne({
        where: { user_id: user.id },
      });
      if (!tokenIsUser) {
        res.status(400).json({ message: "Ты кто такой давай досвидания" });
        return;
      }
      await tokenIsUser.update({ refresh_token: refreshToken });

      res.cookie("refresh", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(201).json({ accessToken, refreshToken, user: userData });
    } catch (error) {
      console.error("ERORR SIGN IN:", error);
    }
  }
  async logout(req, res) {
    try {
      res.clearCookie("refresh");
      res.status(200).json({ message: "Вышли" });
    } catch (error) {
      console.error("ERROR LOGOUT: ", error);
    }
  }
  async refresh(req, res) {
    try {
      const { refresh } = req.cookies;
      const userToken = validateRefreshToken(refresh);

      const tokenInDb = await Token.findOne({
        where: { refresh_token: refresh },
      });

      if (!userToken || !tokenInDb) {
        res.status(400).json({ message: "Ты кто такой давай досвидания" });
        return;
      }
      const user = await User.findOne({ where: { id: userToken.id } });
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone_number,
        admin: user.is_admin,
      };
      const { accessToken, refreshToken } = generateToken(userData);
      tokenInDb.refresh_token = refreshToken;
      await tokenInDb.save();

      res.cookie("refresh", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(201).json({ accessToken, refreshToken, user: userData });
    } catch (error) {
      console.error("ERORR REFRESH: ", error);
    }
  }
  async check(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.user.id } });

      res.status(201).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone_number,
          admin: user.is_admin,
        },
      });
    } catch (error) {
      console.error("ERROR CHECK: ", error);
    }
  }
}

module.exports = new AuthController();
