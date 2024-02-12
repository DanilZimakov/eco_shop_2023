const router = require("express").Router();
const { Post, Like } = require("../../db/models");
const checkUser = require("../../middleware/chekUser");

router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

router.post("/add", async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      image,
      size,
      material,
      percentage,
      user_id,
    } = req.body;
    const post = await Post.create({
      name,
      price,
      description,
      image,
      size,
      publich: false,
      material,
      percentage,
      user_id,
      category_id: 1,
      sub_category_id: 1,
    });
    res.json(post);
  } catch (message) {
    res.json(message);
  }
});

module.exports = router;
