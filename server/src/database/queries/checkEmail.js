const connection = require('../config/connection');

const checkEmail = (email) => connection.query('SELECT name,password from users where email=$1', [email]);
module.exports = checkEmail;
