const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model');


class CourseRegistration extends BaseModel {
  constructor(kwargs = {}) {
    super();

    for (const key in kwargs) {
      this[key] = kwargs[key];
    }
  }

  static init(dbClient) {
    return super.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      level: DataTypes.INTEGER,
      semester: DataTypes.INTEGER,
    }, {
      sequelize: dbClient,
      modelName: 'CourseRegistration'
    });
  }
}

module.exports = CourseRegistration;
