const generateToken = require("../jwt/generateJwt");
const { User, Token } = require("../db/models");
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
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone_number,
      };
      const { access, refresh } = generateToken(userData);
      console.log("access: ", access, "refresh: ", refresh);
      const token = await Token.create({
        user_id:user.id,
        refresh_token:refresh
      })
      res.cookie("refresh", refresh, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(201).json({access,refresh,userData});
    } catch (error) {
      console.error("SERVER ERORR: ", error);
    }
  }
}

module.exports = new AuthController();
