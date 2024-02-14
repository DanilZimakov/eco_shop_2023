"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // <-- change is here
      this.belongsTo(models.User, { foreignKey: "user_id" });
      this.belongsTo(models.Category, { foreignKey: "category_id" });
      this.belongsTo(models.Sub_category, { foreignKey: "sub_category_id" });
      this.hasMany(models.Review, { foreignKey: "post_id" });
      this.hasMany(models.Cart, { foreignKey: "post_id" });
      this.hasMany(models.Like, { foreignKey: "post_id" });
      this.hasMany(models.Compoud, { foreignKey: "post_id" });
    }
  }
  Post.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      size: DataTypes.STRING,
      publich: DataTypes.BOOLEAN,
      likesCount: DataTypes.INTEGER,
      image: DataTypes.TEXT,
      weight: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      sub_category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    },
  );
  return Post;
};
