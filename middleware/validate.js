const Joi = require('joi');

exports.validateStudent = (student) => {
    const schema = Joi.object({
        name: Joi.string().pattern(new RegExp('^([A-z]*[\'-]*)+$')).required(),
        code: Joi.string().length(7).required(),
    });
    return schema.validate(student);
};

exports.validateCourse = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        code: Joi.string().pattern(new RegExp('^[A-z]{3}[0-9]{3}$')).required(),
        description: Joi.string().min(0).max(200).optional()
    });
    return schema.validate(course);
};