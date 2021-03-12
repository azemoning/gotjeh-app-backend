'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_Sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course_Sections.hasOne(models.Courses, { as: "from", foreignKey: "id" })
    }
  };
  Course_Sections.init({
    course_id: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Course_Sections',
  });
  return Course_Sections;
};