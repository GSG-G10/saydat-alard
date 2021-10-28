const connection = require('../../config/connection');

const addNewCityQuery = ({
  cityName, area, location, image, quotation, is_main,
}) => connection.query(
  'INSERT INTO cities (name, area, location, image, quotation, is_main) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
  [cityName, area, location, image, quotation, is_main],
);

module.exports = addNewCityQuery;
