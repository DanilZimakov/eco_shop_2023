"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sub_category extends Model {
    static associate({ Category, Post }) {
      this.belongsTo(Category, { foreignKey: "category_id" });
      this.hasMany(Post, { foreignKey: "sub_category_id" });
    }
  }
  Sub_category.init(
    {
      name: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sub_category",
    }
  );
  return Sub_category;
};
