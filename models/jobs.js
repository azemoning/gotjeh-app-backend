'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jobs.hasOne(models.Categories, { as: "category_id", foreignKey: "id" })
    }
  };
  Jobs.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    status: DataTypes.STRING,
    content: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};