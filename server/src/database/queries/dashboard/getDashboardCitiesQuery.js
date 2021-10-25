const connection = require('../../config/connection');

const getDashboardCitiesQuery = () => connection.query(
  'SELECT * FROM cities',

);

module.exports = getDashboardCitiesQuery;
