const router = require("express").Router();
const { UserProfile } = require("../../db/models");
const { validateAccessToken } = require("../../jwt/validateToken");
router.post("/edit", async (req, res) => {
  try {
    const { age, gender, image } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    const validToken = validateAccessToken(token);
    const profile = await UserProfile.create({
      user_id: validToken.id,
      age,
      gender,
      image,
    });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: "Error" });
    console.error("ERRRORR PROFILE ADD: ", error);
  }
});

router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const validToken = validateAccessToken(token);
    const profile = await UserProfile.findOne({
      where: {
        user_id: validToken.id,
      },
    });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: "Error" });
    console.error("ERRRORR PROFILE GET: ", error);
  }
});

module.exports = router;
