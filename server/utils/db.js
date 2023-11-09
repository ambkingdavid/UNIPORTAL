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
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 100,
    allowNull: false,
  },
  semester: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
  courseOfStudy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false,
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

//Program Model
const Program = dbClient.define('Program', {
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
  unit: DataTypes.INTEGER,
});

// course registration
const CourseRegistration = dbClient.define('CourseRegistration', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  level: DataTypes.INTEGER,
  semester: DataTypes.INTEGER,
});


// Score Model
const Result = dbClient.define('Result', {
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

// one-to-many relationship
Program.hasMany(Student, { foreignKey: 'programId' });
Student.belongsTo(Program, { foreignKey: 'programId' });

// one-to-one relationship
Student.hasOne(Profile, { foreignKey: 'studentId' });
Profile.belongsTo(Student, { foreignKey: 'studentId' });

// many-to-many relationship
Student.belongsToMany(Course, {
  through: CourseRegistration,
  foreignKey: 'studentId',
});
Course.belongsToMany(Student, {
  through: CourseRegistration,
  foreignKey: 'courseId',
});

// one-to-many relationship
Student.hasMany(Result, { foreignKey: 'studentId' });
Result.belongsTo(Student, { foreignKey: 'studentId' });

// one-to-many relationship
Course.hasMany(Result, { foreignKey: 'courseId' });
Result.belongsTo(Course, { foreignKey: 'courseId' });

// one-to-many relationship
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
  Program,
  Course,
  Result,
  Library,
};
