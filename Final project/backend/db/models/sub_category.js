"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sub_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
