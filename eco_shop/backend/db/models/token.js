"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Token.init(
    {
      user_id: DataTypes.INTEGER,
      refresh_token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Token",
    }
  );
  return Token;
};
