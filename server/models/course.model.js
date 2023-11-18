const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model');
const CourseRegistration = require('./coureRegistration.model');


class Course extends BaseModel {
  constructor (kwargs={}) {
    for (const key in kwargs) {
      this[key] = kwargs[key];
    }
  }

  static init (dbClient) {
    return super.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      courseCode: DataTypes.STRING,
      courseName: DataTypes.STRING,
      unit: DataTypes.INTEGER,
    }, {
      sequelize: dbClient,
      modelName: 'Course',
    });
  }

  static associate(models) {
    Course.hasMany(models.Result, { foreignKey: 'courseId' });
    Course.hasMany(models.Resource, { foreignKey: 'courseId' });
    Course.belongsToMany(models.Student, {
      through: CourseRegistration,
      foreignKey: 'courseId',
    });
  }
}

module.exports = Course;
