const { Courses, Course_Sections, Categories, Enrolled_Courses } = require("../models");
const BaseController = require("../controllers/baseController");
const { Op } = require("sequelize")
const { nanoid } = require("nanoid");

class CourseController extends BaseController {
  constructor() {
    super(Courses);
  }

  getAllCourses() {
    return async (req, res) => {
      const result = await Courses.findAll();
      res.status(200).send(result);
    };
  }

  getCourseById() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Courses.findOne({
        where: {
          id: id,
        },
        include: {
          model: Course_Sections,
          as: "course_sections"
        },
      });
      res.status(200).send(result);
    };
  }

  getCourseSectionById() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Course_Sections.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).send(result);
    };
  }

  addNewCourse() {
    return async (req, res) => {
      const result = await Courses.create({
        id: nanoid(),
        ...req.body,
      });
      res.status(201).send(result);
    };
  }

  addNewCourseSection() {
    return async (req, res) => {
      const result = await Course_Sections.create({
        id: nanoid(),
        ...req.body,
      });
      res.status(201).send(result);
    };
  }

  updateCourse() {
    return async (req, res) => {
      const { id } = req.body;
      const result = await Courses.update(req.body, {
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  updateCourseSection() {
    return async (req, res) => {
      const { id } = req.body;
      const result = await Course_Sections.update(req.body, {
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  deleteCourse() {
    return async (req, res) => {
      const { id } = req.params;
      const result = Courses.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  deleteCourseSection() {
    return async (req, res) => {
      const { id } = req.params;
      const result = Course_Sections.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  searchByCourseTitle() {
    return async (req, res) => {
      let { search } = req.query;

      const fetchedCourse = await Courses.findAll({
        where: {
          title: {
            [Op.iLike]: `%${search.toLowerCase()}%`
          }
        },
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
      });
      if (!fetchedCourse) {
        res.status(404).send({ error: "Course not found" });
      } else {
        res.status(200).send(fetchedCourse);
      }
    };
  }

  filterByCourseCategory() {
    return async (req, res) => {
      const filterCourse = req.query.category;

      const fetchedCourse = await Courses.findAll({
        where: { category_id: filterCourse },
        include: {
          model: Categories,
          as: 'category',
          attributes: ['name']
        }
      });
      if (!fetchedCourse) {
        res.status(404).send({ error: "Course not found" });
      } else {
        res.status(200).send(fetchedCourse);
      }
    };
  }

  filterByPopularCourse() {
    return async (req, res) => {
      const result = await Courses.findAll({
        limit: 3
      })
      res.status(200).send(result)
    };
  }

  getEnrolledCourses() {
    return async (req, res) => {
      const query = req.params
      const result = await Enrolled_Courses.findAll({
        where: query,
        include: {
          model: Courses,
          as: 'course_details',
          include: {
            model: Categories,
            as: 'category'
          }
        }
      })
      res.status(200).send(result)
    }
  }
}
module.exports = CourseController;
