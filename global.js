const { createConnection } = require('mongoose');

const MONGODB_URL = 'mongodb://localhost:27017';

module.exports = {
  runMode: process.argv[2] === '--json' ? 'json' : 'html',
  academyConnection: createConnection(`${MONGODB_URL}/academy`)
};
