const app = require("express").Router();
const CourseController = require("../controllers/courseController");
const isExist = require("../middlewares/isExist");
const { Courses, Course_Sections, Course_Contents } = require("../models");
const course = new CourseController();

app.route("/").get(course.getAllCourses()).post(course.addNewCourse());

app
  .route("/:id")
  .get(isExist(Courses), course.getCourseById())
  .put(isExist(Courses), course.updateCourse())
  .delete(isExist(Courses), course.deleteCourse());

app.route("/sections").post(course.addNewCourseSection());

app
  .route("/sections/:id")
  .get(isExist(Course_Sections), course.getCourseSectionById())
  .put(isExist(Course_Sections), course.updateCourseSection())
  .delete(isExist(Course_Sections), course.deleteCourseSection());

app.route("/sections/contents").post(course.addNewCourseSectionContent());

app
  .route("/sections/contents/:id")
  .get(isExist(Course_Contents), course.getCourseSectionContentById())
  .put(isExist(Course_Contents), course.updateCourseSectionContent())
  .delete(isExist(Course_Contents), course.deleteCourseSectionContent());

app.route("/search").get(course.searchByCourseTitle());

app
  .route("/filter/:category")
  .get(isExist(Courses), course.filterByCourseCategory());

app.route("/filter").get(course.filterByPopularCourse());

module.exports = app;
