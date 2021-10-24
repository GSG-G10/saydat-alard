const schema = require('./signupValidation.js');
const hashPassword = require('./hashPassword');
const comparePasswords = require('./comparePassword');

module.exports = { schema, hashPassword, comparePasswords };
