"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Compound extends Model {
    static associate({ Material, Post }) {
      this.belongsTo(Material, { foreignKey: "material_id" });
      this.belongsTo(Post, { foreignKey: "post_id" });
    }
  }
  Compound.init(
    {
      material_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      parcent: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Compound",
    }
  );
  return Compound;
};
