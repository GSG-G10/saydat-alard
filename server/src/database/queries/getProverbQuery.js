const connection = require('../config/connection');

const getProverbQuery = () => connection.query('SELECT * FROM proverbs ');
module.exports = getProverbQuery;
