// user model
const { Op } = require('sequelize');
const dbClient = require('../utils/db').User;
const { hashPassword, formatDate } = require('../utils/helpers');
const { customLogger } = require('../utils/helpers');

class User {
  /**
  * Creates a user in the database.
  *
  * @param {Object} data - The data for creating the user.
  * @returns {Promise<User>} A Promise that resolves to the created user profile.
  * @throws {Error} If there is an error while creating the profile.
  */
  static async addUser(data) {
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
    return newUser;
  }

  /**
  * Creates a student profile in the database.
  *
  * @param {Object} data - The data for creating the student profile.
  * @returns {Promise<User>} A Promise that resolves to the created student profile.
  * @throws {Error} If there is an error while creating the profile.
  */
  static async createProfile(data) {
    const kwargs = { ...data };
    if (kwargs.password) {
      kwargs.password = await hashPassword(kwargs.password);
    }
    if (kwargs.dateOfBirth) {
      kwargs.dateOfBirth = formatDate(new Date(kwargs.dateOfBirth));
    }
    let userProfile;
    try {
      userProfile = dbClient.build(kwargs);
      await userProfile.validate();
      await userProfile.save();
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        const message = '[Error] Table column data already exist';
        customLogger(message);
        throw err;
      }
    }
    return userProfile.id;
  }

  /**
  * Finds students in the database based on the specified query.
  *
  * If no query is specified, it returns all student objects from the database.
  *
  * @param {Object} query - The query parameters to filter students (optional).
  * @returns {Promise<User[]>} A Promise that resolves to an array of student object(s).
  * @throws {Error} If there is an error while fetching students.
  */
  static async findAllUsers(query = {}) {
    const users = await dbClient.findAll(query);
    return users;
  }

  /**
   * Finds a student in the datbase based on specified query
   *
   * @params {Object} query - the query parameter
   * @returns {Promise<User>} A promise that resolves to a student object.
   * @throws {Error} if there is an error while fetching student
   */
  static async findUserByQuery(query) {
    const user = await dbClient.findOne({
      where: query,
    });
    if (!user) {
      return null;
    }
    return user.dataValues;
  }

  /**
   * Finds a student in the datbase based on username or email
   *
   * @params {Object} query - the username or email
   * @returns {Promise<User>} A promise that resolves to a student object.
   * @throws {Error} if there is an error while fetching student
   */
  static async findUserByUsernameOrEmail(usernameOrEmail) {
    try {
      const user = await dbClient.findOne({
        where: {
          [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        },
      });
      if (!user) {
        return null;
      }
      return user.dataValues;
    } catch (err) {
      console.log('Error: There is an error while querying database');
      throw err;
    }
  }
}

module.exports = User;
