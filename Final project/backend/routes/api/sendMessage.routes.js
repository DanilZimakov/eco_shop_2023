const router = require("express").Router();
const { messageCreator, mailer } = require("../../config/nodemailer");
const { User } = require('../../db/models')



router.post("/:animalId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ where: { id: userId } })
    mailer(messageCreator(user.email, "Ваш заказ принят", `${user.name} ваша заявка принята к рассмотрению`));
    res.json({ message: "ok" });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;