const Student = require('../models/student.model');
const Profile = require('../models/profile.model')

class StudentController {
  static async addUser(req, res) {
    try {
      const newUser = await Student.add(req.body);
      return res.status(200).send(newUser.user.id);
    } catch (err) {
      return res.status(401).send('Email or Username already in use');
    }
  }

  static async updateProfile(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const student = await Profile.update(req.user.id, req.body);
    return res.status(200).send({ id: student });
  }

  static async getMe(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const studentId = req.user.id;

    const student = Student.findOne({
      id: studentId,
    });

    if (!student || !student.isLoggedIn) {
      return res.status(401).send('Error: Unauthorized');
    }

    return res.status(200).send({ loggedIn: true });
  }

  static async getAllStudents(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const { page = 1, limit = 20 } = req.query;

    const offset = (page - 1) * limit;

    const users = await Student.findAll({
      limit: +limit,
      offset,
    });
    return res.status(200).send(users);
  }

  static async getStudent(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const { id } = req.params;
    const student = await Student.find({ id });
    if (!student) {
      return res.status(404).send({ error: 'Not found' });
    }
    return res.status(200).send(student);
  }
}

module.exports = StudentController;
