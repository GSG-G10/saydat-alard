const connection = require('../../config/connection');

const getCitiesNamesQuery = (city) => connection.query(
  'SELECT * from cities where name LIKE $1', [`${city}%`],
);

module.exports = getCitiesNamesQuery;
