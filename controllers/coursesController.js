const validateCourse = require('../middleware/validate').validateCourse;
const coursesModel = require('../models/coursesModel');
const courses = coursesModel.courses;

const findCourse = (courseID) => {
    return courses.find(course => course.id === parseInt(courseID));
};

exports.getAllCourses = function(req, res) {
    res.send(courses);
};

exports.getCourse = function(req, res) {
    const course = findCourse(req.params.id); 
    return course? res.send(course): res.status(404).send('Course Not Found');
};

exports.postCourse = function(req, res) {
    const result = validateCourse(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);
    const course = {
        name: req.body.name,
        code: req.body.code,
        description: req.body.description || 'No Description Available',
        id: courses.length + 1
    };
    courses.push(course);
    res.send(course);
};

exports.updateCourse = function(req, res) {
    const course = findCourse(req.params.id);
    if (!course) return res.status(404).send('Course Not Found');

    const result = validateCourse(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    course.name = req.body.name;
    course.code = req.body.code;
    course.description = req.body.description || "No Description Available";

    res.send(course);
};

exports.deleteAllCourses = function(req, res) {
    courses.splice(0, courses.length);
    res.send('All Courses Deleted Successfully');
};

exports.deleteCourse = function(req, res) {
    const course = findCourse(req.params.id);
    if (!course) return res.status(404).send('Course Not Found');

    const id = courses.indexOf(course);
    courses.splice(id, 1);

    res.send(course);
};