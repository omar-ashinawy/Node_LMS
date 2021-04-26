const fs = require('fs');

exports.getStudentForm = function(req, res) {
    const formPath = './forms/createStudent.html';
    fs.readFile(formPath, (error, data) => {
        if(error) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('Form Not Found!');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

exports.getCourseForm = function(req, res) {
    const formPath = './forms/createCourse.html';
    fs.readFile(formPath, (error, data) => {
        if(error) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('Form Not Found!');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};