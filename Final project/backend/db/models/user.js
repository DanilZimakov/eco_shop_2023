'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Item }) {
      this.hasMany(Item, { foreignKey: 'user_id'})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    isAdmin: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    isBanned: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};