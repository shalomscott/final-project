const { Schema } = require('mongoose');
const { academyConnection } = require('../global');

const courseSchema = new Schema({
  cid: String,
  grade: {
    type: Number,
    min: 0,
    max: 100
  }
});

const studentSchema = new Schema({
  id: {
    type: Number,
    max: 999999999
  },
  name: String,
  city: String,
  toar: String,
  courses: [courseSchema]
});

module.exports = academyConnection.model('Student', studentSchema);
