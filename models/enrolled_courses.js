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
      Enrolled_Courses.hasOne(models.Users, { as: "from", foreignKey: "id" })
      Enrolled_Courses.hasOne(models.Courses, { as: "from", foreignKey: "id" })
      // define association here
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