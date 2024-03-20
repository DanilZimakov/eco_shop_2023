"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Post, { foreignKey: "post_id" });
    }
  }
  Cart.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    },
  );
  return Cart;
};
