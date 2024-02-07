const router = require("express").Router();
const userController = require("../../controller/auth-contoller");

router.post("/sign-up", userController.signUp);
router.post("/sign-in", userController.singIn);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh)
router.get("/check", userController.check);

module.exports = router;
