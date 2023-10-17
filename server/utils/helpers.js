const bcrypt = require('bcrypt');
const fs = require('fs');

function customLogger(logMessage) {
  const message = `${logMessage} \n`;
  fs.appendFileSync('sequelize.log', message);
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

module.exports = { hashPassword, formatDate, customLogger };
