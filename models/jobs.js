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
      Jobs.belongsTo(models.Categories, { as: 'category', foreignKey: 'category_id' })
    }
  };
  Jobs.init({
    job_email: DataTypes.STRING,
    job_name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    fee: DataTypes.STRING,
    content: DataTypes.STRING,
    is_approved: DataTypes.BOOLEAN,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};