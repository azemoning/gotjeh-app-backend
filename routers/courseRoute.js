const app = require("express").Router();
const CourseController = require("../controllers/courseController");
const course = new CourseController();
const passport = require("../middlewares/passportMiddleware");
const restrict = passport.authenticate('jwt', { session: false })

app.route("/").get(course.getAllCourses()).post(course.addNewCourse());
app.route("/search").get(course.searchByCourseTitle());
app.route("/enrolled").get(restrict, course.getEnrolledCourses())
app
  .route("/filter")
  .get(course.filterByCourseCategory());


app.route("/sections").post(course.addNewCourseSection());

app
  .route("/sections/:id")
  .get(course.getCourseSectionById())
  .put(course.updateCourseSection())
  .delete(course.deleteCourseSection());

app.route("/popular").get(course.filterByPopularCourse());


app
  .route("/:id")
  .get(course.getCourseById())
  .put(course.updateCourse())
  .delete(course.deleteCourse());

module.exports = app;
