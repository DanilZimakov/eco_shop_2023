"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Sub_category }) {
      this.hasMany(Post, { foreignKey: "category_id" });
      this.hasMany(Sub_category, { foreignKey: "category_id" });
    }
  }
  Category.init(
    {
      category_name: DataTypes.STRING,
      category_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
