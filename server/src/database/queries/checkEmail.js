const connection = require('../config/connection');

const checkUser = (email) => connection.query('SELECT name,password from users where email=$1', [email]);
module.exports = checkUser;
