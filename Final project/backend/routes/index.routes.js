const router = require("express").Router();

const mainRoute = require("./views/main.routes");

router.use("/", mainRoute);

module.exports = router;
