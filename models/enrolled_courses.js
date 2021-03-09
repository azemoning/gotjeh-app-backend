'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrolled_Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrolled_Courses.hasOne(models.Users, { as: "User_id", foreignKey: "id" })
      Enrolled_Courses.hasOne(models.Courses, { as: "Course_id", foreignKey: "id" })
    }
  };
  Enrolled_Courses.init({
    user_id: DataTypes.STRING,
    course_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrolled_Courses',
  });
  return Enrolled_Courses;
};