const connection = require('../config/connection');

const getMainCitiesQuery = () => connection.query('SELECT * from cities where is_main=TRUE');

module.exports = getMainCitiesQuery;
