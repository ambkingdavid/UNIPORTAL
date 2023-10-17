const uuidv4 = require('uuid').v4;
const { DataTypes } = require('sequelize');
const dbClient = require('../config/sequelize.config');
const { customLogger } = require('./helpers');

// User Model
const User = dbClient.define('User', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  username: {
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
  role: DataTypes.STRING,
});

// Profile Model
const Profile = dbClient.define('Profile', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  date_of_birth: DataTypes.DATE,
  address: DataTypes.STRING,
  phone_number: DataTypes.STRING,
  profile_picture: DataTypes.STRING,
});

// Course Model
const Course = dbClient.define('Course', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  course_code: DataTypes.STRING,
  course_name: DataTypes.STRING,
  department: DataTypes.STRING,
  description: DataTypes.TEXT,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE,
  capacity: DataTypes.INTEGER,
});

// Score Model
const Score = dbClient.define('Score', {
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  score: DataTypes.INTEGER,
  date_completed: DataTypes.DATE,
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
  file_url: DataTypes.STRING,
});

// Define relationships between the models
User.hasOne(Profile);
Profile.belongsTo(User);

Course.belongsTo(User, { as: 'professor' });
User.hasMany(Course, { as: 'courses' });

User.hasMany(Score);
Score.belongsTo(User);

Course.hasMany(Score);
Score.belongsTo(Course);

Course.hasMany(Library);
Library.belongsTo(Course);

// Synchronize the models with the database
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
  User,
  Profile,
  Course,
  Score,
  Library,
};
