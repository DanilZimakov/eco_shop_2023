const router = require("express").Router();
const checkUser = require("../../middleware/chekUser");
const { Like, Post } = require("../../db/models");

router.get("/", checkUser, async (req, res) => {
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

router.delete("/:postId", checkUser, async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;
  try {
    const favorite = await Like.findOne({
      where: {
        post_id: postId,
        user_id: userId,
      },
    });

    if (favorite) {
      await favorite.destroy();
      res.json({ message: "Post removed from favorites" });
    } else {
      res.status(404).json({ message: "Post not found in favorites" });
    }
  } catch (error) {
    console.log("Ошибка в удалении из избранного ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
