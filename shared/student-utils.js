const Student = require('../models/student');

function getAllStudents() {
  return Student.find().exec();
}

function deleteStudent(objectId) {
  return Student.findByIdAndDelete(objectId).exec();
}

module.exports = {
  getAllStudents,
  deleteStudent
};

// /** @type {import('mongoose').Document} */
// const shalomStudent = new Student({
//   name: 'Shalom',
//   toar: 'bsc'
// });

// shalomStudent.save();
