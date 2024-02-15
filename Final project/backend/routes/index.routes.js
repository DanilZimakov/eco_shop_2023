const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");
const postsRouter = require("./posts/posts.routes");
const likesRouter = require("./posts/likes.routes");
const favoritesRouter = require("./posts/favorites.routes");
const formula = require("./posts/harmFormula.routes")
router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);
router.use("/posts", postsRouter);
router.use("/categories/:categoryId/posts", likesRouter);
router.use("/", favoritesRouter);
router.use("/harm", formula)


module.exports = router;
