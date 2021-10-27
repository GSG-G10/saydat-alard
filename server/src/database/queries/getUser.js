const connection = require('../config/connection');

const getUser = (email, id) => connection.query('SELECT * FROM users WHERE email = $1 or id=$2 ', [
  email, id,
]);

module.exports = getUser;
