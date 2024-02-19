const router = require("express").Router();
const { Like, Post } = require("../../db/models");
const checkUser = require("../../middleware/chekUser");

router.get("/:postId/like", async (req, res) => {
  const { postId } = req.params;
  let userId;
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      userId = decoded.id;
    }
  } catch (error) {
    console.log(
      "Token not provided or invalid, proceeding without user context.",
    );
  }

  try {
    const existingLike = userId
      ? await Like.findOne({
          where: { post_id: postId, user_id: userId },
        })
      : null;
    const likesCount = await Like.count({
      where: { post_id: postId },
    });
    res.json({
      liked: !!existingLike,
      likesCount,
    });
  } catch (error) {
    console.error("Error fetching like status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/:postId/dislike", checkUser, async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.id;

  try {
    const existingLike = await Like.findOne({
      where: { post_id: postId, user_id: userId },
    });
    if (existingLike) {
      await existingLike.destroy();
      await Post.decrement("likesCount", { where: { id: postId } });
    } else {
      await Like.create({ post_id: postId, user_id: userId });
      await Post.increment("likesCount", { where: { id: postId } });
    }
    const post = await Post.findByPk(postId);
    res.json({
      liked: !existingLike,
      likesCount: post ? post.likesCount : 0,
    });
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
