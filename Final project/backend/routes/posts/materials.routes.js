const router = require("express").Router();
const { Material } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    console.error("Error fetching materials:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
