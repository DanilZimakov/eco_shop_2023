const router = require("express").Router();
const userController = require("../../controller/auth-contoller")

router.post("/sign-up",userController.signUp )
module.exports = router;
