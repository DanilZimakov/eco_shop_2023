const router = require("express").Router();
const { Post, User, Compound } = require("../../db/models");
const { validateAccessToken } = require("../../jwt/validateToken");

router.get("/", async (req, res) => {
  const posts = await Post.findAll({ order: [["id", "ASC"]] });
  res.json(posts);
});

router.post("/add", async (req, res) => {
  try {
   const {name, price, description, image, size, weight, materials, user_id, category_id, sub_category_id} = req.body;
    const post = await Post.create({
      name,
      price,
      description,
      size,
      publich: false,
      likesCount:0,
      image,
      weight,
      user_id,
      category_id,
      sub_category_id,
    });
    let material;
    for (let i = 0; i < materials.length; i += 1){
       material = await Compound.create({
        material_id: materials[i].material,
        post_id: post.id,
        parcent: materials[i].parcent
      })
    }
   
    
    res.status(200).json(post);
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
    const post = await Post.findByPk(postId);
    const admin = await User.findOne({ where: { is_admin: true } });
    if (admin.is_admin === true || post.user_id === validToken.id) {
      const deletePost = await Post.destroy({
        where: { id: postId },
      });
      if (deletePost) {
        res.json(postId);
        return;
      }
    }
    throw new Error();
  } catch (error) {
    console.error("ERRRORR DELETE: ", error);
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
