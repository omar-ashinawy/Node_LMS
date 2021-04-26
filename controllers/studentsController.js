const validateStudent = require('../middleware/validate').validateStudent;
const studentsModel = require('../models/studentsModel');
const students = studentsModel.students;

const findStudent = (studentID) => {
    return students.find(student => student.id === parseInt(studentID));
};

exports.getAllStudents = function(req, res) {
    res.send(students);
};

exports.getStudent = function(req, res) {
    const student = findStudent(req.params.id); 
    return student? res.send(student): res.status(404).send('Student Not Found');
};

exports.postStudent = function(req, res) {
    const result = validateStudent(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);
    const student = {
        name: req.body.name,
        code: req.body.code,
        id: students.length + 1
    };
    students.push(student);
    res.send(student);
};

exports.updateStudent = function(req, res) {
    const student = findStudent(req.params.id);
    if (!student) return res.status(404).send('Student Not Found');

    const result = validateStudent(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    student.name = req.body.name;
    student.code = req.body.code;

    res.send(student);
};

exports.deleteAllStudents = function(req, res) {
    students.splice(0, students.length);
    res.send('All Students Deleted Successfully');
};

exports.deleteStudent = function(req, res) {
    const student = findStudent(req.params.id);
    if (!student) return res.status(404).send('Student Not Found');

    const id = students.indexOf(student);
    students.splice(id, 1);

    res.send(student);
};