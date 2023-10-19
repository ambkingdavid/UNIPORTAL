// student model
const dbClient = require('../utils/db').Student;
const Profile = require('./profile.model');
const { hashPassword, formatDate } = require('../utils/helpers');
const { customLogger } = require('../utils/helpers');

class Student {
  /**
  * Creates a user in the database.
  *
  * @param {Object} data - The data for creating the user.
  * @returns {Promise<User>} A Promise that resolves to the created user profile.
  * @throws {Error} If there is an error while creating the profile.
  */
  static async add(data) {
    const kwargs = { ...data };
    if (kwargs.password) {
      kwargs.password = await hashPassword(kwargs.password);
    }
    let newUser;
    try {
      newUser = dbClient.build(kwargs);
      await newUser.validate();
      await newUser.save();
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        const message = '[Error] Table column data already exist';
        customLogger(message);
        throw err;
      }
    }
    const profile = await Profile.createProfile(newUser.id, {});
    return {
      user: newUser,
      profile,
    };
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
  static async findAll(query = {}) {
    const students = await dbClient.findAll(query);
    return students;
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
    return user.dataValues;
  }

  /**
   * Finds a student in the datbase based on matric number
   *
   * @params {Object} query - the username or email
   * @returns {Promise<User>} A promise that resolves to a student object.
   * @throws {Error} if there is an error while fetching student
   */
  static async findByMatric(matric) {
    try {
      const user = await dbClient.findOne({
        where: {
          matric,
        },
      });
      if (!user) {
        throw new Error('User not found');
      }
      const profile = await user.getProfile();

      return {
        user: user.dataValues,
        profile: profile.dataValues,
      };
    } catch (err) {
      throw err;
    }
  }

  static async updateLoginStatus(studentId, query) {
    try {
      const student = await dbClient.findByPk(studentId);

      if (!student) {
        throw new Error('User not found');
      }

      Object.assign(student, query);

      await student.save();
      return student.isLoggedIn;
    } catch (err) {
      throw err
    }
  }

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
  
      const updatedPassword = {
        password: newPassword,
      };

      Object.assign(user, updatedPassword);

      await user.save();
  
      return user.id;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Student;
