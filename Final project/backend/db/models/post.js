"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({
      User,
      Category,
      Sub_category,
      Compoud,
      Cart,
      Review,
      Like,
    }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Category, { foreignKey: "category_id" });
      this.belongsTo(Sub_category, { foreignKey: "sub_category_id" });
      this.hasMany(Review, { foreignKey: "post_id" });
      this.hasMany(Cart, { foreignKey: "post_id" });
      this.hasMany(Like, { foreignKey: "post_id" });
      this.hasMany(Compoud, { foreignKey: "post_id" });
    }
  }
  Post.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      size: DataTypes.STRING,
      publich: DataTypes.BOOLEAN,

      user_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      sub_category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
