const connection = require('../../config/connection');

const getFamiliesQuery = (letter, cityId) => connection.query(
  'SELECT * FROM families WHERE name LIKE $1 AND city_id=$2 ',
  [`${letter}%`, cityId],
);

module.exports = getFamiliesQuery;
