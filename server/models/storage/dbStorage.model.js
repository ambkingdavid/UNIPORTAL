const Student = require('../student.model');
const Profile = require('../profile.model');
const Course = require('../course.model');
const Result = require('../result.model');
const Resource = require('../resource.model');
const Department = require('../department.model');
const CourseRegistration = require('../coureRegistration.model');

const models = {
  Student,
  Profile,
  Course,
  Result,
  Resource,
  Department,
  CourseRegistration,
}

class DBStorage {
  async new(obj) {
    try {
      const model = obj.constructor;
      await model.create(obj);
    } catch (err) {
      console.log(err);
    }
  }

  async getById(cls=null, id) {
    if (!cls || !models[cls]) {
      throw new Error('class does not exist');
    }
    const model = models[cls];
    const result = model.findByPk(id);

    return result;
  }

  async update(model, id) {
    
  }

  async delete(tableName, query) {
    
  }
}

const dbStorage = DBStorage();

module.exports = dbStorage;
