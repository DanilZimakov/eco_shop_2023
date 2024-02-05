'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Item.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};