const router = require("express").Router();
const checkUser = require("../../middleware/chekUser");
const { Like, Post } = require("../../db/models");

router.get("/favorites", checkUser, async (req, res) => {
  const userId = req.user.id;
  try {
    const favoritePosts = await Like.findAll({
      where: { user_id: userId },
      include: [{ model: Post }],
    });

    const posts = favoritePosts.map((favorite) => favorite.Post);
    res.json(posts);
  } catch (error) {
    console.error("Error fetching favorite posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
