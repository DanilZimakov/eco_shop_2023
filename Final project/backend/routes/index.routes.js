const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");

router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
