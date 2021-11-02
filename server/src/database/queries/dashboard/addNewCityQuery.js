const connection = require('../../config/connection');

const addNewCityQuery = ({
  cityName, area, location, url, quotation, isMain,
}) => connection.query(
  'INSERT INTO cities (name, area, location, image, quotation, is_main) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
  [cityName, area, location, url, quotation, isMain],
);

module.exports = addNewCityQuery;
