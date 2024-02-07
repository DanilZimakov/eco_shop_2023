"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Token, Admin, Post, Review, Cart, Like }) {
      this.hasMany(Token, { foreignKey: "user_id" });
      this.hasMany(Admin, { foreignKey: "user_id" });
      this.hasMany(Post, { foreignKey: "user_id" });
      this.hasMany(Review, { foreignKey: "user_id" });
      this.hasMany(Cart, { foreignKey: "user_id" });
      this.hasMany(Like, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
