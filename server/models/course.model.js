const { Op } = require('sequelize');
const dbClient = require('../utils/db').Course;


class Course {
  //adds a course to the database
  static async create(data) {
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
  static async getCourseById(courseId) {
    try {
      const course = await dbClient.findByPk(courseId);
      return course;
    } catch (err) {
      throw err;
    }
  }

  // gets a course by name
  static async getCourseByName(courseName) {
    try {
      const course = await dbClient.findOne({
        where: {
          courseName,
        },
      });
      return course;
    } catch (err) {
      throw err;
    }
  }

  // gets a list of courses from the database
  static async getCourses(courses) {
    const courseList = await dbClient.findAll({
      where: {
        courseName: {
          [Op.in] : courses,
        },
      },
    });
    return courseList;
  }

  // gets all courses from the database
  static async getAllCourses() {
    const courseList = await dbClient.findAll({});

    const courses = [];

    for (const course of courseList) {
      courses.push(course.name);
    }

    return courses;
  }

  //gets students that are registered to a course
  static async getStudents(courseId) {
    const course = await dbClient.findByPk(courseId);
    if (course) {
      const students = course.getStudents();
      return students;
    }
    return null;
  }
}

module.exports = Course;
