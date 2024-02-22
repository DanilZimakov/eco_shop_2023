const router = require("express").Router();
const { Category, Sub_category } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message });
  }
});

router.get("/sub", async (req, res) => {
  try {
    const subCategories = await Sub_category.findAll();
    res.json(subCategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/sub/:subId", async (req, res) => {
  const { subId } = req.params;
  try {
    const subCategory = await Sub_category.findAll({
      where: { category_id: subId },
    });
    res.json(subCategory);
  } catch (error) {
    console.error("Ошибка при получении подкатегорий:", error);
    res.status(500).send("Внутренняя ошибка сервера");
  }
});

// В файле categoriesRouter
router.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findOne({
      where: { id: categoryId },
    });
    if (!category) {
      return res.status(404).json({ message: "Категория не найдена" });
    }
    res.json(category);
  } catch (error) {
    console.error("Ошибка при получении категории:", error);
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
});

module.exports = router;
