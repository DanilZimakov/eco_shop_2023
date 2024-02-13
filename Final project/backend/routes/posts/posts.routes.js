const router = require("express").Router();
const { Post, Image } = require("../../db/models");

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

router.delete("/delete/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const result = await Post.destroy({
      where: { id: postId },
    });

    if (result > 0) {
      res.json(postId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    const { name, image, user_id, type_id } = req.body;
    const animal = await Animal.update(
      {
        name,
        image,
        user_id,
        type_id,
      },
      { where: { id: animalId, user_id: req.session.userId } },
    );
    res.json(animal);
  } catch (message) {
    res.json(message);
  }
});

module.exports = router;
