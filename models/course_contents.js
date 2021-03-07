'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course_Contents.hasOne(models.Course_Sections, { as: "from", foreignKey: "id" })
    }
  };
  Course_Contents.init({
    course_section_id: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course_Contents',
  });
  return Course_Contents;
};