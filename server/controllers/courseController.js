const Course = require('../models/course.model');

class CourseController {
  static async addCourse(req, res) {
    if (!req.user) {
      return res.status(401).send('Unauthorized')
    }

    const { courseName, courseCode, department, unit } = req.data;

    const courseData = {
      courseName,
      courseCode,
      department,
      unit,
    };

    try {
      await Course.create(courseData);
    } catch (err) {
      return res.status(409).send('Resource already exist');
    }
    return res.status(201).send('Course created');
  }

  // get courses
  static async getCourses(req, res) {
    if (!req.user) {
      return res.status(401).send('Unauthorized');
    }
    const courseList = Course.getAllCourses();

    const courses = [];

    for (const course of courseList) {
      courses.push(course.name);
    }

    res.status(200).send(courses)
  }
}

module.exports = CourseController;
