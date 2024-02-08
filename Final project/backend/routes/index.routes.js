const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");
const productsRouter = require('./products/products.routes')

router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);
router.use('/products', productsRouter);

module.exports = router;
