const { Router } = require('express');
const { getAllStudents } = require('../../shared/student-utils');

const router = Router();

router.get('/', async (req, res) => {
  const students = await getAllStudents();
  res.json(students);
});

module.exports = router;
