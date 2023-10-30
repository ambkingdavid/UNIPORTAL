const Course = require('../models/course.model');

class CourseController {
  static async getCourses(req, res) {
    if (!req.user) {
      return res.status(401).send('Unauthorized');
    }
    const courses = Course.getCourses()
  }
}