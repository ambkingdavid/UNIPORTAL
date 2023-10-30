const dbClient = require('../utils/db').Course;


class Course {
  //adds a course to the database
  static async add(data) {
    try {
      const course = await dbClient.create(data);
      const {
        createdAt: cousreCreatedAt,
        updatedAt: courseUpdatedAt,
        ...courseData
      } = course.dataValues;
      return courseData;
    } catch (err) {
      throw err;
    }
  }

  // gets a course with the courseId
  static async get(courseId) {
    try {
      const course = await dbClient.findByPk(courseId);
      return course;
    } catch (err) {
      throw err;
    }
  }

  //gets students that are registered to a course
  static async getStudents(courseId) {
    const course = dbClient.findByPk(courseId);
    if (course) {
      const students = course.getStudents();
      return students;
    }
    return null;
  }
}

module.exports = Course;
