const router = require("express").Router();
const { Cart, Post } = require("../../db/models");
const checkUser = require("../../middleware/chekUser");

router.get("/", checkUser, async (req, res) => {
  const userId = req.user.id;
  try {
    const cartItems = await Cart.findAll({
      where: { user_id: userId },
      include: [{ model: Post }],
      order: [["id", "ASC"]],
    });

    const carts = cartItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        post: item.Post,
      };
    });

    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/add", checkUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const { post_id, quantity } = req.body;
    const cart = await Cart.create({ user_id: userId, post_id, quantity });
    res.json(cart);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete("/:id", checkUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = parseInt(req.params.id);

    // Используйте post_id для поиска в корзине, а не id.
    const cartItem = await Cart.findOne({
      where: { id: postId, user_id: userId },
    });
    console.log(cartItem, "cartItem");
    if (!cartItem) {
      return res
        .status(404)
        .json({ message: "Item not found or does not belong to user" });
    }

    await Cart.destroy({ where: { id: cartItem.id } });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", checkUser, async (req, res) => {
  const userId = req.user.id;
  const { quantity } = req.body;
  const cartItemId = parseInt(req.params.id);

  if (quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be greater than 0",
    });
  }

  try {
    let cartItem = await Cart.findOne({
      where: {
        id: cartItemId,
        user_id: userId,
      },
      include: [{ model: Post }],
    });

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found or does not belong to the user",
      });
    }

    await cartItem.update({ quantity });

    cartItem = await Cart.findOne({
      where: { id: cartItemId },
      include: [{ model: Post }],
    });

    const updatedCartItem = await Cart.findOne({
      where: { id: cartItemId },
      include: [{ model: Post }],
    });
    if (!updatedCartItem) {
      return res.status(404).json({ message: "Item not found after update." });
    }
    res.json({
      id: updatedCartItem.id,
      quantity: updatedCartItem.quantity,
      post: updatedCartItem.Post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
