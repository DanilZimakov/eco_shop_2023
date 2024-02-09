"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User,
      Category,
      Sub_category,
      Admin,
      Cart,
      Review,
      Like,
      Image,
    }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Category, { foreignKey: "category_id" });
      this.belongsTo(Sub_category, { foreignKey: "sub_category_id" });
      this.hasMany(Admin, { foreignKey: "post_id" });
      this.hasMany(Review, { foreignKey: "post_id" });
      this.hasMany(Cart, { foreignKey: "post_id" });
      this.hasMany(Like, { foreignKey: "post_id" });
      this.hasMany(Image, { foreignKey: "post_id" });
    }
  }
  Post.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      size: DataTypes.STRING,
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
