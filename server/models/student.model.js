const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model');
const CourseRegistration = require('./coureRegistration.model');

const storage = require('./storage/dbStorage.model');

class Student extends BaseModel {
  constructor (kwargs = {}) {
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
      matric: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      year: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      semester: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize: dbClient,
      modelName: 'Student',
    });
  }

  static associate(models) {
    Student.hasOne(models.Profile, { foreignKey: 'studentId' });
    Student.belongsTo(models.Department, { foreignKey: 'departmentId' });
    Student.hasMany(models.Result, { foreignKey: 'studentId' });
    Student.belongsToMany(models.Course, {
      through: CourseRegistration,
      foreignKey: 'studentId',
    });
  }
}

module.exports = Student;
