const User = require('../models/user.model');

class UserController {
  static async addUser(req, res) {
    try {
      const newUser = await User.addUser(req.body);
      return res.status(200).send(newUser.id);
    } catch (err) {
      return res.status(401).send('Email or Username already in use');
    }
  }

  static async createProfile(req, res) {
    const student = await User.createProfile(req.body);
    return res.status(200).send({ id: student });
  }

  static async getAllUsers(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const { page = 1, limit = 20 } = req.query;

    const offset = (page - 1) * limit;

    const users = await User.findAllUsers({
      limit: +limit,
      offset,
    });
    return res.status(200).send(users);
  }

  static async getUser(req, res) {
    const { id } = req.params;
    const student = await User.findUserByQuery({ id });
    if (!student) {
      return res.status(404).send({ error: 'Not found' });
    }
    return res.status(200).send(student);
  }
}

module.exports = UserController;
