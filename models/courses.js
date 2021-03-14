'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Courses.belongsTo(models.Categories, { as: "category", foreignKey: "category_id" })
      // Courses.belongsTo(models.Enrolled_Courses, { as: "enrolled_courses", foreignKey: "id" })
      Courses.hasMany(models.Course_Sections, { as: "course_sections", foreignKey: "course_id" })

    }
  };
  Courses.init({
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};