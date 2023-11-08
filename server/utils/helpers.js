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

function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  } else if (typeof obj === 'object' && obj !== null) {
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  } else {
    return obj;
  }
}

module.exports = { hashPassword, formatDate, customLogger, deepCopy };
