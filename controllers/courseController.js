const { Courses } = require('../models')
const BaseController = require('../controllers/baseController')

class CourseController extends BaseController {
    constructor() {
        super(Courses)
    }
}

module.exports = CourseController
