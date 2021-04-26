const express = require('express');
const router = express.Router();
const urlBp = require('body-parser').urlencoded({extended: false});
const coursesController = require('../controllers/coursesController');
const formsController = require('../controllers/formsController');
const studentController = require('../controllers/studentsController');

router.get('/courses/create', formsController.getCourseForm);

router.get('/students/create', formsController.getStudentForm);

router.post('/courses/create', urlBp, coursesController.postCourse);

router.post('/students/create', urlBp, studentController.postStudent);

module.exports = router;