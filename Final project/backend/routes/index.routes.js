const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");
const postsRouter = require("./posts/posts.routes");
const likesRouter = require("./posts/likes.routes");
const favoritesRouter = require("./posts/favorites.routes");
const materials = require('./posts/materials.routes')
const harmRouter = require("./posts/harmFormula.routes")
const cartRouter = require("./api/cart.api.routes");
const materialsRouter = require("./materials/materials.routes");

router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);
router.use("/posts", postsRouter);
router.use("/categories/:categoryId/posts", likesRouter);
router.use("/", favoritesRouter);
router.use('/materials', materials)
router.use("/harm", harmRouter);
router.use("/cart", cartRouter);
router.use("/materials", materialsRouter);

module.exports = router;
