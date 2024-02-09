const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");
const imageRouter = require("./api/image.routes");

router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);
router.use("/api", imageRouter);

module.exports = router;
