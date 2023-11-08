const Program = require('../models/program.model');

class programController {
  static async getProgramInfo(req, res) {
    if (!req.user) {
      return res.status(401).send('Error: Unauthorized');
    }
    const program = await Program.getProgramByIdorName(req.params.id);

    req.status(200).send(program);
  }

  static async getAllPrograms(req, res) {
    const programs = Program.getAllPrograms({});

    req.status(200).send(programs);
  }
}

module.exports = programController;
