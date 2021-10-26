const connection = require('../../config/connection');

const getCityDataQuery = (id) => connection.query('SELECT * FROM cities WHERE id=$1', [id]);

module.exports = getCityDataQuery;
