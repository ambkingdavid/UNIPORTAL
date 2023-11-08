// student model
const bcrypt = require('bcrypt');
const dbClient = require('../utils/db').Student;
const Profile = require('./profile.model');
const Course = require('./course.model');
const Program = require('./program.model');
const { hashPassword } = require('../utils/helpers');
const { customLogger } = require('../utils/helpers');

class Student {
  /**
   * Creates a new student profile and associates them with a program of study.
   *
   * @param {Object} data - The data for creating the student profile.
   * @returns {Object} An object containing the created student profile and associated user profile.
   * @throws {Error} If there is an error during creation, including uniqueness constraints.
   */
  static async create(data) {
    const dataCopy = { ...data };

    if (dataCopy.password) {
      dataCopy.password = await hashPassword(dataCopy.password);
    }

    try {
      const newStudent = await dbClient.create(dataCopy);
      const program = await Program.getProgramByNameAndCategory(dataCopy.courseOfStudy, dataCopy.degree);

      await program.addStudent(newStudent);
      const profile = await Profile.createProfile(newStudent.id, {});

      return {
        user: newStudent,
        profile,
      };
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        const message = '[Error] Table column data already exists';
        customLogger(message);
        throw err;
      } else {
        throw err;
      }
    }
  }

  /**
  * Finds students in the database based on the specified query.
  *
  * If no query is specified, it returns all student objects from the database.
  *
  * @param {Object} query - The query parameters to filter students (optional).
  * @returns {Promise<Student[]>} A Promise that resolves to an array of student object(s).
  * @throws {Error} If there is an error while fetching students.
  */
  static async findAll(query) {
    const students = await dbClient.findAll(query);

    const studentsData = students.map((user) => {
      const {
        password,
        ...studentData
      } = user.dataValues;
      return studentData;
    });

    return studentsData;
  }

  /**
   * Finds a students in the datbase based on specified query
   *
   * @params {Object} query - the query parameter
   * @returns {Promise<Student>} A promise that resolves to a student object.
   * @throws {Error} if there is an error while fetching student
   */
  static async find(query) {
    const user = await dbClient.findOne({
      where: query,
    });
    if (!user) {
      return null;
    }

    const {
      password,
      ...userData
    } = user.dataValues;

    return userData;
  }

  /**
   * Finds a student in the datbase based on matric number
   *
   * @params {Object} query - the student's matric
   * @returns {Promise<User>} A promise that resolves to a student object.
   * @throws {Error} if there is an error while fetching student
   */
  static async findByMatric(matric) {
    const student = await dbClient.findOne({
      where: matric,
    });
    if (!student) {
      throw new Error('User not found');
    }
    const profile = await student.getProfile();

    const {
      password,
      ...studentData
    } = student.dataValues;

    return {
      user: studentData,
      profile,
    };
  }

  /**
 * Validates a student's password during login.
 *
 * @param {string} studentId - The identifier of the student.
 * @param {string} password - The password to be validated.
 * @returns {boolean} Returns true if the password is valid, or false if it's not.
 */

  static async validatePassword(studentId, password) {
    const student = await dbClient.findByPk(studentId);

    if (!student) {
      return false;
    }

    if (!bcrypt.compareSync(password, student.password)) {
      return false;
    }

    return true;
  }

  /**
   * Changes the password for a user.
   *
   * @param {string} userId - The identifier of the user.
   * @param {object} data - An object containing the user's data, including the new password and email.
   * @returns {string} Returns the user's identifier after the password is successfully changed.
   * @throws {Error} If the user is not found, or if the provided email doesn't match the user's email.
   */

  static async changePassword(userId, data) {
    try {
      const user = await dbClient.findByPk(userId);

      if (!user) {
        throw new Error('User not found');
      }

      if (data.email !== user.email) {
        throw new Error('Incorrect email');
      }

      const newPassword = await hashPassword(data.password);

      // Update the user's password in the database
      await user.update({ password: newPassword });

      return user.id;
    } catch (error) {
      throw error;
    }
  }


  /**
 * Registers courses for a student based on the provided course list.
 *
 * @param {string} studentId - The identifier of the student.
 * @param {string[]} courseList - An array of course identifiers to be registered.
 * @param {string} level
 * @param {string} semester
 * @returns {null} Returns null upon successful course registration.
 * @throws {Error} If the student is not found, or if there are no courses to register.
 */

  static async registerCourses(studentId, courseList, level, semester) {
    const student = await dbClient.findByPk(studentId);
    if (!student) {
      throw new Error('Student not found');
    }
    const courses = await Course.getAll(courseList);
    if (student && courses.length > 0) {
      for (const course of courses) {
        await student.addCourses(course, {
          through: {
            level,
            semester,
          }
        });
        console.log('Course registered');
      }
    }
  }

  /**
   * Retrieves the courses registered by a student.
   *
   * @param {string} studentId - The identifier of the student.
   * @returns {Course[]} An array of Course objects registered by the student.
   * @throws {Error} If the student is not found.
   */

  static async getcourses(studentId) {
    const student = await dbClient.findByPk(studentId);
    if (!student) {
      throw new Error('Student not null');
    }
    const courses = await student.getCourses();
    return courses;
  }
}

module.exports = Student;
