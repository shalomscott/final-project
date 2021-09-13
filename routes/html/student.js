const { Router } = require('express');
const { getAllStudents, deleteStudent } = require('../../shared/student-utils');

const router = Router();

router.get('/', async (req, res) => {
  const students = await getAllStudents();
  res.render('students', { students });
});

router.post('/delete/:id', async (req, res) => {
  await deleteStudent(req.params.id); // This can throw. Check and display error page if need be (or some other indication an error occurred)
  res.redirect('/');
});

module.exports = router;
