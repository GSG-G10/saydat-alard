const connection = require('../../config/connection');

const getCitiesNamesQuery = (city) => connection.query(
  'SELECT * FROM cities WHERE name LIKE $1', [`${city}%`],
);

module.exports = getCitiesNamesQuery;
