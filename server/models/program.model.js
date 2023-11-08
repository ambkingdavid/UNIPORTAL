const { Op } = require('sequelize');
const { Program } = require('../utils/db');
const { deepCopy } = require('../utils/helpers');

class ProgramOFStudy {
  static async add(data) {
    const program = await Program.create(data);

    if (!program) {
      throw new Error('Database Error: Cannot create program');
    }

    return program;
  }

  static async getAllPrograms(query) {
    const programs = await Program.findAll(query);
    return programs;
  }

  static async getProgramByIdorName(query) {
    const program = await Program.findOne({
      where: {
        [Op.or]: [
          { name: query },
          { id: query },
        ]
      }
    });

    if (!program) {
      throw new Error('Program not found');
    }

    return program;
  }

  static async getProgramByNameAndCategory(progName, progcategory) {
    const program = await Program.findOne({
      where: {
        [Op.and]: [
          { name: progName },
          { category: progcategory }
        ]
      }
    });

    if (!program) {
      throw new Error('Program not found');
    }

    return program;
  }

  static async updateProgramCourses(programId, year, semester, courses) {
    const program = await Program.findByPk(programId);

    if (!program) {
      throw new Error('Program not found');
    }

    const updatedInfo = await deepCopy(program.info);

    const pCourses = updatedInfo.find((item) => item.year === year && item.semester === semester);

    if (!pCourses) {
      throw new Error('Cannot find program info');
    }

    pCourses.courses = [...pCourses.courses, ...courses];

    program.info = updatedInfo;

    await program.save();
  }
}

module.exports = ProgramOFStudy;
