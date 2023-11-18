const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model');


class Resource extends BaseModel {
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
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      fileUrl: DataTypes.STRING,
    }, {
      sequelize: dbClient,
      modelName: 'Resource',
    })
  }

  static associate(models) {
    Resource.belongsTo(models.Course, { foreignKey: 'courseId'});
  }
}

module.exports = Resource;
