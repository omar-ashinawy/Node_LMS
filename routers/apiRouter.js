const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const studentsController = require('../controllers/studentsController');

// Courses Routes

router.get('/courses', coursesController.getAllCourses);

router.get('/courses/:id', coursesController.getCourse);

router.post('/courses', coursesController.postCourse);

router.put('/courses/:id', coursesController.updateCourse);

router.delete('/courses', coursesController.deleteAllCourses);

router.delete('/courses/:id', coursesController.deleteCourse);

// Students Routes

router.get('/students', studentsController.getAllStudents);

router.get('/students/:id', studentsController.getStudent);

router.post('/students', studentsController.postStudent);

router.put('/students/:id', studentsController.updateStudent);

router.delete('/students', studentsController.deleteAllStudents);

router.delete('/students/:id', studentsController.deleteStudent);

module.exports = router;