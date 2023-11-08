const Program = require('../models/program.model');

class ProgramController {
  static async getStudentProgram(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }

    const { courseOfStudy, degree } = req.query;
    const program = await Program.getProgramByNameAndCategory(courseOfStudy, degree);

    req.status(200).send(program);
  }

  static async getAllPrograms(req, res) {
    const programs = Program.getAllPrograms({});

    req.status(200).send(programs);
  }
}

module.exports = ProgramController;
