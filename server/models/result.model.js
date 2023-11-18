const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model');


class Result extends BaseModel {
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
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      score: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      GP: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      remarks: DataTypes.STRING,
    }, {
      sequelize: dbClient,
      modelName: 'Result'
    });
  }

  static associate(models) {
    Result.belongsTo(models.Student, { foreignKey: 'studentId' });
    Result.belongsTo(models.Course, { foreignKey: 'courseId' });
  }
}

module.exports = Result;
