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
    },
    {
      sequelize,
      modelName: "Material",
    }
  );
  return Material;
};
