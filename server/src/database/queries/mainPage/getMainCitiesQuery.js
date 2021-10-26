const connection = require('../../config/connection');

const getMainCitiesQuery = () => connection.query('SELECT * FROM cities WHERE is_main=TRUE');

module.exports = getMainCitiesQuery;
