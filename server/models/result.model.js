const dbClient = require('../utils/db').Result;
const { Course } = require('../utils/db');

class Result {
  static async createResult(resultData) {
    try {
      // const student = await Student.findByPk(studentId);
      // const course = await Course.findByPk(courseId);
  
      // if (!student || !course) {
      //   throw new Error('Student or course not found');
      // }

      // Create a new result
      const result = await dbClient.create(resultData);
  
      return result;
    } catch (error) {
      console.error('Error creating result:', error);
      throw error;
    }
  }

  // get result
  static async getResult(studentId, courseId) {
    const result = await dbClient.findOne({
      where: {
        studentId,
        courseId,
      },
      include: [Course],
    });

    return result;
  }

  // gets all the result of a student
  static async getResults(studentId) {
    const results = await dbClient.findAll({
      where: {
        studentId,
      },
      include: [Course],
    });

    return results;
  }
}

module.exports = Result;
