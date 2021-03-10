const { Courses, Course_Sections, Course_Contents } = require("../models");
const BaseController = require("../controllers/baseController");
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
          as: "course_sections",
          include: {
            model: Course_Contents,
            as: "course_contents",
          },
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

  getCourseSectionContentById() {
    return async (req, res) => {
      const { id } = req.params;
      const result = await Course_Contents.findOne({
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

  addNewCourseSectionContent() {
    return async (req, res) => {
      const result = await Course_Contents.create({
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

  updateCourseSectionContent() {
    return async (req, res) => {
      const { id } = req.body;
      const result = await Course_Contents.update(req.body, {
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

  deleteCourseSectionContent() {
    return async (req, res) => {
      const { id } = req.params;
      const result = Course_Contents.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send(result);
    };
  }

  searchByCourseTitle() {
    return async (req, res) => {
      let { searchCourse } = req.query.value;

      //to lower case
      searchCourse = searchCourse.toLowerCase();

      const fetchedCourse = await Courses.findAll({
        where: { title: searchCourse },
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

      const fetchedCourse = await Courses.findOne({
        where: { category: filterCourse },
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
      const filterCourse = req.query.category;

      const fetchedCourse = await Courses.findAll({
        where: { category: filterCourse },
      });
      if (!fetchedCourse) {
        res.status(404).send({ error: "Course not found" });
      } else {
        res.status(200).send(fetchedCourse);
      }
    };
  }
}
module.exports = CourseController;
