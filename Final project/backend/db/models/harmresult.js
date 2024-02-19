'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HarmResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      this.belongsTo(Post, { foreignKey: "post_id" });
    }
  }
  HarmResult.init(
    {
      post_id: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HarmResult",
    }
  );
  return HarmResult;
};