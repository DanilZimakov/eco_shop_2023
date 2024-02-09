const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");
const postsRouter = require("./posts/posts.routes");

router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);
router.use("/posts", postsRouter);

module.exports = router;
