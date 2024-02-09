const router = require("express").Router();
const authRouter = require("./auth/auth.routes");
const categoriesRouter = require("./categories/categories.routes");
const materialRoutes = require("./routes/materialRoutes");

router.use("/api/auth", authRouter);
router.use("/categories", categoriesRouter);
app.use("/api", materialRoutes);

module.exports = router;
