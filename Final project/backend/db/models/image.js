"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Post }) {
      this.belongsTo(Post, { foreignKey: "post_id" });
    }
  }

  Image.init(
    {
      filename: DataTypes.STRING,
      filepath: DataTypes.STRING,
      mimetype: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Image",
    },
  );

  return Image;
};
