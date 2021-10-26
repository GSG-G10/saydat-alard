const connection = require('../../config/connection');

const getstoryDataQuery = (id) => connection.query('SELECT * FROM stories WHERE city_id=$1', [id]);

module.exports = { getstoryDataQuery };
