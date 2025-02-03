const fs = require('fs');
const path = require('path');

const logError = (message) => {
  const logMessage = `[${new Date().toISOString()}] - ${message}\n`;
  fs.appendFileSync(path.join(__dirname, 'error.log'), logMessage);
};

module.exports = logError;
