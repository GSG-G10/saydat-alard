const connection = require('../../config/connection');

const getDashboardCitiesQuery = (page = 1) => connection.query(
  'SELECT * FROM cities LIMIT 5 OFFSET ($1 - 1) * 5', [page],

);

module.exports = getDashboardCitiesQuery;
