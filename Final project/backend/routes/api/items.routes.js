const router = require("express").Router();
// const AnimalItem = require('../../components/AnimalItem')
const { messageCreator, mailer } = require("../../config/nodemailer");
const { Item, User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const animals = await Item.findAll();
    res.json(animals);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/:itemId", async (req, res) => {
  try {
    const item = await Item.findOne({
      raw: true,
      where: { id: req.params.itemId },
    });
    res.json(item);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, image } = req.body;
    const animal = await Item.create({
      title,
      image,
      text: "itemitem" || text,
      user_id: 1,
    });

    res.json(animal);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await Item.findOne({ where: { id: itemId } });
    const user = await User.findOne({ where: { id: item.user_id } });

    mailer(
      messageCreator(
        user.email,
        "Отмена заказа",
        `${user.name} к сожалению, мы не сможем выполнить ваш заказ, приносим свои извинения!`,
      ),
    );

    const result = await Item.destroy({ where: { id: itemId } });
    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { title, image, user_id, text } = req.body;
    const item = await Animal.update(
      {
        title,
        image,
        user_id,
        text,
      },
      { where: { id: itemId, user_id: req.session.userId } },
    );
    res.json(item);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
