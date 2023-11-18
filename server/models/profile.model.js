const { DataTypes } = require('sequelize');
const BaseModel = require('./base.model')

class Profile extends BaseModel {
  constructor (kwargs={}) {
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
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
    }, {
      sequelize: dbClient,
      modelName: 'Profile',
    });
  }

  static associate(models) {
    Profile.belongsTo(models.Student, { foreignKey: 'studentId' });
  }
}

module.exports = Profile;
