const connection = require('../../config/connection');

const checkCityByNameQuery = (cityName) => connection.query('SELECT * FROM cities WHERE cities.name=$1', [cityName]);

module.exports = checkCityByNameQuery;
