const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model');

class Department extends BaseModel {
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      info: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    }, {
      sequelize: dbClient,
      modelName: 'Department'
    });
  }

  static associate(models) {
    Department.hasMany(models.Student, { foreignKey: 'departmentId' });
  }
}

module.exports = Department;
