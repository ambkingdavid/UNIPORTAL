const Student = require('../models/student.model');
const Profile = require('../models/profile.model');

class StudentController {
  // adds a student
  static async addUser(req, res) {
    try {
      const newUser = await Student.create(req.body);
      return res.status(200).send(newUser.user.id);
    } catch (err) {
      return res.status(401).send('Email or Username already in use');
    }
  }

  // update a student profile
  static async updateStudentProfile(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const student = await Profile.update(req.user.id, req.body);
    return res.status(201).send(student);
  }

  // checks if a user has a active session
  static async getMe(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const studentId = req.user.id;

    const student = Student.find({
      id: studentId,
    });

    if (!student) {
      return res.status(401).send('Error: Unauthorized');
    }

    return res.status(200).send({ loggedIn: true });
  }

  // gets all student
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

  // gets a student
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

  // gets all courses beloging to a student
  static async getStudentCourses(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const studentId = req.user.id;
    const courseList = Student.getcourses(studentId);
    const courses = {};
    for (const course of courseList) {
      const { level, semester } = course.dataValues.CourseRegistration;

      if (!courses[level]) {
        courses[level] = {};
      }

      if (!courses[level][semester]) {
        courses[level][semester] = [];
      }

      courses[level][semester].push(course.courseName);
    }

    return res.status(200).send(courses);
  }

  // register courses
  static async registerCourses(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }

    const student = await Student.find({
      id: req.user.id,
    });

    if (!student) {
      return res.status(401).send('Error: Unauthorized');
    }

    const { courseList } = req.body;
    try {
      Student.registerCourses(req.user.id, courseList);
    } catch (err) {
      return res.status(401).send('Error: Unauthorized');
    }

    return res.status(201).send('Courses added');
  }


  // change password
  static async updatePassword(req, res) {
    const { matric, email } = req.body;
    const user = Student.changePassword(matric, email);

    if (!user) {
      return res.status(401).send('Error: Unauthorized');
    }

    return res.status(201).send('paswword changed')
  }
}

module.exports = StudentController;
