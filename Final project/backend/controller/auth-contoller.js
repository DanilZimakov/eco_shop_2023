const generateToken = require("../jwt/generateJwt");
const { User, Token } = require("../db/models");
const sendMail = require("../config/nodemailer");
const bcrypt = require("bcrypt");

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
      });
      //   sendMail(email);
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone_number,
      };
      const { accessToken, refreshToken } = generateToken(userData);

      const token = await Token.create({
        user_id: user.id,
        refresh_token: refreshToken,
      });
      res
        .cookie("access", accessToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 5,
        })
        .cookie("refresh", refreshToken, {
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

      res
        .cookie("access", accessToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 5,
        })
        .cookie("refresh", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
      res.status(201).json({ accessToken, refreshToken, user: userData });
    } catch (error) {
      console.error("ERORR SIGN IN:", error);
    }
  }
  async logout() {
    try {
      const { refresh } = req.cookies;
      await Token.destroy({ where: { refresh_token: refresh } });

      res.clearCookie("access").clearCookie("refresh");
      res.status(200).json({ message: "Вышли" });
    } catch (error) {
      console.error("ERROR LOGOUT: ", error);
    }
  }
  async check(req, res) {
    try {
      if (res.locals.user) {
        const { user } = res.locals;
        const userInDb = await User.findOne({ where: { id: user?.id } });
        if (user && userInDb) {
          res.status(200).json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone_number,
            },
          });
        } else {
          res.status(400).json({ user: false });
        }
      }
    } catch (error) {
      console.error("ERROR CHECK: ", error);
    }
  }
}

module.exports = new AuthController();
