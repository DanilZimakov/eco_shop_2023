const router = require("express").Router();
const { Post } = require("../../db/models");
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
      parcent,
      user_id,
      category_id,
      sub_category_id,
    } = req.body;
    
    const post = await Post.create({
      name,
      price,
      description,
      image,
      size,
      publich: false,
      material,
      parcent,
      user_id,
      category_id,
      sub_category_id,
    });
    res.json({ success: true, post: post });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
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

router.post("/edit/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const { name, price, description, image, size, material, parcent } =
      req.body;

    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.name = name;
    post.price = price;
    post.description = description;
    post.image = image;
    post.size = size;
    post.material = material;
    post.parcent = parcent;
    post.save();
    res.json(post);
  } catch (error) {
    сonsole.error("Error editing post:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
