const uuidv4 = require('uuid').v4;
const { DataTypes } = require('sequelize');
const dbClient = require('../config/sequelize.config');
const { customLogger } = require('./helpers');

const Student = dbClient.define('Student', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
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
  courseOfStudy: DataTypes.STRING,
  admissionType: DataTypes.STRING,
  isLoggedIn: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

const Staff = dbClient.define('Staff', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  staffNumber: {
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
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: DataTypes.STRING,
  faculty: DataTypes.STRING,
});

// Profile Model
const Profile = dbClient.define('Profile', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  dateOfBirth: DataTypes.DATE,
  address: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
});

// Course Model
const Course = dbClient.define('Course', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  courseCode: DataTypes.STRING,
  courseName: DataTypes.STRING,
  department: DataTypes.STRING,
  description: DataTypes.TEXT,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  unit: DataTypes.INTEGER,
});

// Score Model
const Result = dbClient.define('Result', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  score: DataTypes.INTEGER,
  dateCompleted: DataTypes.DATE,
  remarks: DataTypes.STRING,
});

// Library (Course Materials) Model
const Library = dbClient.define('Library', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  fileUrl: DataTypes.STRING,
});

Student.hasOne(Profile, { foreignKey: 'studentId' });
Profile.belongsTo(Student, { foreignKey: 'studentId' });

Course.belongsTo(Student);
Student.hasMany(Course, { as: 'courses' });

Student.hasMany(Result, { as: 'results' });
Result.belongsTo(Student);

Course.hasMany(Library);
Library.belongsTo(Course);

dbClient.afterDefine((model) => {
  const logMessage = `[Table Created] Table "${model.name}" has been defined.`;
  customLogger(logMessage);
});

(async () => {
  try {
    await dbClient.sync();
    const logMessage = '[Database Sync] University database synchronization completed.';
    customLogger(logMessage);
  } catch (err) {
    const logMessage = `[Database Sync Error] ${err.message}`;
    customLogger(logMessage);
  }
})();

module.exports = {
  Student,
  Staff,
  Profile,
  Course,
  Result,
  Library,
};
