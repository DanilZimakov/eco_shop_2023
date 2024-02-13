const router = require("express").Router();
const { Post, Like } = require("../../db/models");
const { validateAccessToken } = require("../../jwt/validateToken");

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
    const token = req.headers.authorization?.split(" ")[1];

    const validToken = validateAccessToken(token);
    const deletePost = await Post.destroy({
      where: { id: postId, user_id: validToken.id },
    });
    if (deletePost) {
      res.json(postId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put("/publich/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findByPk(postId);

  if (post.publich === false) {
    post.publich = true;
    post.save();
  } else {
    post.publich = false;
    post.save();
  }
  res.json(post);
});

module.exports = router;
