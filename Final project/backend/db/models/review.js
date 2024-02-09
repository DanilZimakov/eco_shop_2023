"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Post, { foreignKey: "post_id" });
    }
  }
  Review.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      rating: DataTypes.STRING,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
