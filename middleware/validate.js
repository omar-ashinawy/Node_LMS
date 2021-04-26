const Joi = require('joi');

exports.validateStudent = (student) => {
    const schema = Joi.object({
        name: Joi.string().pattern(new RegExp('^[A-z]*[\'-]*[A-z]*$')).required(),
        code: Joi.string().length(7).required(),
    });
    return schema.validate(student);
};

exports.validateCourse = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        code: Joi.string().pattern(new RegExp('^[A-z]{3}[0-9]{3}$')).required(),
        description: Joi.string().max(200)
    });
    return schema.validate(course);
};