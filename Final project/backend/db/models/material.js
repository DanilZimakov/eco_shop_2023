"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate({ Compoud }) {
      this.hasMany(Compoud, { foreignKey: "material_id" });
    }
  }
  Material.init(
    {
      name: DataTypes.STRING,
      harm: DataTypes.STRING,
      harmfulness: DataTypes.STRING,
      environmental_impact: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Material",
    }
  );
  return Material;
};
